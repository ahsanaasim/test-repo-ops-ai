"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { PageStates } from "@/components/shared/page-states";
import { FilterBar, SelectFilter, ToggleFilter } from "@/components/shared/filters";
import { notifications } from "@/lib/sample-data";
import { parsePageState } from "@/lib/page-state";

function NotificationsContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Notifications</h1>

      <FilterBar>
        <SelectFilter label="Type" options={[
          { value: "task", label: "Task" },
          { value: "brief", label: "Brief" },
          { value: "verification", label: "Verification" },
        ]} />
        <ToggleFilter label="Unread only" />
      </FilterBar>

      <PageStates
        state={state}
        emptyTitle="No notifications"
        emptyDescription="You're all caught up!"
        skeleton={<div className="space-y-3">{Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} className="h-20" />)}</div>}
      >
        <div className="space-y-3">
          {notifications.map((n) => (
            <div key={n.id} className={`rounded-lg border p-4 shadow-sm ${!n.read ? "border-primary/20 bg-primary/5" : "bg-card"}`}>
              <div className="flex items-start justify-between">
                <Badge variant="outline" className="capitalize">{n.type}</Badge>
                {!n.read && <span className="h-2 w-2 rounded-full bg-primary" aria-label="Unread" />}
              </div>
              <p className="text-sm mt-2">{n.content}</p>
              <p className="text-xs text-muted-foreground mt-1">{new Date(n.timestamp).toLocaleString()}</p>
              <div className="flex gap-2 mt-3">
                {!n.read && <Button variant="outline" size="sm">Mark as read</Button>}
                {n.relatedUrl && (
                  <LinkButton size="sm" href={n.relatedUrl}>Go to item</LinkButton>
                )}
              </div>
            </div>
          ))}
        </div>
      </PageStates>
    </div>
  );
}

export default function NotificationsPage() {
  return <Suspense><NotificationsContent /></Suspense>;
}
