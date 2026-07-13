"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Briefcase, CalendarClock, Bell, Activity, Download, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Skeleton } from "@/components/ui/skeleton";
import { PageStates, PlanLimitBanner } from "@/components/shared/page-states";
import { FilterBar, SelectFilter } from "@/components/shared/filters";
import { StatusBadge } from "@/components/shared/status-badge";
import { briefs, followUps, notifications, activities } from "@/lib/sample-data";
import { parsePageState } from "@/lib/page-state";
import { useUser } from "@/context/user-context";
import { canExport } from "@/lib/permissions";

function DashboardContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));
  const { user } = useUser();

  const skeleton = (
    <div className="space-y-6">
      <Skeleton className="h-10 w-full" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-32" />)}
      </div>
      <Skeleton className="h-64" />
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        {canExport(user.role) && (
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" /> Export CSV
          </Button>
        )}
      </div>

      {state === "plan_limit" && <PlanLimitBanner />}

      <FilterBar>
        <SelectFilter label="Specialty" options={[{ value: "em", label: "Emergency Medicine" }, { value: "gp", label: "General Practice" }]} />
        <SelectFilter label="Location" options={[{ value: "vic", label: "Victoria" }, { value: "nsw", label: "NSW" }]} />
        <SelectFilter label="Recruiter" options={[{ value: "sarah", label: "Sarah Chen" }]} />
      </FilterBar>

      <PageStates
        state={state}
        emptyTitle="Welcome to RecruitMed"
        emptyDescription="Start by creating a client brief or adding a doctor to the database."
        emptyAction={{ label: "Create Brief", href: "/briefs/add" }}
        skeleton={skeleton}
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <Card size="widget" className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-primary" /> Assigned Briefs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-primary">{briefs.length}</p>
              <div className="mt-2 space-y-1">
                {briefs.slice(0, 2).map((b) => (
                  <Link key={b.id} href={`/briefs/${b.id}`} className="block text-sm hover:underline truncate">
                    {b.title}
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card size="widget" className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <CalendarClock className="h-4 w-4" /> Open Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">{followUps.filter((f) => f.status !== "completed").length}</p>
              <div className="mt-2 space-y-1">
                {followUps.slice(0, 2).map((f) => (
                  <div key={f.id} className="flex items-center gap-2 text-sm">
                    <StatusBadge status={f.priority} />
                    <span className="truncate">{f.notes}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card size="widget" className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Bell className="h-4 w-4" /> Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">{notifications.filter((n) => !n.read).length}</p>
              <LinkButton variant="link" size="sm" className="p-0 h-auto mt-2" href="/dashboard/notifications">View all</LinkButton>
            </CardContent>
          </Card>

          <Card size="widget" className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <LinkButton variant="outline" size="sm" className="w-full justify-start" href="/briefs/add"><Plus className="h-4 w-4 mr-2" /> New Brief</LinkButton>
              <LinkButton variant="outline" size="sm" className="w-full justify-start" href="/doctors/add"><Plus className="h-4 w-4 mr-2" /> Add Doctor</LinkButton>
            </CardContent>
          </Card>
        </div>

        <Card size="widget" className="mt-6 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base font-medium flex items-center gap-2">
              <Activity className="h-4 w-4" /> Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((a) => (
                <div key={a.id} className="flex items-start gap-3 border-b pb-3 last:border-0">
                  <div className="flex-1">
                    <p className="text-sm">{a.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {a.performedBy} · {new Date(a.timestamp).toLocaleString()}
                    </p>
                  </div>
                  {a.ahpraBadge && <StatusBadge status={a.ahpraBadge} />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </PageStates>
    </div>
  );
}

export default function DashboardPage() {
  return <Suspense><DashboardContent /></Suspense>;
}
