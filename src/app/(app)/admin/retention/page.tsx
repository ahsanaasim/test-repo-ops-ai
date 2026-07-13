"use client";

import { Suspense } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FilterBar, SelectFilter } from "@/components/shared/filters";
import { retentionRules } from "@/lib/sample-data";

function RetentionContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold tracking-tight">Data Retention & Deletion</h1>
          <Badge variant="outline" className="text-amber-700 border-amber-200">Compliance Warning</Badge>
        </div>
        <div className="flex gap-2">
          <Button variant="destructive" size="sm">Bulk Delete</Button>
          <Button variant="outline" size="sm"><Download className="h-4 w-4 mr-2" /> Export Log</Button>
        </div>
      </div>
      <FilterBar>
        <SelectFilter label="Data Type" options={[{ value: "candidate", label: "Candidate" }, { value: "outreach", label: "Outreach" }]} />
        <SelectFilter label="Status" options={[{ value: "active", label: "Active" }]} />
      </FilterBar>
      <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="sticky top-0 bg-card">
            <TableRow>
              <TableHead>Rule Name</TableHead>
              <TableHead>Data Type</TableHead>
              <TableHead>Retention Period</TableHead>
              <TableHead>Auto-Delete</TableHead>
              <TableHead>Next Deletion</TableHead>
              <TableHead>Last Run</TableHead>
              <TableHead>Pending</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {retentionRules.map((r) => (
              <TableRow key={r.id}>
                <TableCell className="font-medium">{r.name}</TableCell>
                <TableCell>{r.dataType}</TableCell>
                <TableCell>{r.retentionPeriod}</TableCell>
                <TableCell>{r.autoDelete ? "Yes" : "No"}</TableCell>
                <TableCell>{r.nextDeletion}</TableCell>
                <TableCell>{r.lastRun}</TableCell>
                <TableCell>{r.pendingCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default function RetentionPage() {
  return <Suspense><RetentionContent /></Suspense>;
}
