"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageStates } from "@/components/shared/page-states";
import { parsePageState } from "@/lib/page-state";
import { useUser } from "@/context/user-context";
import { canAccessAdmin } from "@/lib/permissions";

function AdminContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));
  const { user } = useUser();

  if (!canAccessAdmin(user.role) || state === "permission_denied") {
    return (
      <PageStates state="permission_denied" emptyTitle="" emptyDescription="">
        <></>
      </PageStates>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Admin Area</h1>
      <PageStates state={state}>
        <Tabs defaultValue="users">
          <TabsList>
            <Link href="/admin/users" className="inline-flex h-8 items-center justify-center rounded-md px-3 text-sm font-medium text-muted-foreground hover:text-foreground">Users</Link>
            <Link href="/admin/roles" className="inline-flex h-8 items-center justify-center rounded-md px-3 text-sm font-medium text-muted-foreground hover:text-foreground">Roles</Link>
            <Link href="/admin/audit" className="inline-flex h-8 items-center justify-center rounded-md px-3 text-sm font-medium text-muted-foreground hover:text-foreground">Audit Log</Link>
            <Link href="/admin/retention" className="inline-flex h-8 items-center justify-center rounded-md px-3 text-sm font-medium text-muted-foreground hover:text-foreground">Data Retention</Link>
          </TabsList>
          <TabsContent value="users" className="mt-4">
            <p className="text-sm text-muted-foreground">Select a tab to manage system settings.</p>
          </TabsContent>
        </Tabs>
      </PageStates>
    </div>
  );
}

export default function AdminPage() {
  return <Suspense><AdminContent /></Suspense>;
}
