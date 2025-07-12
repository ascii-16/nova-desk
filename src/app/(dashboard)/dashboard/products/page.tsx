"use client";

import { DataTable } from "@/components/data-table";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "Active" | "Inactive" | "Low Stock";
}

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 29.99,
    stock: 120,
    status: "Active",
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    category: "Electronics",
    price: 59.99,
    stock: 45,
    status: "Low Stock",
  },
  {
    id: 3,
    name: "Standing Desk",
    category: "Furniture",
    price: 299.99,
    stock: 10,
    status: "Low Stock",
  },
  {
    id: 4,
    name: "Notebook",
    category: "Stationery",
    price: 3.99,
    stock: 500,
    status: "Active",
  },
  {
    id: 5,
    name: "Office Chair",
    category: "Furniture",
    price: 149.99,
    stock: 0,
    status: "Inactive",
  },
];

const columns: ColumnDef<Product>[] = [
  { accessorKey: "name", header: "Product Name" },
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

export default function ProductListingPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <h1 className="text-2xl font-bold">Product Listing</h1>
      <DataTable data={products} columns={columns} />
    </div>
  );
}
