"use client";

import {
  type ColorTheme,
  useColorTheme,
} from "@/components/providers/theme-provider";
import { Check, Palette } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export const themes = [
  { label: "Default", value: "default" },
  { label: "Red", value: "red" },
  { label: "Rose", value: "rose" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
  { label: "Orange", value: "orange" },
  { label: "Mono", value: "mono" },
];

export function ColorThemeDropdown() {
  const { colorTheme, setColorTheme } = useColorTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Palette className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.value}
            onClick={() => setColorTheme(t.value as ColorTheme)}
            className="flex items-center justify-between"
          >
            {t.label}
            {colorTheme === t.value && (
              <Check className="h-4 w-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
