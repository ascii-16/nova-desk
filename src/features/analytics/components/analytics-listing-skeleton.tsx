"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AnalyticsListingSkeleton() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <Skeleton className="h-8 w-48" />
      <Tabs defaultValue="users">
        <TabsList className="w-fit">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="bounce">Bounce Rate</TabsTrigger>
        </TabsList>

        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>
                <Skeleton className="h-6 w-40" />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex h-64 items-center justify-center">
              <Skeleton className="h-full w-full rounded-md" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bounce">
          <Card>
            <CardHeader>
              <CardTitle>
                <Skeleton className="h-6 w-40" />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex h-64 items-center justify-center">
              <Skeleton className="h-full w-full rounded-md" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
