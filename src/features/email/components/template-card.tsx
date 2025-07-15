"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export function TemplateCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardHeader>
      <Separator />
      <CardContent className="overflow-auto rounded-md border bg-white p-6">
        <ScrollArea className="max-h-[500px] overflow-y-auto">{children}</ScrollArea>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="outline" size="sm">
          Send Test
        </Button>
      </CardFooter>
    </Card>
  );
}
