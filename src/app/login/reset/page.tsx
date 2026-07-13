"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PlanLimitBanner } from "@/components/shared/page-states";
import { parsePageState } from "@/lib/page-state";

function ResetForm() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md rounded-lg border bg-card shadow-md">
        <div className="p-6 space-y-4">
          <h1 className="text-2xl font-semibold tracking-tight">Reset Password</h1>

          <p className="text-sm text-muted-foreground">
            Enter the email address associated with your RecruitMed account. We will send you a
            secure link to reset your password. The link expires after 24 hours for security.
          </p>

          {state === "plan_limit" && <PlanLimitBanner />}
          {state === "permission_denied" && (
            <Alert variant="destructive">
              <AlertDescription>Permission denied.</AlertDescription>
            </Alert>
          )}
          {state === "error" && (
            <Alert variant="destructive">
              <AlertDescription>Unable to send reset email. Try again.</AlertDescription>
            </Alert>
          )}
          {state === "default" && searchParams.get("sent") && (
            <Alert>
              <AlertDescription>Check your email for a reset link.</AlertDescription>
            </Alert>
          )}
          {state === "loading" && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending reset link...
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              disabled={state === "loading"}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-end border-t px-6 py-4">
          <LinkButton variant="outline" href="/login">
            Cancel
          </LinkButton>
          {state === "loading" ? (
            <Button disabled>
              <span className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" /> Sending...
              </span>
            </Button>
          ) : (
            <LinkButton href="/login/reset/confirm">Submit</LinkButton>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ResetPage() {
  return (
    <Suspense>
      <ResetForm />
    </Suspense>
  );
}
