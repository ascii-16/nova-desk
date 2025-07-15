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
    <div className="bg-background flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h1 className="mb-4 text-4xl font-bold">Something went wrong</h1>
      <p className="text-muted-foreground mb-2">
        An unexpected error has occurred. Please try again or return home.
      </p>
      {error?.message && (
        <pre className="bg-muted mb-4 max-w-lg overflow-x-auto rounded p-4 text-left text-sm">
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
