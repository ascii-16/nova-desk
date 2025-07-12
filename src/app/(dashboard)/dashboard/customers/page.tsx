"use client";

import { DataTable } from "@/components/data-table";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";

interface Customer {
  id: number;
  name: string;
  email: string;
  location: string;
  orders: number;
  status: "Active" | "Inactive" | "Pending";
}

const customers: Customer[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    location: "New York",
    orders: 12,
    status: "Active",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    location: "San Francisco",
    orders: 5,
    status: "Pending",
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    location: "Chicago",
    orders: 0,
    status: "Inactive",
  },
  {
    id: 4,
    name: "Diana Prince",
    email: "diana@example.com",
    location: "Los Angeles",
    orders: 8,
    status: "Active",
  },
  {
    id: 5,
    name: "Evan Thomas",
    email: "evan@example.com",
    location: "Seattle",
    orders: 3,
    status: "Pending",
  },
];

const columns: ColumnDef<Customer>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "location", header: "Location" },
  { accessorKey: "orders", header: "Orders" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        variant={
          row.original.status === "Active"
            ? "default"
            : row.original.status === "Pending"
            ? "secondary"
            : "outline"
        }
      >
        {row.original.status}
      </Badge>
    ),
  },
];

export default function CustomerListingPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <h1 className="text-2xl font-bold">Customer Listing</h1>
      <DataTable data={customers} columns={columns} />
    </div>
  );
}
