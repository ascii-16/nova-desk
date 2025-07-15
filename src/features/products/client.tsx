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
import type { CreateProductValues, Product } from "./types";
import { createProductAction } from "./actions";
import { FieldError } from "@/components/ui/field-error";
import { fetchProducts } from "./service";
import { Plus } from "lucide-react";
import type { FormState } from "@/types/form";

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

const initialState: FormState<CreateProductValues> = {
  success: false,
  errors: {},
  messages: [],
  values: {
    name: "",
    category: "",
    price: "",
    stock: "",
    status: "Active" as Product["status"],
  },
};

export function ProductsClient({ products }: { products: Product[] }) {
  const [data, setData] = useState(products);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [state, formAction, pending] = useActionState(
    createProductAction,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      setSheetOpen(false);
      toast.success(
        <>
          <h4>Product added</h4>
          <p>(Note: only stimulation)</p>
        </>,
        { position: "top-right" }
      );
      // In a real life api call, this would ideally refetch the updated
      // products array from the remote server. since we're using an in memory
      // products array as the source here, it wouldn't update synchronously
      fetchProducts().then(setData);
    }
  }, [state]);

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Product Listing</h1>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">
              <Plus /> Add Product
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add Product</SheetTitle>
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
                <Label htmlFor="category" className="mb-2">
                  Category
                </Label>
                <Input
                  id="category"
                  name="category"
                  defaultValue={state.values?.category}
                />
                <FieldError name="category" errors={state.errors} />
              </div>
              <div>
                <Label htmlFor="price" className="mb-2">
                  Price
                </Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  defaultValue={state.values?.price}
                />
                <FieldError name="price" errors={state.errors} />
              </div>
              <div>
                <Label htmlFor="stock" className="mb-2">
                  Stock
                </Label>
                <Input
                  id="stock"
                  name="stock"
                  type="number"
                  defaultValue={state.values?.stock}
                />
                <FieldError name="stock" errors={state.errors} />
              </div>
              <div>
                <Label htmlFor="status" className="mb-2">
                  Status
                </Label>
                <select
                  id="status"
                  name="status"
                  className="border rounded px-2 py-1"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Low Stock">Low Stock</option>
                </select>
              </div>
              <SheetFooter>
                <Button type="submit" disabled={pending}>
                  Add Product
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
