"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PlanLimitBanner } from "@/components/shared/page-states";
import { parsePageState } from "@/lib/page-state";

function AddDoctorContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-semibold tracking-tight">Add Doctor</h1>
      {state === "plan_limit" && <PlanLimitBanner />}
      {state === "duplicate_detected" && <Alert><AlertDescription>Potential duplicate detected. Review before continuing.</AlertDescription></Alert>}

      <Card className="shadow-sm">
        <CardContent className="p-6 space-y-4">
          <div className="border-2 border-dashed rounded-lg p-8 text-center">
            <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
            <p className="text-sm mt-2">Upload CV (PDF, DOCX)</p>
            <LinkButton variant="outline" size="sm" className="mt-4" href="/doctors/add/cv-upload">Upload CV</LinkButton>
          </div>
          <div className="text-center text-sm text-muted-foreground">or</div>
          <Button variant="link" className="w-full">Enter details manually</Button>
          {state === "loading" && <Progress value={60} className="mt-4" />}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2"><Label>First Name *</Label><Input /></div>
            <div className="space-y-2"><Label>Last Name *</Label><Input /></div>
            <div className="space-y-2"><Label>Email</Label><Input type="email" /></div>
            <div className="space-y-2"><Label>Phone</Label><Input /></div>
            <div className="space-y-2"><Label>Specialty *</Label><Input /></div>
            <div className="space-y-2"><Label>Location *</Label><Input /></div>
            <div className="space-y-2"><Label>AHPRA Number</Label><Input /></div>
            <div className="space-y-2"><Label>Availability</Label><Input /></div>
          </div>
        </CardContent>
      </Card>
      <div className="flex gap-2 justify-end">
        <LinkButton variant="outline" href="/doctors">Cancel</LinkButton>
        <LinkButton href="/doctors/add/cv-upload">Continue</LinkButton>
      </div>
    </div>
  );
}

export default function AddDoctorPage() {
  return <Suspense><AddDoctorContent /></Suspense>;
}
