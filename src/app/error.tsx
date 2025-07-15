"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="mb-2 text-muted-foreground">
        An unexpected error has occurred. Please try again or return home.
      </p>
      {error?.message && (
        <pre className="bg-muted rounded p-4 mb-4 text-sm text-left max-w-lg overflow-x-auto">
          {error.message}
        </pre>
      )}
      <div className="flex gap-4">
        <Button onClick={() => reset()}>Retry</Button>
        <Button variant="outline" asChild>
          <a href="/dashboard">Go Home</a>
        </Button>
      </div>
    </div>
  );
}
