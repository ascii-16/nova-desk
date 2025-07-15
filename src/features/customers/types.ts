import { Formify } from "@/types/form";

export interface Customer {
  id: string;
  name: string;
  email: string;
  location: string;
  orders: number;
  status: "Active" | "Inactive" | "Pending";
}

export type CreateCustomerValues = Formify<Omit<Customer, "id">>; 