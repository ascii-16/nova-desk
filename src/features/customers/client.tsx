"use client";

import Link from "next/link";
import { useState, useActionState, useEffect } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";
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
import type { CreateCustomerValues, Customer } from "./types";
import { createCustomerAction } from "./actions";
import { FieldError } from "@/components/ui/field-error";
import { fetchCustomers } from "./service";
import { Plus } from "lucide-react";
import type { FormState } from "@/types/form";

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

const initialState: FormState<CreateCustomerValues> = {
  success: false,
  errors: {},
  messages: [],
  values: {
    name: "",
    email: "",
    location: "",
    orders: "",
    status: "Active" as Customer["status"],
  },
};

export function CustomersClient({ customers }: { customers: Customer[] }) {
  const [data, setData] = useState(customers);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [state, formAction, pending] = useActionState(
    createCustomerAction,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      setSheetOpen(false);
      toast.success(
        <>
          <h4>Customer added</h4>
          <p>(Note: only simulation)</p>
        </>,
        { position: "top-right" }
      );
      // In a real life api call, this would ideally refetch the updated
      // products array from the remote server. since we're using an in memory
      // products array as the source here, it wouldn't update synchronously
      fetchCustomers().then(setData);
    }
  }, [state]);

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
            <form action={formAction} className="flex flex-col gap-4 p-4">
              <div>
                <Label htmlFor="name" className="mb-2">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  defaultValue={state.values?.name}
                />
                <FieldError name="name" errors={state.errors} />
              </div>
              <div>
                <Label htmlFor="email" className="mb-2">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue={state.values?.email}
                />
                <FieldError name="email" errors={state.errors} />
              </div>
              <div>
                <Label htmlFor="location" className="mb-2">
                  Location
                </Label>
                <Input
                  id="location"
                  name="location"
                  defaultValue={state.values?.location}
                />
                <FieldError name="location" errors={state.errors} />
              </div>
              <div>
                <Label htmlFor="orders" className="mb-2">
                  Orders
                </Label>
                <Input
                  id="orders"
                  name="orders"
                  type="number"
                  defaultValue={state.values?.orders}
                />
                <FieldError name="orders" errors={state.errors} />
              </div>
              <div>
                <Label htmlFor="status" className="mb-2">
                  Status
                </Label>
                <select
                  id="status"
                  name="status"
                  className="border rounded px-2 py-1"
                  defaultValue={state.values?.status}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
              <SheetFooter>
                <Button type="submit" disabled={pending}>
                  Add Customer
                </Button>
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
