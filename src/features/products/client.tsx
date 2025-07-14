"use client";

import Link from "next/link";
import { useState } from "react";
import { DataTable } from "@/components/data-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetClose } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  const [data, setData] = useState(products);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    status: "Active" as Product["status"],
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setData([
      ...data,
      {
        id: Math.max(0, ...data.map((p) => p.id)) + 1,
        name: form.name,
        category: form.category,
        price: Number(form.price),
        stock: Number(form.stock),
        status: form.status,
      },
    ]);
    setForm({ name: "", category: "", price: "", stock: "", status: "Active" });
    setSheetOpen(false);
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Product Listing</h1>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">
              Add Product
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add Product</SheetTitle>
            </SheetHeader>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
              <div>
                <Label htmlFor="name" className="mb-2">Name</Label>
                <Input id="name" name="name" value={form.name} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="category" className="mb-2">Category</Label>
                <Input id="category" name="category" value={form.category} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="price" className="mb-2">Price</Label>
                <Input id="price" name="price" type="number" step="0.01" value={form.price} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="stock" className="mb-2">Stock</Label>
                <Input id="stock" name="stock" type="number" value={form.stock} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="status" className="mb-2">Status</Label>
                <select
                  id="status"
                  name="status"
                  value={form.status}
                  onChange={handleInputChange}
                  className="border rounded px-2 py-1"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Low Stock">Low Stock</option>
                </select>
              </div>
              <SheetFooter>
                <Button type="submit">Add Product</Button>
                <SheetClose asChild>
                  <Button variant="outline" type="button">Cancel</Button>
                </SheetClose>
              </SheetFooter>
            </form>
          </SheetContent>
        </Sheet>
      </div>
      <DataTable data={data} columns={columns} />
    </div>
  );
} 