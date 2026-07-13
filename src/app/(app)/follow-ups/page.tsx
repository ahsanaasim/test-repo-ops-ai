"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { PageStates } from "@/components/shared/page-states";
import { FilterBar, SearchFilter, SelectFilter, DateRangeFilter } from "@/components/shared/filters";
import { StatusBadge } from "@/components/shared/status-badge";
import { followUps } from "@/lib/sample-data";
import { parsePageState } from "@/lib/page-state";

function FollowUpsContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Follow-Up Tasks</h1>
        <div className="flex gap-2">
          <LinkButton variant="outline" href="/follow-ups/overdue">Overdue</LinkButton>
          <LinkButton href="/follow-ups/add"><Plus className="h-4 w-4 mr-2" /> Add Follow-Up</LinkButton>
        </div>
      </div>

      <FilterBar>
        <SearchFilter label="Search" />
        <SelectFilter label="Status" options={[{ value: "pending", label: "Pending" }, { value: "overdue", label: "Overdue" }]} />
        <SelectFilter label="Assignee" options={[{ value: "sarah", label: "Sarah Chen" }]} />
        <SelectFilter label="Priority" options={[{ value: "high", label: "High" }]} />
        <DateRangeFilter label="Due Date" />
      </FilterBar>

      <PageStates state={state} emptyTitle="No follow-up tasks" emptyAction={{ label: "Add Follow-Up", href: "/follow-ups/add" }}
        skeleton={<Skeleton className="h-48" />}>
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
                  <TableCell>{f.dueDate}</TableCell>
                  <TableCell><StatusBadge status={f.priority} /></TableCell>
                  <TableCell><StatusBadge status={f.status} /></TableCell>
                  <TableCell className="max-w-xs truncate">{f.notes}</TableCell>
                  <TableCell>{f.assignee}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{f.relatedCandidate || f.relatedBrief}</TableCell>
                  <TableCell>
                    <LinkButton variant="ghost" size="sm" href={`/follow-ups/${f.id}/edit`}>Edit</LinkButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </PageStates>
    </div>
  );
}

export default function FollowUpsPage() {
  return <Suspense><FollowUpsContent /></Suspense>;
}
