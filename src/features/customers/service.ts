import { delay } from "@/lib/utils";
import type { Customer } from "./types";

const customers: Customer[] = [
  {
    id: "cus1a2b3c",
    name: "Alice Johnson",
    email: "alice@example.com",
    location: "New York",
    orders: 12,
    status: "Active",
  },
  {
    id: "cus4d5e6f",
    name: "Bob Smith",
    email: "bob@example.com",
    location: "San Francisco",
    orders: 5,
    status: "Pending",
  },
  {
    id: "cus7g8h9i",
    name: "Charlie Brown",
    email: "charlie@example.com",
    location: "Chicago",
    orders: 0,
    status: "Inactive",
  },
  {
    id: "cus0j1k2l",
    name: "Diana Prince",
    email: "diana@example.com",
    location: "Los Angeles",
    orders: 8,
    status: "Active",
  },
  {
    id: "cus3m4n5o",
    name: "Evan Thomas",
    email: "evan@example.com",
    location: "Seattle",
    orders: 3,
    status: "Pending",
  },
];

export async function fetchCustomers(): Promise<Customer[]> {
  await delay(1000);
  return customers;
}

export async function fetchCustomerById(
  id: string
): Promise<Customer | undefined> {
  const customer = customers.find((customer) => customer.id === id);
  await delay(500);
  return customer;
}

export async function createCustomer(customer: Customer) {
  await delay(500);
  customers.push(customer);
  return { message: "Customer added", customer };
}
