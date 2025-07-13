import { AnalyticsClient } from "@/features/analytics/client";
import { fetchAnalytics } from "@/features/analytics/service";

export default async function AnalyticsPage() {
  const trafficData = await fetchAnalytics();

  return <AnalyticsClient trafficData={trafficData} />;
}
