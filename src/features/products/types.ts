export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "Active" | "Inactive" | "Low Stock";
}

export type CreateProductValues = Omit<Product, "id" | "price" | "stock"> & {
  price: string;
  stock: string;
};
