import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const notifications = [
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

export default function NotificationsPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Notifications</h1>
        <p className="text-muted-foreground">
          View all your recent alerts and messages.
        </p>
      </div>

      <Separator />

      <div className="grid gap-4">
        {notifications.map((notification) => (
          <Card key={notification.id}>
            <CardHeader>
              <CardTitle className="text-base">{notification.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground flex flex-col gap-1">
              <p>{notification.description}</p>
              <span className="text-xs">{notification.time}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
