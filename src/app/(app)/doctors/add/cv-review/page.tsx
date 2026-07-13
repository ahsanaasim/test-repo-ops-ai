"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ConfidenceBadge, AiBadge } from "@/components/shared/status-badge";
import { PlanLimitBanner } from "@/components/shared/page-states";
import { parsePageState } from "@/lib/page-state";
import { Alert, AlertDescription } from "@/components/ui/alert";

function CvReviewContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));

  if (state === "error") {
    return (
      <div className="space-y-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold tracking-tight">Parsing Error</h1>
        <Alert variant="destructive"><AlertDescription>Unable to parse CV. Please try uploading again or enter details manually.</AlertDescription></Alert>
        <p className="text-sm">File: Hartley_CV_2026.pdf</p>
        <div className="flex gap-2">
          <LinkButton href="/doctors/add/cv-upload">Retry Upload</LinkButton>
          <LinkButton variant="outline" href="/doctors/add">Manual Entry</LinkButton>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Badge>Step 2</Badge> of 4 — Review Parsed Data
      </div>
      <h1 className="text-2xl font-semibold tracking-tight">AI Parsing Review</h1>
      {state === "plan_limit" && <PlanLimitBanner />}

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">Extracted Fields</CardTitle>
            <ConfidenceBadge value={87} />
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "First Name", value: "Amelia", confidence: 95 },
              { label: "Last Name", value: "Hartley", confidence: 98 },
              { label: "Specialty", value: "Emergency Medicine", confidence: 92 },
              { label: "AHPRA Number", value: "MED1234567", confidence: 78 },
            ].map((f) => (
              <div key={f.label} className="space-y-1">
                <div className="flex items-center gap-2">
                  <Label className="text-xs uppercase tracking-wide text-muted-foreground">{f.label}</Label>
                  <AiBadge />
                  <ConfidenceBadge value={f.confidence} />
                </div>
                <div className="flex gap-2">
                  <Input defaultValue={f.value} />
                  <Button variant="ghost" size="icon"><Pencil className="h-4 w-4" /></Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader><CardTitle className="text-base">Original CV Preview</CardTitle></CardHeader>
          <CardContent>
            <div className="bg-muted rounded-lg p-8 text-center text-sm text-muted-foreground min-h-[300px] flex items-center justify-center">
              Hartley_CV_2026.pdf preview
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-2 justify-between">
        <LinkButton variant="outline" href="/doctors/add/cv-upload">Back</LinkButton>
        <div className="flex gap-2">
          <Button variant="outline">Reject All</Button>
          <Button variant="outline">Accept All</Button>
          <LinkButton href="/doctors/add/duplicates">Next</LinkButton>
        </div>
      </div>
    </div>
  );
}

export default function CvReviewPage() {
  return <Suspense><CvReviewContent /></Suspense>;
}
