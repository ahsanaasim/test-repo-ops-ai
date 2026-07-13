"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MoreHorizontal, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { PageStates, PlanLimitBanner } from "@/components/shared/page-states";
import { FilterBar, SearchFilter, MultiSelectFilter, DateRangeFilter } from "@/components/shared/filters";
import { StatusBadge, ConfidenceBadge } from "@/components/shared/status-badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { briefs } from "@/lib/sample-data";
import { parsePageState } from "@/lib/page-state";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function BriefsContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Client Briefs</h1>
        <LinkButton href="/briefs/add">
          <Plus className="h-4 w-4 mr-2" /> Create brief
        </LinkButton>
      </div>

      {state === "plan_limit" && <PlanLimitBanner />}

      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        <div className="space-y-6">
          <FilterBar>
            <SearchFilter label="Search briefs" placeholder="Search by title or client..." />
            <MultiSelectFilter
              label="Status"
              options={[
                { value: "open", label: "Open" },
                { value: "in_progress", label: "In Progress" },
                { value: "filled", label: "Filled" },
              ]}
            />
            <MultiSelectFilter
              label="Recruiter"
              options={[
                { value: "sarah", label: "Sarah Chen" },
                { value: "james", label: "James Wilson" },
              ]}
            />
            <DateRangeFilter label="Date created" />
          </FilterBar>

          <PageStates
            state={state}
            emptyTitle="No briefs yet"
            emptyDescription="Create your first client brief to start recruiting."
            emptyAction={{ label: "Create new brief", href: "/briefs/add" }}
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
                    <TableHead>Title</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Recruiter</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Positions</TableHead>
                    <TableHead>AI match</TableHead>
                    <TableHead>AHPRA</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {briefs.map((b) => (
                    <TableRow key={b.id}>
                      <TableCell>
                        <Tooltip>
                          <TooltipTrigger>
                            <Link href={`/briefs/${b.id}`} className="font-medium hover:underline">
                              {b.title}
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            {b.specialty} · {b.location}
                            {b.description && ` — ${b.description}`}
                          </TooltipContent>
                        </Tooltip>
                      </TableCell>
                      <TableCell>{b.client}</TableCell>
                      <TableCell>
                        <StatusBadge status={b.status} />
                      </TableCell>
                      <TableCell>{b.assignedRecruiter}</TableCell>
                      <TableCell>{b.createdDate}</TableCell>
                      <TableCell>{b.openPositions}</TableCell>
                      <TableCell>
                        {b.aiMatchConfidence && <ConfidenceBadge value={b.aiMatchConfidence} />}
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={b.ahpraStatus || "pending"} />
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <Button variant="ghost" size="icon" aria-label="Actions">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Link href={`/briefs/${b.id}`}>View</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href={`/briefs/${b.id}/edit`}>Edit</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href={`/briefs/${b.id}/timeline`}>Timeline</Link>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex items-center justify-between border-t px-4 py-3">
                <span className="text-sm text-muted-foreground">
                  Showing {briefs.length} of {briefs.length}
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

        {(state === "error" || state === "permission_denied") && (
          <aside className="rounded-lg border bg-card p-4 shadow-sm text-sm">
            {state === "error" && (
              <p className="text-destructive">Failed to load briefs. Use retry on the main panel.</p>
            )}
            {state === "permission_denied" && (
              <p className="text-muted-foreground">You do not have permission to view briefs.</p>
            )}
          </aside>
        )}
      </div>
    </div>
  );
}

export default function BriefsPage() {
  return (
    <Suspense>
      <BriefsContent />
    </Suspense>
  );
}
