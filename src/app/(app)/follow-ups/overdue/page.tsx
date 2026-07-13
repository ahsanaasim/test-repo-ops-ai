"use client";

import { Suspense } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FilterBar, SelectFilter } from "@/components/shared/filters";
import { StatusBadge } from "@/components/shared/status-badge";
import { followUps } from "@/lib/sample-data";

function OverdueContent() {
  const overdue = followUps.filter((f) => f.status === "overdue");

  return (
    <Sheet open onOpenChange={() => {}}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader><SheetTitle>Overdue Follow-Ups</SheetTitle></SheetHeader>
        <div className="mt-4 space-y-4">
          <FilterBar>
            <SelectFilter label="Assignee" options={[{ value: "sarah", label: "Sarah Chen" }]} />
            <SelectFilter label="Priority" options={[{ value: "high", label: "High" }]} />
          </FilterBar>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Task</TableHead>
                <TableHead>Due</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {overdue.map((f) => (
                <TableRow key={f.id}>
                  <TableCell className="text-sm">{f.notes}</TableCell>
                  <TableCell>{f.dueDate}</TableCell>
                  <TableCell><StatusBadge status={f.priority} /></TableCell>
                  <TableCell className="space-x-1">
                    <Button variant="outline" size="sm">Complete</Button>
                    <LinkButton variant="ghost" size="sm" href={`/follow-ups/${f.id}/edit`}>Edit</LinkButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <LinkButton variant="outline" className="w-full" href="/follow-ups">Close</LinkButton>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default function OverduePage() {
  return <Suspense><OverdueContent /></Suspense>;
}
