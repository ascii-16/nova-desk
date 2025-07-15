import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { fetchProductById } from "@/features/products/service";

interface ProductViewPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductViewPage({
  params,
}: ProductViewPageProps) {
  const p = await params;
  const product = await fetchProductById(p.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-muted-foreground text-sm">
          Detailed product information
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <div className="text-muted-foreground text-sm">Category</div>
            <div className="font-medium">{product.category}</div>
          </div>

          <div>
            <div className="text-muted-foreground text-sm">Status</div>
            <Badge
              variant={
                product.status === "Active"
                  ? "default"
                  : product.status === "Low Stock"
                    ? "secondary"
                    : "outline"
              }
            >
              {product.status}
            </Badge>
          </div>

          <div>
            <div className="text-muted-foreground text-sm">Price</div>
            <div className="font-medium">${product.price.toFixed(2)}</div>
          </div>

          <div>
            <div className="text-muted-foreground text-sm">Stock</div>
            <div className="font-medium">{product.stock}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
