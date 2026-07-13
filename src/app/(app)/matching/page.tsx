"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PageStates, PlanLimitBanner } from "@/components/shared/page-states";
import {
  FilterBar,
  SearchFilter,
  MultiSelectFilter,
  DateRangeFilter,
  NumericRangeFilter,
  SelectFilter,
} from "@/components/shared/filters";
import { StatusBadge, ConfidenceBadge } from "@/components/shared/status-badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { briefs, matchCandidates } from "@/lib/sample-data";
import { parsePageState } from "@/lib/page-state";

function MatchingContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">AI-Powered Candidate Matching</h1>

      {state === "plan_limit" && <PlanLimitBanner />}
      {state === "permission_denied" && (
        <Alert variant="destructive">
          <AlertDescription>You do not have permission to view matching results.</AlertDescription>
        </Alert>
      )}
      {state === "error" && (
        <Alert variant="destructive">
          <AlertDescription className="flex items-center justify-between gap-4">
            <span>Failed to load matches.</span>
            <Button variant="outline" size="sm">
              Retry
            </Button>
          </AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <FilterBar>
          <SearchFilter label="Search candidates" />
          <SelectFilter
            label="Brief"
            options={briefs.map((b) => ({ value: b.id, label: b.title }))}
          />
          <MultiSelectFilter
            label="Specialty"
            options={[{ value: "em", label: "Emergency Medicine" }, { value: "gp", label: "General Practice" }]}
            disabled={state === "loading"}
          />
          <MultiSelectFilter
            label="Location"
            options={[{ value: "vic", label: "Victoria" }, { value: "nsw", label: "NSW" }]}
            disabled={state === "loading"}
          />
          <DateRangeFilter label="Availability" />
          <MultiSelectFilter
            label="AHPRA status"
            options={[
              { value: "verified", label: "Verified" },
              { value: "manual_review", label: "Manual review" },
            ]}
            disabled={state === "loading"}
          />
          <NumericRangeFilter label="Min confidence" defaultValue={60} />
        </FilterBar>

        <PageStates
          state={state}
          emptyTitle="No matches found"
          emptyDescription="Adjust your filters or add more candidates."
          emptyAction={{ label: "Adjust filters", href: "/matching" }}
          skeleton={
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-14" />
              ))}
            </div>
          }
        >
          <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
            <Table>
              <TableHeader className="sticky top-0 bg-card">
                <TableRow>
                  <TableHead>Candidate</TableHead>
                  <TableHead>Status</TableHead>
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
                    <TableCell>
                      <StatusBadge status={c.candidateStatus || "active"} />
                    </TableCell>
                    <TableCell>{c.specialty}</TableCell>
                    <TableCell>{c.location}</TableCell>
                    <TableCell>
                      <StatusBadge status={c.ahpraStatus} />
                    </TableCell>
                    <TableCell>
                      <Tooltip>
                        <TooltipTrigger>
                          <ConfidenceBadge value={c.confidence} />
                        </TooltipTrigger>
                        <TooltipContent>{c.rationale}</TooltipContent>
                      </Tooltip>
                    </TableCell>
                    <TableCell>{c.availability}</TableCell>
                    <TableCell>{c.yearsExperience} yrs</TableCell>
                    <TableCell className="space-x-1">
                      <Button variant="outline" size="sm">
                        Shortlist
                      </Button>
                      <LinkButton variant="outline" size="sm" href={`/matching/${c.id}`}>
                        View
                      </LinkButton>
                      <LinkButton variant="outline" size="sm" href="/outreach">
                        Contact
                      </LinkButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex items-center justify-between border-t px-4 py-3">
              <span className="text-sm text-muted-foreground">
                Showing {matchCandidates.length} of {matchCandidates.length}
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

export default function MatchingPage() {
  return (
    <Suspense>
      <MatchingContent />
    </Suspense>
  );
}
