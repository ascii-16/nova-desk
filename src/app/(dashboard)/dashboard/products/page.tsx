import { ProductsClient } from "@/features/products/client";
import { fetchProducts } from "@/features/products/service";

export default async function ProductsPage() {
  const products = await fetchProducts();
  return <ProductsClient products={products} />;
}
