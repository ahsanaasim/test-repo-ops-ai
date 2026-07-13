"use client";

import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { FilterBar, SearchFilter, SelectFilter } from "@/components/shared/filters";

const permissions = [
  { category: "Briefs", name: "View Briefs", roles: { recruiter: true, manager: true, admin: true, reporting: true } },
  { category: "Briefs", name: "Edit Briefs", roles: { recruiter: true, manager: true, admin: true, reporting: false } },
  { category: "Doctors", name: "View Doctors", roles: { recruiter: true, manager: true, admin: true, reporting: true } },
  { category: "Doctors", name: "Edit Doctors", roles: { recruiter: true, manager: true, admin: true, reporting: false } },
  { category: "Admin", name: "Manage Users", roles: { recruiter: false, manager: false, admin: true, reporting: false } },
  { category: "Reporting", name: "Export Reports", roles: { recruiter: true, manager: true, admin: true, reporting: true } },
];

function RolesContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Role-Permission Matrix</h1>
        <div className="flex gap-2">
          <Button variant="outline">Reset to Default</Button>
          <Button>Save Changes</Button>
        </div>
      </div>
      <FilterBar>
        <SelectFilter label="Role" options={[{ value: "recruiter", label: "Recruiter" }, { value: "admin", label: "Admin" }]} />
        <SelectFilter label="Category" options={[{ value: "briefs", label: "Briefs" }, { value: "admin", label: "Admin" }]} />
        <SearchFilter label="Search Permission" />
      </FilterBar>
      <div className="rounded-lg border bg-card shadow-sm overflow-x-auto">
        <Table>
          <TableHeader className="sticky top-0 bg-card">
            <TableRow>
              <TableHead>Permission</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Recruiter</TableHead>
              <TableHead>Manager</TableHead>
              <TableHead>Admin</TableHead>
              <TableHead>Reporting</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {permissions.map((p) => (
              <TableRow key={p.name}>
                <TableCell>{p.name}</TableCell>
                <TableCell className="text-muted-foreground">{p.category}</TableCell>
                {(["recruiter", "manager", "admin", "reporting"] as const).map((role) => (
                  <TableCell key={role}>
                    <Checkbox defaultChecked={p.roles[role]} aria-label={`${p.name} for ${role}`} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default function RolesPage() {
  return <Suspense><RolesContent /></Suspense>;
}
