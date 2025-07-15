import { z } from "zod";

export const customerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  location: z.string().min(1, "Location is required"),
  orders: z.coerce.number().positive("Orders must be a positive number"),
  status: z.enum(["Active", "Inactive", "Pending"]),
});

export type CustomerSchema = typeof customerSchema;
