import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const notifications = [
  {
    id: "1",
    title: "New order placed",
    description: "Order #12345 has been placed successfully.",
    href: "/dashboard/orders/12345",
  },
  {
    id: "2",
    title: "Password changed",
    description: "Your password was updated recently.",
    href: "/dashboard/settings",
  },
  {
    id: "3",
    title: "New message",
    description: "You have a new support message.",
    href: "/dashboard/messages",
  },
];

export function NotificationsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Bell className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-80">
        {notifications.length === 0 ? (
          <DropdownMenuItem disabled>No notifications</DropdownMenuItem>
        ) : (
          <>
            {notifications.map((notification) => (
              <Link href={notification.href} key={notification.id}>
                <DropdownMenuItem className="flex flex-col items-start">
                  <span className="font-medium text-sm">
                    {notification.title}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {notification.description}
                  </span>
                </DropdownMenuItem>
              </Link>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link
                href="/notifications"
                className="text-sm text-center w-full"
              >
                View all notifications
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
