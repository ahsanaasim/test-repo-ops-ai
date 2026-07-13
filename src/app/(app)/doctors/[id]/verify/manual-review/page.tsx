"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { doctors } from "@/lib/sample-data";

function ManualReviewContent() {
  const params = useParams();
  const doctor = doctors.find((d) => d.id === params.id) || doctors[0];

  return (
    <Dialog open onOpenChange={() => {}}>
      <DialogContent className="max-w-lg">
        <DialogHeader><DialogTitle>Manager Review — Dr. {doctor.firstName} {doctor.lastName}</DialogTitle></DialogHeader>
        <div className="space-y-4 text-sm">
          <div><Label>AHPRA Number</Label><p>{doctor.ahpraNumber}</p></div>
          <div><Label>Submitted Documents</Label><p>registration_cert.pdf</p></div>
          <div><Label>Submitted By</Label><p>Sarah Chen · {new Date().toLocaleString()}</p></div>
          <div><Label>Submitter Notes</Label><p className="text-muted-foreground">Manual verification documents uploaded for review.</p></div>
          <div className="space-y-2"><Label>Manager Review Notes</Label><Textarea placeholder="Add review notes..." /></div>
        </div>
        <DialogFooter>
          <Button variant="destructive">Reject</Button>
          <LinkButton href={`/doctors/${doctor.id}`}>Approve</LinkButton>
          <LinkButton variant="outline" href={`/doctors/${doctor.id}`}>Close</LinkButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function ManualReviewPage() {
  return <Suspense><ManualReviewContent /></Suspense>;
}
