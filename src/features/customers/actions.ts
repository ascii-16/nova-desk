"use server";

import { extractZodErrors, randomSlug } from "@/lib/utils";
import { createCustomer } from "./service";
import { customerSchema } from "./validation";
import type { CreateCustomerValues } from "./types";
import type { FormState } from "@/types/form";

export async function createCustomerAction(
  _prevState: FormState<CreateCustomerValues>,
  formData: FormData
): Promise<FormState<CreateCustomerValues>> {
  const values = {
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    location: formData.get("location")?.toString() ?? "",
    orders: formData.get("orders")?.toString() ?? "",
    status: (formData.get("status")?.toString() ?? "Active") as CreateCustomerValues["status"],
  };

  const validatedFields = customerSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: extractZodErrors(validatedFields.error),
      messages: [],
      values,
    };
  }

  try {
    await createCustomer({ ...validatedFields.data, id: randomSlug() });

    return {
      success: true,
      errors: {},
      messages: [],
      values,
    };
  } catch (e) {
    console.error(e);
    return {
      success: false,
      errors: {},
      messages: ["Unable to add customer"],
      values,
    };
  }
}
