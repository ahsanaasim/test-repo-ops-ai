"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Briefcase, CalendarClock, Bell, Activity, Download, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { PageStates, PlanLimitBanner } from "@/components/shared/page-states";
import { FilterBar, MultiSelectFilter } from "@/components/shared/filters";
import { StatusBadge, ConfidenceBadge } from "@/components/shared/status-badge";
import { ActivityTimelineItem } from "@/components/shared/activity-timeline-item";
import { briefs, followUps, notifications, activities } from "@/lib/sample-data";
import { parsePageState } from "@/lib/page-state";
import { useUser } from "@/context/user-context";
import { canExport } from "@/lib/permissions";

function DashboardContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));
  const { user } = useUser();
  const unreadCount = notifications.filter((n) => !n.read).length;
  const overdueCount = followUps.filter((f) => f.status === "overdue").length;
  const openTasks = followUps.filter((f) => f.status !== "completed");

  const skeleton = (
    <div className="space-y-6">
      <Skeleton className="h-10 w-full" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-32" />
        ))}
      </div>
      <Skeleton className="h-64" />
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          {unreadCount > 0 && (
            <Badge variant="outline" className="gap-1">
              <Bell className="h-3 w-3" aria-hidden="true" />
              {unreadCount} unread
            </Badge>
          )}
          {overdueCount > 0 && (
            <Badge variant="outline" className="gap-1 text-[var(--status-warning)]">
              <CalendarClock className="h-3 w-3" aria-hidden="true" />
              {overdueCount} overdue
            </Badge>
          )}
        </div>
        {canExport(user.role) && (
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" /> Export CSV
          </Button>
        )}
      </div>

      {state === "plan_limit" && <PlanLimitBanner />}

      <FilterBar>
        <MultiSelectFilter
          label="Specialty"
          options={[
            { value: "em", label: "Emergency Medicine" },
            { value: "gp", label: "General Practice" },
            { value: "cardio", label: "Cardiology" },
          ]}
        />
        <MultiSelectFilter
          label="Location"
          options={[
            { value: "vic", label: "Victoria" },
            { value: "nsw", label: "NSW" },
          ]}
        />
        <MultiSelectFilter
          label="Recruiter"
          options={[
            { value: "sarah", label: "Sarah Chen" },
            { value: "james", label: "James Wilson" },
          ]}
        />
      </FilterBar>

      <PageStates
        state={state}
        emptyTitle="Welcome to RecruitMed"
        emptyDescription="Start by creating a client brief or adding a doctor to the database."
        emptyAction={{ label: "Create brief", href: "/briefs/add" }}
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
              <div className="mt-2 space-y-2">
                {briefs.slice(0, 2).map((b) => (
                  <div key={b.id} className="space-y-1">
                    <Link href={`/briefs/${b.id}`} className="block text-sm hover:underline truncate">
                      {b.title}
                    </Link>
                    <div className="flex gap-2">
                      <StatusBadge status={b.status} />
                      {b.aiMatchConfidence && <ConfidenceBadge value={b.aiMatchConfidence} />}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card size="widget" className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center justify-between gap-2">
                <span className="flex items-center gap-2">
                  <CalendarClock className="h-4 w-4" /> Open Tasks
                </span>
                {overdueCount > 0 && (
                  <Badge variant="outline" className="text-xs text-[var(--status-warning)]">
                    {overdueCount} overdue
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">{openTasks.length}</p>
              <div className="mt-2 space-y-2">
                {openTasks.slice(0, 2).map((f) => (
                  <div key={f.id} className="text-sm space-y-1">
                    <div className="flex items-center gap-2">
                      <StatusBadge status={f.priority} />
                      <StatusBadge status={f.status} />
                    </div>
                    <p className="truncate">{f.notes}</p>
                    <p className="text-xs text-muted-foreground">
                      Due {f.dueDate} · {f.assignee}
                      {f.relatedBrief && ` · ${f.relatedBrief}`}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card size="widget" className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center justify-between gap-2">
                <span className="flex items-center gap-2">
                  <Bell className="h-4 w-4" /> Notifications
                </span>
                {unreadCount > 0 && (
                  <Badge className="text-xs">{unreadCount}</Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">{unreadCount}</p>
              <div className="mt-2 space-y-1">
                {notifications
                  .filter((n) => !n.read)
                  .slice(0, 2)
                  .map((n) => (
                    <p key={n.id} className="text-sm truncate text-muted-foreground">
                      {n.content}
                    </p>
                  ))}
              </div>
              <LinkButton variant="link" size="sm" className="p-0 h-auto mt-2" href="/dashboard/notifications">
                View all
              </LinkButton>
            </CardContent>
          </Card>

          <Card size="widget" className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <LinkButton variant="outline" size="sm" className="w-full justify-start" href="/briefs/add">
                <Plus className="h-4 w-4 mr-2" /> New brief
              </LinkButton>
              <LinkButton variant="outline" size="sm" className="w-full justify-start" href="/doctors/add">
                <Plus className="h-4 w-4 mr-2" /> Add doctor
              </LinkButton>
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
            {activities.map((a) => (
              <ActivityTimelineItem key={a.id} activity={a} />
            ))}
          </CardContent>
        </Card>
      </PageStates>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense>
      <DashboardContent />
    </Suspense>
  );
}
