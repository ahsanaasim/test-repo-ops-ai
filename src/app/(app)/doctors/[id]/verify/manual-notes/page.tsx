"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { doctors } from "@/lib/sample-data";

function ManualNotesContent() {
  const params = useParams();
  const doctor = doctors.find((d) => d.id === params.id) || doctors[0];

  return (
    <div className="space-y-6 max-w-xl mx-auto">
      <Badge>Step 2 of 3</Badge>
      <h1 className="text-2xl font-semibold tracking-tight">Add Verification Notes</h1>
      <p className="text-sm text-muted-foreground">Dr. {doctor.firstName} {doctor.lastName} · {doctor.ahpraNumber}</p>
      <div className="space-y-2">
        <Label>Verification Notes *</Label>
        <Textarea placeholder="Document your verification findings..." rows={6} />
        <p className="text-xs text-muted-foreground">Include details about documents reviewed and verification steps taken.</p>
      </div>
      <div className="flex gap-2 justify-between">
        <LinkButton variant="outline" href={`/doctors/${doctor.id}/verify/manual-upload`}>Back</LinkButton>
        <div className="flex gap-2">
          <LinkButton variant="outline" href={`/doctors/${doctor.id}/verify`}>Cancel</LinkButton>
          <LinkButton href={`/doctors/${doctor.id}/verify/manual-submit`}>Next</LinkButton>
        </div>
      </div>
    </div>
  );
}

export default function ManualNotesPage() {
  return <Suspense><ManualNotesContent /></Suspense>;
}
