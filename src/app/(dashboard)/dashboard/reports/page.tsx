"use client";

import { useState } from "react";
import { Download, FileText, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface Report {
  id: string;
  title: string;
  createdAt: string;
  status: "Ready" | "Processing" | "Failed";
  downloadUrl?: string;
}

const mockReports: Report[] = [
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

export default function ReportsPage() {
  const [reports] = useState<Report[]>(mockReports);

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Reports</h1>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Generate New Report
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <Input className="w-full max-w-sm" placeholder="Search reports..." />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3">Title</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reports.map((report) => (
              <TableRow key={report.id}>
                <TableCell>{report.title}</TableCell>
                <TableCell>{report.createdAt}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      report.status === "Ready"
                        ? "default"
                        : report.status === "Processing"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {report.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem disabled={report.status !== "Ready"}>
                        <a
                          href={report.downloadUrl}
                          download
                          className="flex w-full items-center gap-2"
                        >
                          <Download className="h-4 w-4" />
                          Download
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
