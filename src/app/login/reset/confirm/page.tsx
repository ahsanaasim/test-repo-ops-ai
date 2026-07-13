"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PlanLimitBanner } from "@/components/shared/page-states";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { parsePageState } from "@/lib/page-state";

function ConfirmForm() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));
  const [showNew, setShowNew] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md rounded-lg border bg-card p-6 shadow-md space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight">Set New Password</h1>

        {state === "plan_limit" && <PlanLimitBanner />}
        {state === "permission_denied" && (
          <Alert variant="destructive"><AlertDescription>Permission denied.</AlertDescription></Alert>
        )}
        {state === "error" && (
          <Alert variant="destructive"><AlertDescription>Passwords do not match or requirements not met.</AlertDescription></Alert>
        )}

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="new-password">New password</Label>
            <Tooltip>
              <TooltipTrigger>
                <span className="text-xs text-muted-foreground cursor-help">Requirements</span>
              </TooltipTrigger>
              <TooltipContent>Min 8 characters, uppercase, lowercase, number, and special character.</TooltipContent>
            </Tooltip>
          </div>
          <div className="relative">
            <Input id="new-password" type={showNew ? "text" : "password"} disabled={state === "loading"} />
            <Button type="button" variant="ghost" size="icon" className="absolute right-0 top-0 h-full" onClick={() => setShowNew(!showNew)}>
              {showNew ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm new password</Label>
          <Input id="confirm-password" type="password" disabled={state === "loading"} />
        </div>

        <div className="flex gap-2 justify-end">
          <LinkButton variant="outline" href="/login">Cancel</LinkButton>
          {state === "loading" ? (
            <Button disabled><span className="flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" /> Saving...</span></Button>
          ) : (
            <LinkButton href="/login">Submit</LinkButton>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ConfirmResetPage() {
  return <Suspense><ConfirmForm /></Suspense>;
}
