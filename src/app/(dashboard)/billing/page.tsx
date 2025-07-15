import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BillingPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Billing</h1>
        <p className="text-muted-foreground">Manage your subscription and payment info.</p>
      </div>

      <Separator />

      <div className="grid max-w-xl gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Current Plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm">
              <strong>Plan:</strong> Pro
            </div>
            <div className="text-sm">
              <strong>Next Payment:</strong> August 15, 2025 – ₹999
            </div>
            <Button variant="outline">Manage Subscription</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Billing Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm">
              <strong>Card:</strong> **** **** **** 4242
            </div>
            <div className="text-sm">
              <strong>Expires:</strong> 09/27
            </div>
            <Button variant="outline">Update Payment Method</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
