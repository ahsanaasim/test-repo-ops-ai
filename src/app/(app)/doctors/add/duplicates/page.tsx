"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ConfidenceBadge } from "@/components/shared/status-badge";
import { PageStates } from "@/components/shared/page-states";
import { parsePageState } from "@/lib/page-state";

function DuplicatesContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));

  const duplicates = [
    { name: "Amelia Hartley", ahpra: "MED1234567", email: "a.hartley@email.com", phone: "+61 412 345 678", confidence: 92 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Badge>Step 3</Badge> of 4 — Duplicate Detection
      </div>
      <h1 className="text-2xl font-semibold tracking-tight">Duplicate Detection</h1>

      <PageStates state={state === "empty" ? "empty" : state} emptyTitle="No duplicates found" emptyDescription="This candidate appears to be new.">
        {state !== "empty" && (
          <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
            <Table>
              <TableHeader className="sticky top-0 bg-card">
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>AHPRA</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Match</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {duplicates.map((d, i) => (
                  <TableRow key={i}>
                    <TableCell>{d.name}</TableCell>
                    <TableCell>{d.ahpra}</TableCell>
                    <TableCell>{d.email}</TableCell>
                    <TableCell>{d.phone}</TableCell>
                    <TableCell><ConfidenceBadge value={d.confidence} /></TableCell>
                    <TableCell className="space-x-2">
                      <LinkButton variant="outline" size="sm" href="/doctors/doc-1">View</LinkButton>
                      <Button variant="outline" size="sm">Merge</Button>
                      <Button size="sm">Confirm New</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </PageStates>

      <div className="flex gap-2 justify-end">
        <LinkButton href="/doctors/add/confirm">Continue</LinkButton>
      </div>
    </div>
  );
}

export default function DuplicatesPage() {
  return <Suspense><DuplicatesContent /></Suspense>;
}
