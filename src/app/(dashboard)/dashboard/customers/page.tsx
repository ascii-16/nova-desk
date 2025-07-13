import { CustomersClient } from "@/features/customers/client";
import { fetchCustomers } from "@/features/customers/service";

export default async function CustomersPage() {
  const customers = await fetchCustomers();
  return <CustomersClient customers={customers} />;
}
