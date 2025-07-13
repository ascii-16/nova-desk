"use client";

import type { JSX } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

import OrderCancelledEmail from "../templates/order-canceled";
import OrderPlacedEmail from "../templates/order-placed";
import OrderShippedEmail from "../templates/order-shipped";
import ResetPasswordEmail from "../templates/password-reset";
import SignupEmail from "../templates/user-signup";
import { TemplateCard } from "./template-card";

const orderItems = [
  { title: "Wireless Mouse", quantity: 2, price: 499 },
  { title: "Keyboard", quantity: 1, price: 899 },
];

const emailTemplates: {
  id: string;
  title: string;
  description: string;
  content: JSX.Element;
}[] = [
  {
    id: "signup",
    title: "Welcome Email",
    description: "Sent when a user signs up.",
    content: <SignupEmail name="Jamik" previewMode />,
  },
  {
    id: "order",
    title: "Order Confirmation",
    description: "Sent after a successful order.",
    content: (
      <OrderPlacedEmail
        name="Jamik"
        orderId="#ABC123"
        items={orderItems}
        previewMode
      />
    ),
  },
  {
    id: "reset",
    title: "Reset Password",
    description: "Sent when a password reset is requested.",
    content: (
      <ResetPasswordEmail
        name="Jamik"
        resetUrl="https://example.com/reset?token=123"
        previewMode
      />
    ),
  },
  {
    id: "shipped",
    title: "Order Shipped",
    description: "Sent when an order is shipped.",
    content: (
      <OrderShippedEmail
        name="Jamik"
        orderId="#ABC123"
        trackingLink="https://track.com/ABC123"
        courier="BlueDart"
        previewMode
      />
    ),
  },
  {
    id: "cancelled",
    title: "Order Cancelled",
    description: "Sent when an order is cancelled and refund is initiated.",
    content: (
      <OrderCancelledEmail
        name="Jamik"
        orderId="#XYZ999"
        refundAmount={499}
        previewMode
      />
    ),
  },
];

export function EmailTemplatesListing() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Email Templates</h1>
        <p className="text-muted-foreground">
          Preview and test email templates used in the system.
        </p>
      </div>

      <Separator />

      <Tabs defaultValue={emailTemplates[0].id}>
        <TabsList className="overflow-x-auto whitespace-nowrap">
          {emailTemplates.map((template) => (
            <TabsTrigger key={template.id} value={template.id}>
              {template.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {emailTemplates.map((template) => (
          <TabsContent key={template.id} value={template.id}>
            <TemplateCard
              title={template.title}
              description={template.description}
            >
              {template.content}
            </TemplateCard>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
