"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/data-table";
import { ColumnDef } from "@tanstack/react-table";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Order {
  id: number;
  customer: string;
  product: string;
  amount: number;
  status: "Pending" | "Shipped" | "Delivered" | "Cancelled";
  date: string;
}

const orders: Order[] = [
  {
    id: 1,
    customer: "John Doe",
    product: "Wireless Mouse",
    amount: 29.99,
    status: "Delivered",
    date: "2025-07-01",
  },
  {
    id: 2,
    customer: "Jane Smith",
    product: "Office Chair",
    amount: 149.99,
    status: "Shipped",
    date: "2025-07-03",
  },
  {
    id: 3,
    customer: "Bob Johnson",
    product: "Standing Desk",
    amount: 299.99,
    status: "Pending",
    date: "2025-07-08",
  },
  {
    id: 4,
    customer: "Alice Brown",
    product: "Notebook",
    amount: 3.99,
    status: "Cancelled",
    date: "2025-07-02",
  },
  {
    id: 5,
    customer: "David Wilson",
    product: "Bluetooth Headphones",
    amount: 59.99,
    status: "Delivered",
    date: "2025-07-04",
  },
];

const columns: ColumnDef<Order>[] = [
  { accessorKey: "customer", header: "Customer" },
  { accessorKey: "product", header: "Product" },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => `$${row.original.amount.toFixed(2)}`,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        variant={
          {
            Delivered: "default",
            Shipped: "secondary",
            Pending: "outline",
            Cancelled: "destructive",
          }[row.original.status] as
            | "default"
            | "secondary"
            | "outline"
            | "destructive"
        }
      >
        {row.original.status}
      </Badge>
    ),
  },
  { accessorKey: "date", header: "Date" },
];

const salesChartData = [
  { date: "Jul 1", sales: 300 },
  { date: "Jul 2", sales: 500 },
  { date: "Jul 3", sales: 400 },
  { date: "Jul 4", sales: 650 },
  { date: "Jul 5", sales: 700 },
  { date: "Jul 6", sales: 300 },
  { date: "Jul 7", sales: 400 },
];

export default function OrdersPage() {
  const [data, setData] = useState<Order[]>(orders);

  return (
    <div className="flex flex-col gap-8 p-6">
      <h1 className="text-2xl font-bold">Orders Overview</h1>

      <div className="rounded-md border p-4">
        <h2 className="mb-2 text-lg font-medium">Sales This Week</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={salesChartData}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#3b82f6"
              fillOpacity={1}
              fill="url(#colorSales)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="rounded-md border p-4">
        <h2 className="mb-2 text-lg font-medium">Recent Orders</h2>
        <DataTable data={data} columns={columns} />
      </div>
    </div>
  );
}
