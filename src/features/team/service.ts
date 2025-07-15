import { delay } from "@/lib/utils";
import type { TeamMember } from "./types";

export async function fetchTeam(): Promise<TeamMember[]> {
  await delay(1000);
  return [
    {
      id: "1",
      name: "Joe Biden",
      email: "biden@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: "2",
      name: "Emily Whalen",
      email: "emily@example.com",
      role: "Editor",
      status: "Active",
    },
    {
      id: "3",
      name: "Jamik Tashpulatov",
      email: "jamik@example.com",
      role: "Viewer",
      status: "Invited",
    },
  ];
}
