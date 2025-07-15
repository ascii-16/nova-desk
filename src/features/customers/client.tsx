"use client";

import Link from "next/link";
import { useState } from "react";
import { DataTable } from "@/components/data-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Customer } from "./types";
import { ColumnDef } from "@tanstack/react-table";
import { Plus } from "lucide-react";

const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <Link
        href={`/dashboard/customers/${row.original.id}`}
        className="text-primary underline underline-offset-2 hover:text-primary/80"
      >
        {row.original.name}
      </Link>
    ),
  },
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

export function CustomersClient({ customers }: { customers: Customer[] }) {
  const [data, setData] = useState(customers);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    orders: "",
    status: "Active" as Customer["status"],
  });

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setData([
      ...data,
      {
        id: Math.max(0, ...data.map((c) => c.id)) + 1,
        name: form.name,
        email: form.email,
        location: form.location,
        orders: Number(form.orders),
        status: form.status,
      },
    ]);
    setForm({
      name: "",
      email: "",
      location: "",
      orders: "",
      status: "Active",
    });
    setSheetOpen(false);
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Customer Listing</h1>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">
              <Plus /> Add Customer
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add Customer</SheetTitle>
            </SheetHeader>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
              <div>
                <Label htmlFor="name" className="mb-2">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="location" className="mb-2">
                  Location
                </Label>
                <Input
                  id="location"
                  name="location"
                  value={form.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="orders" className="mb-2">
                  Orders
                </Label>
                <Input
                  id="orders"
                  name="orders"
                  type="number"
                  value={form.orders}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="status" className="mb-2">
                  Status
                </Label>
                <select
                  id="status"
                  name="status"
                  value={form.status}
                  onChange={handleInputChange}
                  className="border rounded px-2 py-1"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
              <SheetFooter>
                <Button type="submit">Add Customer</Button>
                <SheetClose asChild>
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
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
