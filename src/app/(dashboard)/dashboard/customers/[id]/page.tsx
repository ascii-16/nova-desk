import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchCustomerById } from "@/features/customers/service";

interface CustomerViewPageProps {
  params: Promise<{ id: string }>;
}

export default async function CustomerViewPage({ params }: CustomerViewPageProps) {
  const p = await params;
  const customer = await fetchCustomerById(p.id);

  if (!customer) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">{customer.name}</h1>
        <p className="text-muted-foreground text-sm">Customer profile overview</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer Details</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <div className="text-muted-foreground text-sm">Email</div>
            <div className="font-medium">{customer.email}</div>
          </div>

          <div>
            <div className="text-muted-foreground text-sm">Location</div>
            <div className="font-medium">{customer.location}</div>
          </div>

          <div>
            <div className="text-muted-foreground text-sm">Orders</div>
            <div className="font-medium">{customer.orders}</div>
          </div>

          <div>
            <div className="text-muted-foreground text-sm">Status</div>
            <Badge
              variant={
                customer.status === "Active"
                  ? "default"
                  : customer.status === "Inactive"
                    ? "outline"
                    : "secondary"
              }
            >
              {customer.status}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
