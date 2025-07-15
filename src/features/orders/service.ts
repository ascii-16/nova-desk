import { delay } from "@/lib/utils";
import type { Order } from "./types";

export async function fetchOrders(): Promise<Order[]> {
  await delay(1000);
  return [
    {
      id: 1,
      customer: "John Doe",
      product: "Wireless Mouse",
      amount: 29.99,
      status: "Delivered",
      date: "2025-07-01",
    },
    {
      id: 2,
      customer: "Jane Smith",
      product: "Office Chair",
      amount: 149.99,
      status: "Shipped",
      date: "2025-07-03",
    },
    {
      id: 3,
      customer: "Bob Johnson",
      product: "Standing Desk",
      amount: 299.99,
      status: "Pending",
      date: "2025-07-08",
    },
    {
      id: 4,
      customer: "Alice Brown",
      product: "Notebook",
      amount: 3.99,
      status: "Cancelled",
      date: "2025-07-02",
    },
    {
      id: 5,
      customer: "David Wilson",
      product: "Bluetooth Headphones",
      amount: 59.99,
      status: "Delivered",
      date: "2025-07-04",
    },
  ];
}
