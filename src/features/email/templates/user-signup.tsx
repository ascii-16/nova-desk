import { type EmailTemplateProps } from "@/features/types";
import {
  Html,
  Text,
  Heading,
  Button,
  Section,
  Container,
} from "@react-email/components";

export default function SignupEmail({
  name,
  previewMode = false,
}: EmailTemplateProps<{ name: string }>) {
  const content = (
    <Container style={{ padding: "20px", fontFamily: "Arial", color: "black" }}>
      <Heading>Welcome to NovaDesk, {name}!</Heading>
      <Text>Thank you for signing up. We’re excited to have you on board.</Text>
      <Text>Start exploring your dashboard and unlock powerful features.</Text>
      <Section style={{ marginTop: "24px" }}>
        <Button
          href="/dashboard"
          style={{ backgroundColor: "#000", color: "#fff" }}
        >
          Go to Dashboard
        </Button>
      </Section>
    </Container>
  );

  if (previewMode) return content;

  return <Html>{content}</Html>;
}
