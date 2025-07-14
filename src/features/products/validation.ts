import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  category: z.string().min(1, "Category is required"),
  price: z.coerce.number().positive("Price must be a positive number"),
  stock: z.coerce.number().positive("Stock must be a positive number"),
  status: z.enum(["Active", "Inactive", "Low Stock"]),
});

export type ProductFormValues = z.infer<typeof productSchema>;
