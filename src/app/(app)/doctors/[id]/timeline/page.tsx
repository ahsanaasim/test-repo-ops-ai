"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { PageStates } from "@/components/shared/page-states";
import { FilterBar, SearchFilter, SelectFilter, DateRangeFilter } from "@/components/shared/filters";
import { StatusBadge } from "@/components/shared/status-badge";
import { activities } from "@/lib/sample-data";
import { parsePageState } from "@/lib/page-state";

function DoctorTimelineContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));

  return (
    <Sheet open onOpenChange={() => {}}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader><SheetTitle>Candidate Activity Timeline</SheetTitle></SheetHeader>
        <div className="mt-4 space-y-4">
          <FilterBar>
            <SelectFilter label="Activity Type" options={[{ value: "verification", label: "Verification" }, { value: "outreach", label: "Outreach" }]} />
            <DateRangeFilter label="Date Range" />
            <SearchFilter label="Search" />
          </FilterBar>
          <PageStates state={state} emptyTitle="No activity recorded">
            <div className="space-y-4">
              {activities.map((a) => (
                <div key={a.id} className="border-b pb-3">
                  <StatusBadge status={a.type} />
                  <p className="text-sm mt-2">{a.description}</p>
                  <p className="text-xs text-muted-foreground">{a.performedBy} · {new Date(a.timestamp).toLocaleString()}</p>
                </div>
              ))}
            </div>
          </PageStates>
          <LinkButton variant="outline" className="w-full" href={`/doctors/${params.id}`}>Close</LinkButton>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default function DoctorTimelinePage() {
  return <Suspense><DoctorTimelineContent /></Suspense>;
}
