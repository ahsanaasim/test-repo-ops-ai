"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { Paperclip } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Skeleton } from "@/components/ui/skeleton";
import { PageStates } from "@/components/shared/page-states";
import { FilterBar, SearchFilter, SelectFilter, DateRangeFilter } from "@/components/shared/filters";
import { StatusBadge, AiBadge } from "@/components/shared/status-badge";
import { activities } from "@/lib/sample-data";
import { parsePageState } from "@/lib/page-state";

function TimelineContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));

  return (
    <Sheet open onOpenChange={() => {}}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Activity Timeline</SheetTitle>
        </SheetHeader>
        <div className="mt-4 space-y-4">
          <FilterBar>
            <SearchFilter label="Search" placeholder="Search activity..." />
            <SelectFilter label="Type" options={[{ value: "verification", label: "Verification" }, { value: "outreach", label: "Outreach" }]} />
            <DateRangeFilter label="Date Range" />
            <SelectFilter label="User" options={[{ value: "sarah", label: "Sarah Chen" }]} />
          </FilterBar>

          <PageStates state={state} emptyTitle="No activity yet" skeleton={<Skeleton className="h-40" />}>
            <div className="space-y-4">
              {activities.map((a) => (
                <div key={a.id} className="border-b pb-4">
                  <div className="flex items-center gap-2">
                    <StatusBadge status={a.type} />
                    {a.aiGenerated && <AiBadge />}
                    {a.hasAttachment && <Paperclip className="h-3 w-3 text-muted-foreground" />}
                  </div>
                  <p className="text-sm mt-2">{a.description}</p>
                  {a.noteContent && <p className="text-sm text-muted-foreground mt-1 italic">{a.noteContent}</p>}
                  <p className="text-xs text-muted-foreground mt-2">
                    {a.performedBy} · {new Date(a.timestamp).toLocaleString()}
                  </p>
                  {a.linkedCandidate && <p className="text-xs mt-1">Candidate: {a.linkedCandidate}</p>}
                  {a.ahpraBadge && <StatusBadge status={a.ahpraBadge} className="mt-1" />}
                </div>
              ))}
            </div>
          </PageStates>

          <LinkButton variant="outline" className="w-full" href={`/briefs/${params.id}`}>Close</LinkButton>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default function BriefTimelinePage() {
  return <Suspense><TimelineContent /></Suspense>;
}
