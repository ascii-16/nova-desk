export interface Customer {
  id: number;
  name: string;
  email: string;
  location: string;
  orders: number;
  status: "Active" | "Inactive" | "Pending";
} 