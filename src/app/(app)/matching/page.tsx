"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { PageStates } from "@/components/shared/page-states";
import { FilterBar, SearchFilter, SelectFilter, DateRangeFilter } from "@/components/shared/filters";
import { StatusBadge, ConfidenceBadge } from "@/components/shared/status-badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { matchCandidates } from "@/lib/sample-data";
import { parsePageState } from "@/lib/page-state";

function MatchingContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">AI-Powered Candidate Matching</h1>

      <FilterBar>
        <SearchFilter label="Search Candidates" />
        <SelectFilter label="Specialty" options={[{ value: "em", label: "Emergency Medicine" }]} />
        <SelectFilter label="Location" options={[{ value: "vic", label: "Victoria" }]} />
        <DateRangeFilter label="Availability" />
        <SelectFilter label="AHPRA Status" options={[{ value: "verified", label: "Verified" }]} />
        <div className="flex flex-col gap-1.5">
          <label className="text-xs uppercase tracking-wide text-muted-foreground">Min Confidence</label>
          <input type="range" min={0} max={100} defaultValue={60} className="w-32" aria-label="Confidence threshold" />
        </div>
      </FilterBar>

      <PageStates state={state} emptyTitle="No matches found" emptyDescription="Adjust your filters or add more candidates." emptyAction={{ label: "Adjust Filters", href: "/matching" }}
        skeleton={<Skeleton className="h-64" />}>
        <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
          <Table>
            <TableHeader className="sticky top-0 bg-card">
              <TableRow>
                <TableHead>Candidate</TableHead>
                <TableHead>Specialty</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>AHPRA</TableHead>
                <TableHead>Confidence</TableHead>
                <TableHead>Availability</TableHead>
                <TableHead>Experience</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {matchCandidates.map((c) => (
                <TableRow key={c.id}>
                  <TableCell className="font-medium">{c.name}</TableCell>
                  <TableCell>{c.specialty}</TableCell>
                  <TableCell>{c.location}</TableCell>
                  <TableCell><StatusBadge status={c.ahpraStatus} /></TableCell>
                  <TableCell>
                    <Tooltip>
                      <TooltipTrigger><ConfidenceBadge value={c.confidence} /></TooltipTrigger>
                      <TooltipContent>{c.rationale}</TooltipContent>
                    </Tooltip>
                  </TableCell>
                  <TableCell>{c.availability}</TableCell>
                  <TableCell>{c.yearsExperience} yrs</TableCell>
                  <TableCell className="space-x-1">
                    <Button variant="outline" size="sm">Shortlist</Button>
                    <LinkButton variant="outline" size="sm" href={`/matching/${c.id}`}>View</LinkButton>
                    <LinkButton variant="outline" size="sm" href="/outreach">Contact</LinkButton>
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

export default function MatchingPage() {
  return <Suspense><MatchingContent /></Suspense>;
}
