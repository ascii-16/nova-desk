"use server";

import { extractZodErrors, randomSlug } from "@/lib/utils";
import { createProduct } from "./service";
import { productSchema } from "./validation";
import type { CreateProductValues } from "./types";

export async function createProductAction(
  _prevState: FormState<CreateProductValues>,
  formData: FormData
): Promise<FormState<CreateProductValues>> {
  const values = {
    name: formData.get("name")?.toString() ?? "",
    category: formData.get("category")?.toString() ?? "",
    price: formData.get("price")?.toString() ?? "",
    stock: formData.get("stock")?.toString() ?? "",
    status: (formData.get("status")?.toString() ??
      "Active") as CreateProductValues["status"],
  };

  const validatedFields = productSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: extractZodErrors(validatedFields.error),
      messages: [],
      values,
    };
  }

  try {
    await createProduct({ ...validatedFields.data, id: randomSlug() });

    return {
      success: true,
      errors: {},
      messages: [],
      values,
    };
  } catch (e) {
    return {
      success: false,
      errors: {},
      messages: ["Unable to add product"],
      values,
    };
  }
}
