"use client";

import Link from "next/link";
import { DataTable } from "@/components/data-table";
import { Badge } from "@/components/ui/badge";
import type { Product } from "./types";
import { ColumnDef } from "@tanstack/react-table";

const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Product Name",
    cell: ({ row }) => (
      <Link
        href={`/dashboard/products/${row.original.id}`}
        className="text-primary underline underline-offset-2 hover:text-primary/80"
      >
        {row.original.name}
      </Link>
    ),
  },
  { accessorKey: "category", header: "Category" },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => `$${row.original.price.toFixed(2)}`,
  },
  { accessorKey: "stock", header: "Stock" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        variant={
          row.original.status === "Active"
            ? "default"
            : row.original.status === "Low Stock"
            ? "secondary"
            : "outline"
        }
      >
        {row.original.status}
      </Badge>
    ),
  },
];

export function ProductsClient({ products }: { products: Product[] }) {
  return (
    <div className="flex flex-col gap-6 p-6">
      <h1 className="text-2xl font-bold">Product Listing</h1>
      <DataTable data={products} columns={columns} />
    </div>
  );
} 