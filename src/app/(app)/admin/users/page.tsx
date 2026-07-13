"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Plus, Shield, Mail } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PageStates, PlanLimitBanner } from "@/components/shared/page-states";
import { FilterBar, SearchFilter, MultiSelectFilter } from "@/components/shared/filters";
import { StatusBadge } from "@/components/shared/status-badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { adminUsers } from "@/lib/sample-data";
import { parsePageState } from "@/lib/page-state";

function UsersContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">User Management</h1>
        <LinkButton href="/admin/users/add">
          <Plus className="h-4 w-4 mr-2" /> Invite User
        </LinkButton>
      </div>

      {state === "plan_limit" && <PlanLimitBanner />}
      {state === "permission_denied" && (
        <Alert variant="destructive">
          <AlertDescription>You do not have permission to manage users.</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        <div className="space-y-6">
          <FilterBar>
            <SearchFilter label="Search Users" />
            <MultiSelectFilter
              label="Role"
              options={[
                { value: "recruiter", label: "Recruiter" },
                { value: "admin", label: "Admin" },
                { value: "reporting", label: "Reporting" },
              ]}
              disabled={state === "loading"}
            />
            <MultiSelectFilter
              label="Status"
              options={[
                { value: "active", label: "Active" },
                { value: "inactive", label: "Inactive" },
              ]}
              disabled={state === "loading"}
            />
          </FilterBar>

          <PageStates
            state={state}
            emptyTitle="No users found"
            emptyDescription="Invite your first team member to get started."
            emptyAction={{ label: "Invite User", href: "/admin/users/add" }}
            skeleton={
              <div className="space-y-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-12" />
                ))}
              </div>
            }
          >
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
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2 flex-wrap">
                          {u.name}
                          {u.mfaEnabled && (
                            <Badge variant="outline" className="gap-1 text-xs">
                              <Shield className="h-3 w-3" aria-hidden="true" />
                              MFA
                            </Badge>
                          )}
                          {u.inviteSent && (
                            <Badge variant="outline" className="gap-1 text-xs">
                              <Mail className="h-3 w-3" aria-hidden="true" />
                              Invite sent
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Tooltip>
                          <TooltipTrigger className="text-left hover:underline">
                            {u.email}
                          </TooltipTrigger>
                          <TooltipContent>{u.email}</TooltipContent>
                        </Tooltip>
                      </TableCell>
                      <TableCell className="capitalize">{u.role.replace("_", " ")}</TableCell>
                      <TableCell>
                        <StatusBadge status={u.status} />
                      </TableCell>
                      <TableCell>
                        {u.lastLogin ? new Date(u.lastLogin).toLocaleDateString() : "—"}
                      </TableCell>
                      <TableCell>
                        <LinkButton variant="ghost" size="sm" href={`/admin/users/${u.id}/edit`}>
                          Edit
                        </LinkButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PageStates>
        </div>

        {(state === "error" || state === "permission_denied") && (
          <aside className="rounded-lg border bg-card p-4 shadow-sm text-sm space-y-2">
            {state === "error" && (
              <p className="text-destructive">Failed to load users. Please try again.</p>
            )}
            {state === "permission_denied" && (
              <p className="text-muted-foreground">You do not have permission to view user management.</p>
            )}
          </aside>
        )}
      </div>
    </div>
  );
}

export default function UsersPage() {
  return (
    <Suspense>
      <UsersContent />
    </Suspense>
  );
}
