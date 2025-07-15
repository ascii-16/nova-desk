import { type EmailTemplateProps } from "@/features/types";
import { Html, Heading, Text, Button, Container } from "@react-email/components";

export default function ResetPasswordEmail({
  name,
  resetUrl,
  previewMode = false,
}: EmailTemplateProps<{
  name: string;
  resetUrl: string;
}>) {
  const content = (
    <Container style={{ padding: "20px", fontFamily: "Arial", color: "black" }}>
      <Heading>Password Reset Request</Heading>
      <Text>Hi {name},</Text>
      <Text>
        We received a request to reset your password. Click the button below to choose a new one:
      </Text>
      <Button href={resetUrl} style={{ backgroundColor: "#000", color: "#fff", marginTop: "12px" }}>
        Reset Password
      </Button>
      <Text style={{ marginTop: "16px" }}>
        If you didn't request this, you can safely ignore this email.
      </Text>
    </Container>
  );

  if (previewMode) return content;

  return <Html>{content}</Html>;
}
