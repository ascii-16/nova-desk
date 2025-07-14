import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6 min-h-[60vh]">
      <h2 className="text-2xl font-bold">Customer Not Found</h2>
      <p className="text-muted-foreground">The customer you are looking for does not exist or has been removed.</p>
      <Link href="/dashboard/customers" className="text-primary underline underline-offset-2 hover:text-primary/80">
        Back to Customer Listing
      </Link>
    </div>
  );
} 