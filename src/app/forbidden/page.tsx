"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Ban, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PlanLimitBanner } from "@/components/shared/page-states";
import { parsePageState } from "@/lib/page-state";

function ForbiddenContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));

  if (state === "loading") {
    return (
      <div className="flex items-center justify-center gap-2">
        <Loader2 className="h-6 w-6 animate-spin" />
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md text-center space-y-6">
        {state === "plan_limit" && <PlanLimitBanner />}
        {state === "error" && (
          <Alert variant="destructive"><AlertDescription>An error occurred while checking permissions.</AlertDescription></Alert>
        )}
        <Ban className="h-16 w-16 mx-auto text-muted-foreground" />
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Permission Denied</h1>
          <p className="text-sm text-muted-foreground mt-2">
            You do not have permission to access this resource. Contact your administrator if you need access.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <LinkButton href="/dashboard">Return to Dashboard</LinkButton>
          <a href="mailto:support@recruitmed.com.au" className="text-sm text-primary hover:underline">Contact Support</a>
        </div>
      </div>
    </div>
  );
}

export default function ForbiddenPage() {
  return <Suspense><ForbiddenContent /></Suspense>;
}
