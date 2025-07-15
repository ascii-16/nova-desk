import { delay } from "@/lib/utils";
import type { Product } from "./types";

// NOTE: These functions just mock a db and may not mutate like a real life actual db
// Replace with your actual api call

const products: Product[] = [
  {
    id: "pji0dn1r",
    name: "Wireless Mouse",
    category: "Electronics",
    price: 29.99,
    stock: 120,
    status: "Active",
  },
  {
    id: "8fw2gbjp",
    name: "Bluetooth Headphones",
    category: "Electronics",
    price: 59.99,
    stock: 45,
    status: "Low Stock",
  },
  {
    id: "fi7qxuj3",
    name: "Standing Desk",
    category: "Furniture",
    price: 299.99,
    stock: 10,
    status: "Low Stock",
  },
  {
    id: "g4xu023y",
    name: "Notebook",
    category: "Stationery",
    price: 3.99,
    stock: 500,
    status: "Active",
  },
  {
    id: "a3fjpk6e",
    name: "Office Chair",
    category: "Furniture",
    price: 149.99,
    stock: 0,
    status: "Inactive",
  },
];

export async function fetchProducts(): Promise<Product[]> {
  await delay(1000);
  return [...products];
}

export async function fetchProductById(id: string): Promise<Product | undefined> {
  const product = products.find((product) => product.id === id);
  await delay(500);
  return product;
}

export async function createProduct(product: Product) {
  await delay(500);
  products.push(product);
  return { message: "Product added", product };
}
