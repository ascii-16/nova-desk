import { ReportsClient } from "@/features/reports/client";
import { fetchReports } from "@/features/reports/service";

export default async function ReportsPage() {
  const reports = await fetchReports();
  return <ReportsClient reports={reports} />;
}
