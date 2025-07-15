export interface Order {
  id: number;
  customer: string;
  product: string;
  amount: number;
  status: "Pending" | "Shipped" | "Delivered" | "Cancelled";
  date: string;
}
