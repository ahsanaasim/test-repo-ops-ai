"use client";

import { Suspense } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PageStates } from "@/components/shared/page-states";
import { FilterBar, SearchFilter, SelectFilter } from "@/components/shared/filters";
import { StatusBadge } from "@/components/shared/status-badge";
import { adminUsers } from "@/lib/sample-data";

function UsersContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">User Management</h1>
        <LinkButton href="/admin/users/add"><Plus className="h-4 w-4 mr-2" /> Invite User</LinkButton>
      </div>
      <FilterBar>
        <SearchFilter label="Search Users" />
        <SelectFilter label="Role" options={[{ value: "recruiter", label: "Recruiter" }, { value: "admin", label: "Admin" }]} />
        <SelectFilter label="Status" options={[{ value: "active", label: "Active" }]} />
      </FilterBar>
      <PageStates state="default">
        <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
          <Table>
            <TableHeader className="sticky top-0 bg-card">
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {adminUsers.map((u) => (
                <TableRow key={u.id}>
                  <TableCell className="font-medium">{u.name}</TableCell>
                  <TableCell>{u.email}</TableCell>
                  <TableCell className="capitalize">{u.role.replace("_", " ")}</TableCell>
                  <TableCell><StatusBadge status={u.status} /></TableCell>
                  <TableCell>{u.lastLogin ? new Date(u.lastLogin).toLocaleDateString() : "—"}</TableCell>
                  <TableCell>
                    <LinkButton variant="ghost" size="sm" href={`/admin/users/${u.id}/edit`}>Edit</LinkButton>
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

export default function UsersPage() {
  return <Suspense><UsersContent /></Suspense>;
}
