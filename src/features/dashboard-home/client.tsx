import { lazy, Suspense } from "react";
import { SectionCards } from "./components/section-cards";
import { ChartAreaInteractiveSkeleton } from "./components/chart-area-interactive-skeleton";

const ChartAreaInteractive = lazy(() =>
  import("./components/chart-area-interactive").then((m) => m)
);

export async function DashboardHomeClient() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
        <div className="px-4 lg:px-6">
          <Suspense fallback={<ChartAreaInteractiveSkeleton />}>
            <ChartAreaInteractive />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
