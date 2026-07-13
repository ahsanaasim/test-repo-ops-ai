"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PageStates, PlanLimitBanner } from "@/components/shared/page-states";
import { OutreachContextRail } from "@/components/shared/outreach-context-rail";
import { outreachContext } from "@/lib/sample-data";
import { parsePageState } from "@/lib/page-state";

function OutreachContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Outreach Composer</h1>

      {state === "plan_limit" && <PlanLimitBanner />}
      {state === "permission_denied" && (
        <Alert variant="destructive">
          <AlertDescription>You do not have permission to send outreach.</AlertDescription>
        </Alert>
      )}
      {state === "error" && (
        <Alert variant="destructive">
          <AlertDescription className="flex items-center justify-between gap-4">
            <span>Failed to send message. Please retry.</span>
            <LinkButton variant="outline" size="sm" href="/outreach/send-confirm">
              Retry
            </LinkButton>
          </AlertDescription>
        </Alert>
      )}

      <PageStates
        state={state === "error" ? "default" : state}
        emptyTitle="No recipient selected"
        emptyDescription="Select a candidate from matching or a brief to compose outreach."
        emptyAction={{ label: "Browse matching", href: "/matching" }}
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-4">
            <Card className="shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  <LinkButton variant="outline" size="sm" href="/outreach/templates">
                    Select template
                  </LinkButton>
                  <LinkButton variant="outline" size="sm" href="/outreach/personalize">
                    Personalize
                  </LinkButton>
                </div>

                <div className="rounded-lg border border-border bg-muted/30 p-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Recipient</p>
                  <p className="mt-1 text-sm font-medium">{outreachContext.candidateName}</p>
                  <p className="text-sm text-muted-foreground">{outreachContext.candidateSpecialty}</p>
                </div>

                <div className="space-y-2">
                  <Label>Channel *</Label>
                  <Select defaultValue="email" disabled={state === "loading"}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="sms">SMS</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Subject</Label>
                  <Input
                    defaultValue="Emergency Medicine opportunity — Royal Melbourne Hospital"
                    disabled={state === "loading"}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Message body *</Label>
                  <Textarea
                    rows={8}
                    defaultValue="Dear Dr. Hartley, we have an exciting Emergency Medicine opportunity at Royal Melbourne Hospital..."
                    disabled={state === "loading"}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox id="consent" defaultChecked disabled={state === "loading"} />
                  <Label htmlFor="consent" className="text-sm">
                    Candidate has provided consent for outreach
                  </Label>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-2 justify-end">
              <LinkButton variant="outline" href="/dashboard">
                Cancel
              </LinkButton>
              <Button variant="outline" disabled={state === "loading"}>
                Save as draft
              </Button>
              {state === "loading" ? (
                <Button disabled>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Sending...
                </Button>
              ) : (
                <LinkButton href="/outreach/send-confirm">Send now</LinkButton>
              )}
            </div>
          </div>

          <OutreachContextRail context={outreachContext} />
        </div>
      </PageStates>
    </div>
  );
}

export default function OutreachPage() {
  return (
    <Suspense>
      <OutreachContent />
    </Suspense>
  );
}
