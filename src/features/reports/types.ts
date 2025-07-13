export interface Report {
  id: string;
  title: string;
  createdAt: string;
  status: "Ready" | "Processing" | "Failed";
  downloadUrl?: string;
} 