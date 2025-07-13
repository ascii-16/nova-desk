import { OrdersClient } from "@/features/orders/client";
import { fetchOrders } from "@/features/orders/service";

export default async function OrdersPage() {
  const orders = await fetchOrders();
  return <OrdersClient orders={orders} />;
}
