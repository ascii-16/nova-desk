import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 p-6">
      <h2 className="text-2xl font-bold">Customer Not Found</h2>
      <p className="text-muted-foreground">
        The customer you are looking for does not exist or has been removed.
      </p>
      <Link
        href="/dashboard/customers"
        className="text-primary hover:text-primary/80 underline underline-offset-2"
      >
        Back to Customer Listing
      </Link>
    </div>
  );
}
