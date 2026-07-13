"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { parsePageState } from "@/lib/page-state";

function ConfirmContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));

  return (
    <div className="space-y-6 max-w-xl mx-auto">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Badge>Step 4</Badge> of 4 — Finalize & Save
      </div>
      <h1 className="text-2xl font-semibold tracking-tight">Confirm Doctor Profile</h1>
      {state === "error" && <Alert variant="destructive"><AlertDescription>Failed to save profile. Please retry.</AlertDescription></Alert>}

      <Card className="shadow-sm">
        <CardHeader><CardTitle className="text-base">Doctor Profile Summary</CardTitle></CardHeader>
        <CardContent className="space-y-2 text-sm">
          <div><span className="text-muted-foreground">Name:</span> Dr. Amelia Hartley</div>
          <div><span className="text-muted-foreground">AHPRA:</span> MED1234567</div>
          <div><span className="text-muted-foreground">Specialty:</span> Emergency Medicine</div>
          <div><span className="text-muted-foreground">Email:</span> amelia.hartley@email.com</div>
          <div><span className="text-muted-foreground">CV:</span> Hartley_CV_2026.pdf</div>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader><CardTitle className="text-base">Audit Log</CardTitle></CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          CV uploaded and parsed by Sarah Chen at {new Date().toLocaleString()}
        </CardContent>
      </Card>

      <div className="flex gap-2 justify-between">
        <LinkButton variant="outline" href="/doctors/add/cv-review">Back to Edit</LinkButton>
        {state === "loading" ? (
          <Button disabled><span className="flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" /> Saving...</span></Button>
        ) : (
          <LinkButton href="/doctors/doc-1">Save Doctor Profile</LinkButton>
        )}
      </div>
    </div>
  );
}

export default function ConfirmPage() {
  return <Suspense><ConfirmContent /></Suspense>;
}
