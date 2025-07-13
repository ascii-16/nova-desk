"use client";

import { DataTable } from "@/components/data-table";
import { Badge } from "@/components/ui/badge";
import type { Order } from "./types";
import { ColumnDef } from "@tanstack/react-table";

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
        variant={{
          Delivered: "default",
          Shipped: "secondary",
          Pending: "outline",
          Cancelled: "destructive",
        }[row.original.status] as
          | "default"
          | "secondary"
          | "outline"
          | "destructive"}
      >
        {row.original.status}
      </Badge>
    ),
  },
  { accessorKey: "date", header: "Date" },
];

export function OrdersClient({ orders }: { orders: Order[] }) {
  return (
    <div className="flex flex-col gap-6 p-6">
      <h1 className="text-2xl font-bold">Orders Listing</h1>
      <DataTable data={orders} columns={columns} />
    </div>
  );
} 