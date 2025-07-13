import { type EmailTemplateProps } from "@/features/types";
import {
  Html,
  Text,
  Heading,
  Section,
  Container,
  Hr,
} from "@react-email/components";

export default function OrderPlacedEmail({
  name,
  orderId,
  items,
  previewMode = false,
}: EmailTemplateProps<{
  name: string;
  orderId: string;
  items: { title: string; quantity: number; price: number }[];
}>) {
  const content = (
    <Container style={{ padding: "20px", fontFamily: "Arial", color: "black" }}>
      <Heading>Thank you for your order, {name}!</Heading>
      <Text>
        Your order ID is <strong>{orderId}</strong>.
      </Text>
      <Hr />
      <Section>
        {items.map((item, idx) => (
          <Text key={idx}>
            {item.title} x {item.quantity} — ₹{item.price.toFixed(2)}
          </Text>
        ))}
      </Section>
      <Hr />
      <Text>You’ll receive a shipping confirmation soon.</Text>
      <Text style={{ marginTop: "12px" }}>- The NovaDesk Team</Text>
    </Container>
  );

  if (previewMode) return content;

  return <Html>{content}</Html>;
}
