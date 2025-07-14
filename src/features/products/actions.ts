"use server";

import { extractZodErrors, randomSlug } from "@/lib/utils";
import { createProduct } from "./service";
import { productSchema } from "./validation";
import { CreateProductValues, Product } from "./types";

export async function createProductAction(
  _prevState: FormState<CreateProductValues>,
  formData: FormData
): Promise<FormState<CreateProductValues>> {
  const validatedFields = productSchema.safeParse({
    name: formData.get("name"),
    category: formData.get("category"),
    price: formData.get("price"),
    stock: formData.get("stock"),
    status: formData.get("status"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: extractZodErrors(validatedFields.error),
      messages: [],
      values: {
        name: formData.get("name")?.toString() ?? "",
        category: formData.get("category")?.toString() ?? "",
        price: formData.get("price")?.toString() ?? "",
        stock: formData.get("stock")?.toString() ?? "",
        status: (formData.get("status")?.toString() ??
          "Active") as CreateProductValues["status"],
      },
    };
  }

  await createProduct({ ...validatedFields.data, id: randomSlug() });

  return {
    success: true,
    errors: {},
    messages: [],
    values: {
      name: formData.get("name")?.toString() ?? "",
      category: formData.get("category")?.toString() ?? "",
      price: formData.get("price")?.toString() ?? "",
      stock: formData.get("stock")?.toString() ?? "",
      status: (formData.get("status")?.toString() ??
        "Active") as CreateProductValues["status"],
    },
  };
}
