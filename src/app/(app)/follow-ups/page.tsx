"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CalendarClock, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PageStates, PlanLimitBanner } from "@/components/shared/page-states";
import {
  FilterBar,
  SearchFilter,
  MultiSelectFilter,
  DateRangeFilter,
} from "@/components/shared/filters";
import { StatusBadge } from "@/components/shared/status-badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { followUps, recruiters } from "@/lib/sample-data";
import { parsePageState } from "@/lib/page-state";

function FollowUpsContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));
  const overdueCount = followUps.filter((f) => f.status === "overdue").length;
  const filtersDisabled = state === "loading";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold tracking-tight">Follow-Up Tasks</h1>
          {overdueCount > 0 && (
            <Badge variant="outline" className="gap-1 text-[var(--status-warning)]">
              <CalendarClock className="h-3 w-3" aria-hidden="true" />
              {overdueCount} overdue
            </Badge>
          )}
        </div>
        <div className="flex gap-2">
          <LinkButton variant="outline" href="/follow-ups/overdue">
            Overdue
          </LinkButton>
          <LinkButton href="/follow-ups/add">
            <Plus className="h-4 w-4 mr-2" /> Add Follow-Up
          </LinkButton>
        </div>
      </div>

      {state === "plan_limit" && <PlanLimitBanner />}
      {state === "permission_denied" && (
        <Alert variant="destructive">
          <AlertDescription>You do not have permission to view follow-up tasks.</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <FilterBar>
          <SearchFilter label="Search" />
          <MultiSelectFilter
            label="Status"
            options={[
              { value: "pending", label: "Pending" },
              { value: "in_progress", label: "In Progress" },
              { value: "overdue", label: "Overdue" },
              { value: "completed", label: "Completed" },
            ]}
            disabled={filtersDisabled}
          />
          <MultiSelectFilter
            label="Assignee"
            options={recruiters.map((r) => ({ value: r.toLowerCase().replace(/\s+/g, "-"), label: r }))}
            disabled={filtersDisabled}
          />
          <MultiSelectFilter
            label="Priority"
            options={[
              { value: "high", label: "High" },
              { value: "medium", label: "Medium" },
              { value: "low", label: "Low" },
            ]}
            disabled={filtersDisabled}
          />
          <DateRangeFilter label="Due Date" />
        </FilterBar>

        <PageStates
          state={state}
          emptyTitle="No follow-up tasks"
          emptyDescription="Create a follow-up task to track candidate outreach and verification."
          emptyAction={{ label: "Add Follow-Up", href: "/follow-ups/add" }}
          skeleton={
            <div className="space-y-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-12" />
              ))}
            </div>
          }
        >
          <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
            <Table>
              <TableHeader className="sticky top-0 bg-card">
                <TableRow>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Notes</TableHead>
                  <TableHead>Assignee</TableHead>
                  <TableHead>Related</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {followUps.map((f) => (
                  <TableRow key={f.id}>
                    <TableCell>
                      <Tooltip>
                        <TooltipTrigger className="flex items-center gap-2">
                          <span>{f.dueDate}</span>
                          {f.status === "overdue" && (
                            <Badge variant="outline" className="text-xs text-[var(--status-warning)]">
                              Overdue
                            </Badge>
                          )}
                        </TooltipTrigger>
                        <TooltipContent>
                          Due {f.dueDate}
                          {f.relatedBrief && ` · ${f.relatedBrief}`}
                        </TooltipContent>
                      </Tooltip>
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={f.priority} />
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={f.status} />
                    </TableCell>
                    <TableCell className="max-w-xs truncate">{f.notes}</TableCell>
                    <TableCell>{f.assignee}</TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      {f.relatedCandidate || f.relatedBrief}
                    </TableCell>
                    <TableCell>
                      <LinkButton variant="ghost" size="sm" href={`/follow-ups/${f.id}/edit`}>
                        Edit
                      </LinkButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex items-center justify-between border-t px-4 py-3">
              <span className="text-sm text-muted-foreground">
                Showing {followUps.length} of {followUps.length}
              </span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </PageStates>
      </div>
    </div>
  );
}

export default function FollowUpsPage() {
  return (
    <Suspense>
      <FollowUpsContent />
    </Suspense>
  );
}
