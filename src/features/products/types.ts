import { Formify } from "@/types/form";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "Active" | "Inactive" | "Low Stock";
};

export type CreateProductValues = Formify<Omit<Product, "id">>;
