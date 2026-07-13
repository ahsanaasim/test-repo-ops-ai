"use client";

import { Suspense } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FilterBar, SearchFilter, SelectFilter, DateRangeFilter } from "@/components/shared/filters";
import { auditLogs } from "@/lib/sample-data";

function AuditContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold tracking-tight">Audit Log</h1>
          <Badge variant="outline">APP Compliant</Badge>
        </div>
        <Button variant="outline" size="sm"><Download className="h-4 w-4 mr-2" /> Export CSV</Button>
      </div>
      <FilterBar>
        <SelectFilter label="User" options={[{ value: "sarah", label: "Sarah Chen" }]} />
        <SelectFilter label="Action" options={[{ value: "export", label: "Export" }, { value: "update", label: "Update" }]} />
        <DateRangeFilter label="Date Range" />
        <SelectFilter label="Object" options={[{ value: "brief", label: "Brief" }, { value: "doctor", label: "Doctor" }]} />
        <SearchFilter label="Search" />
      </FilterBar>
      <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="sticky top-0 bg-card">
            <TableRow>
              <TableHead>Timestamp</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Object Type</TableHead>
              <TableHead>Object</TableHead>
              <TableHead>Details</TableHead>
              <TableHead>IP</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {auditLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell className="text-xs">{new Date(log.timestamp).toLocaleString()}</TableCell>
                <TableCell>{log.user}</TableCell>
                <TableCell>{log.action}</TableCell>
                <TableCell>{log.objectType}</TableCell>
                <TableCell>{log.objectName}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{log.details}</TableCell>
                <TableCell className="text-xs font-mono">{log.ipAddress}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default function AuditPage() {
  return <Suspense><AuditContent /></Suspense>;
}
