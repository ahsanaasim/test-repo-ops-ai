"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { PageStates } from "@/components/shared/page-states";
import { FilterBar, SelectFilter, DateRangeFilter } from "@/components/shared/filters";
import { parsePageState } from "@/lib/page-state";
import { useUser } from "@/context/user-context";
import { canExport, shouldMaskData } from "@/lib/permissions";

function ReportingContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));
  const { user } = useUser();

  const metrics = [
    { label: "Total Placements", value: 24 },
    { label: "Active Briefs", value: 8 },
    { label: "Candidates Sourced", value: 156 },
    { label: "Candidates Verified", value: 142 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold tracking-tight">Reporting Dashboard</h1>
          {shouldMaskData(user.role) && <Badge variant="outline">Data Masked</Badge>}
        </div>
        {canExport(user.role) && (
          <div className="flex gap-2">
            <Button variant="outline" size="sm"><Download className="h-4 w-4 mr-2" /> CSV</Button>
            <LinkButton variant="outline" size="sm" href="/reporting/export">PDF Export</LinkButton>
          </div>
        )}
      </div>

      <FilterBar>
        <SelectFilter label="Specialty" options={[{ value: "em", label: "Emergency Medicine" }]} />
        <SelectFilter label="Location" options={[{ value: "vic", label: "Victoria" }]} />
        <SelectFilter label="Recruiter" options={[{ value: "sarah", label: "Sarah Chen" }]} />
        <DateRangeFilter label="Date Range" />
      </FilterBar>

      <PageStates state={state} emptyTitle="No reporting data" skeleton={
        <div className="grid gap-4 md:grid-cols-4">{Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-28" />)}</div>
      }>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <Card key={m.label} className="shadow-sm">
              <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-muted-foreground">{m.label}</CardTitle></CardHeader>
              <CardContent><p className="text-3xl font-semibold" style={{ color: "hsl(243 75% 59%)" }}>{m.value}</p></CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-6">
          {["Placements by Specialty", "Placements by Location", "Monthly Placements"].map((title) => (
            <Card key={title} className="shadow-sm">
              <CardHeader><CardTitle className="text-base">{title}</CardTitle></CardHeader>
              <CardContent>
                <div className="h-40 flex items-end gap-2">
                  {[40, 65, 45, 80, 55, 70].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-indigo-100" style={{ height: `${h}%`, backgroundColor: "hsl(243 75% 59% / 0.2)" }}>
                      <div className="w-full rounded-t" style={{ height: "100%", backgroundColor: "hsl(243 75% 59% / 0.6)" }} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageStates>
    </div>
  );
}

export default function ReportingPage() {
  return <Suspense><ReportingContent /></Suspense>;
}
