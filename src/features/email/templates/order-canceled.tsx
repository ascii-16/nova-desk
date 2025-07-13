import type { EmailTemplateProps } from "@/features/types";
import { Container, Heading, Hr, Html, Text } from "@react-email/components";

type OrderCancelledProps = EmailTemplateProps<{
  name: string;
  orderId: string;
  refundAmount: number;
  previewMode?: boolean;
}>;

export default function OrderCanceledEmail({
  name,
  orderId,
  refundAmount,
  previewMode = false,
}: OrderCancelledProps) {
  const content = (
    <Container style={{ padding: "20px", fontFamily: "Arial", color: "black" }}>
      <Heading>We're sorry to see this, {name}</Heading>
      <Text>
        Your order <strong>{orderId}</strong> has been canceled.
      </Text>
      <Text>
        A refund of <strong>₹{refundAmount.toFixed(2)}</strong> has been
        initiated and will reflect in your account within 3–5 business days.
      </Text>
      <Hr />
      <Text>
        If you have any questions, feel free to contact our support team.
      </Text>
      <Text style={{ marginTop: "12px" }}>- The NovaDesk Team</Text>
    </Container>
  );

  if (previewMode) return content;

  return <Html>{content}</Html>;
}
