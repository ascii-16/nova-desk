import { delay } from "@/lib/utils";
import type { Notification } from "./types";

export async function fetchNotifications(): Promise<Notification[]> {
  await delay(1000);
  return [
    {
      id: "1",
      title: "New order placed",
      description: "Order #12345 has been placed successfully.",
      time: "5 minutes ago",
      href: "/dashboard/orders/12345",
    },
    {
      id: "2",
      title: "Password changed",
      description: "Your password was updated successfully.",
      time: "2 hours ago",
      href: "/dashboard/settings",
    },
    {
      id: "3",
      title: "New message",
      description: "You have received a new support message.",
      time: "Yesterday",
      href: "/dashboard/messages",
    },
  ];
}
