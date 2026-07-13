"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Card, CardContent } from "@/components/ui/card";
import { doctors } from "@/lib/sample-data";

function ManualSubmitContent() {
  const params = useParams();
  const doctor = doctors.find((d) => d.id === params.id) || doctors[0];

  return (
    <div className="space-y-6 max-w-xl mx-auto">
      <Badge>Step 3 of 3</Badge>
      <h1 className="text-2xl font-semibold tracking-tight">Submit for Review</h1>
      <p className="text-sm text-muted-foreground">Dr. {doctor.firstName} {doctor.lastName} · {doctor.ahpraNumber}</p>
      <Card className="shadow-sm">
        <CardContent className="p-4 space-y-3 text-sm">
          <div><strong>Uploaded Files:</strong> registration_cert.pdf</div>
          <div><strong>Notes:</strong> Manual verification pending manager review.</div>
          <p className="text-muted-foreground">This submission will be sent to a recruitment manager for approval.</p>
        </CardContent>
      </Card>
      <div className="flex gap-2 justify-between">
        <LinkButton variant="outline" href={`/doctors/${doctor.id}/verify/manual-notes`}>Back</LinkButton>
        <LinkButton href={`/doctors/${doctor.id}/verify/manual-review`}>Submit for Review</LinkButton>
      </div>
    </div>
  );
}

export default function ManualSubmitPage() {
  return <Suspense><ManualSubmitContent /></Suspense>;
}
