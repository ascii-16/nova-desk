import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as Zod from "zod";
import { $ZodIssue } from "zod/v4/core";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function randomSlug(length = 8) {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}

export function extractZodErrors(error: Zod.ZodError) {
  const fieldErrors: Record<string, string[]> = {};

  for (const issue of error.issues) {
    const key = issue.path[0]?.toString() || "_form";

    if (!fieldErrors[key]) {
      fieldErrors[key] = [];
    }

    if (issue.code === "invalid_union" && "errors" in issue) {
      const unionErrors = issue.errors as $ZodIssue[][];

      const messages = unionErrors
        .flat()
        .map((e) => e.message)
        .filter(Boolean);

      fieldErrors[key].push(...messages);
    } else {
      fieldErrors[key].push(issue.message);
    }
  }

  return fieldErrors;
}
