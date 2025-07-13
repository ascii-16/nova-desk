import { delay } from "@/lib/utils";
import type { Analytics } from "./types";

export async function fetchAnalytics(): Promise<Analytics[]> {
  // Mocking a rest api call
  await delay(1000);

  return [
    { month: "Jan", users: 1200, bounce: 40 },
    { month: "Feb", users: 1400, bounce: 38 },
    { month: "Mar", users: 1600, bounce: 42 },
    { month: "Apr", users: 1800, bounce: 35 },
    { month: "May", users: 2200, bounce: 30 },
    { month: "Jun", users: 2500, bounce: 28 },
  ];
}
