"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Download, MoreHorizontal, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { PageStates, PlanLimitBanner } from "@/components/shared/page-states";
import {
  FilterBar,
  SearchFilter,
  MultiSelectFilter,
  ToggleFilter,
  DateRangeFilter,
  SavedFiltersDropdown,
} from "@/components/shared/filters";
import { StatusBadge, AiBadge } from "@/components/shared/status-badge";
import { doctors } from "@/lib/sample-data";
import { parsePageState } from "@/lib/page-state";
import { useUser } from "@/context/user-context";
import { canExport } from "@/lib/permissions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const savedFilters = [
  { id: "sf-1", name: "Verified EM — Melbourne" },
  { id: "sf-2", name: "Rural GP — NSW" },
  { id: "sf-3", name: "Available this month" },
];

function DoctorsContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));
  const { user } = useUser();
  const filtersDisabled = state === "loading";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold tracking-tight">Doctor Database</h1>
        <div className="flex items-center gap-2">
          {canExport(user.role) && (
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" /> Export CSV
            </Button>
          )}
          <LinkButton href="/doctors/add">
            <Plus className="h-4 w-4 mr-2" /> Add Doctor
          </LinkButton>
        </div>
      </div>

      {state === "plan_limit" && <PlanLimitBanner />}

      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        <div className="space-y-6">
          <FilterBar>
            <SearchFilter label="Search Doctors" />
            <MultiSelectFilter
              label="Specialty"
              options={[
                { value: "em", label: "Emergency Medicine" },
                { value: "gp", label: "General Practice" },
                { value: "cardio", label: "Cardiology" },
              ]}
              disabled={filtersDisabled}
            />
            <MultiSelectFilter
              label="Location"
              options={[
                { value: "mel", label: "Melbourne" },
                { value: "syd", label: "Sydney" },
                { value: "dubbo", label: "Dubbo" },
              ]}
              disabled={filtersDisabled}
            />
            <ToggleFilter label="AHPRA Verified" />
            <MultiSelectFilter
              label="Employment"
              options={[
                { value: "locum", label: "Locum" },
                { value: "perm", label: "Permanent" },
              ]}
              disabled={filtersDisabled}
            />
            <DateRangeFilter label="Availability" />
            <ToggleFilter label="Duplicates" />
            <ToggleFilter label="Geospatial search" />
            <SavedFiltersDropdown filters={savedFilters} />
          </FilterBar>

          <PageStates
            state={state}
            emptyTitle="No doctors in database"
            emptyDescription="Add your first doctor candidate."
            emptyAction={{ label: "Add Doctor", href: "/doctors/add" }}
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
                    <TableHead className="w-10">
                      <Checkbox aria-label="Select all doctors" />
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Specialty</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>AHPRA Status</TableHead>
                    <TableHead>Employment</TableHead>
                    <TableHead>Availability</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>AI Notes</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {doctors.map((d) => (
                    <TableRow key={d.id}>
                      <TableCell>
                        <Checkbox aria-label={`Select Dr. ${d.firstName} ${d.lastName}`} />
                      </TableCell>
                      <TableCell>
                        <Link href={`/doctors/${d.id}`} className="font-medium hover:underline">
                          Dr. {d.firstName} {d.lastName}
                        </Link>
                        {d.duplicate && (
                          <Badge variant="outline" className="ml-2 text-xs text-[var(--status-warning)]">
                            Duplicate
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>{d.specialty}</TableCell>
                      <TableCell>{d.location}</TableCell>
                      <TableCell>
                        <StatusBadge status={d.ahpraStatus} />
                      </TableCell>
                      <TableCell>{d.employmentType}</TableCell>
                      <TableCell>{d.availability}</TableCell>
                      <TableCell>
                        <StatusBadge status={d.status} />
                      </TableCell>
                      <TableCell>
                        {(d.aiGeneratedNotes || d.aiNotesText) && <AiBadge />}
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
                              <Link href={`/doctors/${d.id}`}>View</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href={`/doctors/${d.id}/edit`}>Edit</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href={`/doctors/${d.id}/verify`}>Verify AHPRA</Link>
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
                  Showing {doctors.length} of {doctors.length}
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
          <aside className="rounded-lg border bg-card p-4 shadow-sm text-sm space-y-2">
            {state === "error" && (
              <p className="text-destructive">Failed to load doctors. Use retry on the main panel.</p>
            )}
            {state === "permission_denied" && (
              <p className="text-muted-foreground">You do not have permission to view the doctor database.</p>
            )}
          </aside>
        )}
      </div>
    </div>
  );
}

export default function DoctorsPage() {
  return (
    <Suspense>
      <DoctorsContent />
    </Suspense>
  );
}
