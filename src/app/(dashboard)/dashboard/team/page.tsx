import { TeamClient } from "@/features/team/client";
import { fetchTeam } from "@/features/team/service";

export default async function TeamPage() {
  const team = await fetchTeam();
  return <TeamClient team={team} />;
}
