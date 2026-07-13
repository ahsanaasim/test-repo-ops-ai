"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Ban, Loader2 } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PlanLimitBanner } from "@/components/shared/page-states";
import { parsePageState } from "@/lib/page-state";

function ForbiddenContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md rounded-lg border bg-card shadow-md">
        <header className="p-6 pb-4 text-center">
          <Ban className="h-16 w-16 mx-auto text-muted-foreground" aria-hidden="true" />
          <h1 className="text-2xl font-semibold tracking-tight mt-4">Permission Denied</h1>
        </header>

        <div className="px-6 pb-4 space-y-4 text-center">
          {state === "plan_limit" && <PlanLimitBanner />}
          {state === "error" && (
            <Alert variant="destructive">
              <AlertDescription>An error occurred while checking permissions.</AlertDescription>
            </Alert>
          )}
          {state === "loading" && (
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Checking permissions...</span>
            </div>
          )}
          {state !== "loading" && (
            <p className="text-sm text-muted-foreground">
              You do not have permission to access this resource. Contact your administrator if you
              need access.
            </p>
          )}
        </div>

        <footer className="flex flex-col gap-2 border-t px-6 py-4">
          <LinkButton href="/dashboard">Return to Dashboard</LinkButton>
          <a
            href="mailto:support@recruitmed.com.au"
            className="text-sm text-primary hover:underline text-center"
          >
            Contact Support
          </a>
        </footer>
      </div>
    </div>
  );
}

export default function ForbiddenPage() {
  return (
    <Suspense>
      <ForbiddenContent />
    </Suspense>
  );
}
