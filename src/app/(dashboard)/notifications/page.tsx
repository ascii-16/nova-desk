import { NotificationsClient } from "@/features/notifications/client";
import { fetchNotifications } from "@/features/notifications/service";

export default async function NotificationsPage() {
  const notifications = await fetchNotifications();
  return <NotificationsClient notifications={notifications} />;
}
