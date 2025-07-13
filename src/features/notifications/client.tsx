"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Notification } from "./types";

export function NotificationsClient({ notifications }: { notifications: Notification[] }) {
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