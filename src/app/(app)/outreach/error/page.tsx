"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LinkButton } from "@/components/ui/link-button";
import { PlanLimitBanner } from "@/components/shared/page-states";
import { OutreachContextRail } from "@/components/shared/outreach-context-rail";
import { outreachContext } from "@/lib/sample-data";
import { parsePageState } from "@/lib/page-state";

function OutreachErrorContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Outreach Composer</h1>

      {state === "plan_limit" && <PlanLimitBanner />}

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          <Alert variant="destructive">
            <AlertDescription>
              Message delivery failed. The email service returned an error. Please try again.
            </AlertDescription>
          </Alert>
          <LinkButton href="/outreach">Retry Send</LinkButton>
        </div>

        <OutreachContextRail context={outreachContext} />
      </div>
    </div>
  );
}

export default function OutreachErrorPage() {
  return (
    <Suspense>
      <OutreachErrorContent />
    </Suspense>
  );
}
