import { delay } from "@/lib/utils";
import type { Customer } from "./types";

export async function fetchCustomers(): Promise<Customer[]> {
  await delay(1000);
  return [
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
} 