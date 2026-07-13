"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MoreHorizontal, Plus } from "lucide-react";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { PageStates } from "@/components/shared/page-states";
import { FilterBar, SearchFilter, SelectFilter, ToggleFilter, DateRangeFilter } from "@/components/shared/filters";
import { StatusBadge, AiBadge } from "@/components/shared/status-badge";
import { doctors } from "@/lib/sample-data";
import { parsePageState } from "@/lib/page-state";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

function DoctorsContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Doctor Database</h1>
        <LinkButton href="/doctors/add"><Plus className="h-4 w-4 mr-2" /> Add Doctor</LinkButton>
      </div>

      <FilterBar>
        <SearchFilter label="Search Doctors" />
        <SelectFilter label="Specialty" options={[{ value: "em", label: "Emergency Medicine" }, { value: "gp", label: "General Practice" }]} />
        <SelectFilter label="Location" options={[{ value: "mel", label: "Melbourne" }, { value: "syd", label: "Sydney" }]} />
        <ToggleFilter label="AHPRA Verified" />
        <SelectFilter label="Employment" options={[{ value: "locum", label: "Locum" }, { value: "perm", label: "Permanent" }]} />
        <DateRangeFilter label="Availability" />
        <ToggleFilter label="Duplicates" />
      </FilterBar>

      <PageStates state={state} emptyTitle="No doctors in database" emptyDescription="Add your first doctor candidate." emptyAction={{ label: "Add Doctor", href: "/doctors/add" }}
        skeleton={<div className="space-y-2">{Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} className="h-12" />)}</div>}>
        <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
          <Table>
            <TableHeader className="sticky top-0 bg-card">
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Specialty</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>AHPRA Status</TableHead>
                <TableHead>Employment</TableHead>
                <TableHead>Availability</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {doctors.map((d) => (
                <TableRow key={d.id}>
                  <TableCell>
                    <Link href={`/doctors/${d.id}`} className="font-medium hover:underline">
                      Dr. {d.firstName} {d.lastName}
                    </Link>
                    {d.aiGeneratedNotes && <AiBadge />}
                  </TableCell>
                  <TableCell>{d.specialty}</TableCell>
                  <TableCell>{d.location}</TableCell>
                  <TableCell><StatusBadge status={d.ahpraStatus} /></TableCell>
                  <TableCell>{d.employmentType}</TableCell>
                  <TableCell>{d.availability}</TableCell>
                  <TableCell><StatusBadge status={d.status} /></TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem><Link href={`/doctors/${d.id}`}>View</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href={`/doctors/${d.id}/edit`}>Edit</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href={`/doctors/${d.id}/verify`}>Verify AHPRA</Link></DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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

export default function DoctorsPage() {
  return <Suspense><DoctorsContent /></Suspense>;
}
