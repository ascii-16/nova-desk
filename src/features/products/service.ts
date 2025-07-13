import { delay } from "@/lib/utils";
import type { Product } from "./types";

export async function fetchProducts(): Promise<Product[]> {
  await delay(1000);
  return [
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
} 