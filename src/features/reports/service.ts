import { delay } from "@/lib/utils";
import type { Report } from "./types";

export async function fetchReports(): Promise<Report[]> {
  await delay(1000);
  return [
    {
      id: "rpt-001",
      title: "Monthly Sales Report - June",
      createdAt: "2025-07-01",
      status: "Ready",
      downloadUrl: "/reports/june.pdf",
    },
    {
      id: "rpt-002",
      title: "Customer Insights Q2",
      createdAt: "2025-07-05",
      status: "Processing",
    },
    {
      id: "rpt-003",
      title: "Inventory Status",
      createdAt: "2025-07-07",
      status: "Failed",
    },
  ];
} 