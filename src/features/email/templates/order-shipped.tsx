import type { EmailTemplateProps } from "@/features/types";
import { Container, Heading, Hr, Html, Text } from "@react-email/components";

type OrderShippedProps = EmailTemplateProps<{
  name: string;
  orderId: string;
  trackingLink: string;
  courier: string;
  previewMode?: boolean;
}>;

export default function OrderShippedEmail({
  name,
  orderId,
  trackingLink,
  courier,
  previewMode = false,
}: OrderShippedProps) {
  const content = (
    <Container style={{ padding: "20px", fontFamily: "Arial", color: "black" }}>
      <Heading>Your order is on the way, {name}!</Heading>
      <Text>
        Your order <strong>{orderId}</strong> has been shipped via{" "}
        <strong>{courier}</strong>.
      </Text>
      <Text>
        Track your shipment:{" "}
        <a href={trackingLink} style={{ color: "#0070f3" }}>
          {trackingLink}
        </a>
      </Text>
      <Hr />
      <Text>
        Thank you for shopping with us. We hope you love your purchase!
      </Text>
      <Text style={{ marginTop: "12px" }}>- The NovaDesk Team</Text>
    </Container>
  );

  if (previewMode) return content;

  return <Html>{content}</Html>;
}
