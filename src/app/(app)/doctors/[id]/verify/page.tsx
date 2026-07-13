"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { StatusBadge } from "@/components/shared/status-badge";
import { doctors } from "@/lib/sample-data";
import { parsePageState } from "@/lib/page-state";

function VerifyContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));
  const doctor = doctors.find((d) => d.id === params.id) || doctors[0];

  if (state === "loading") {
    return (
      <Dialog open><DialogContent>
        <div className="flex items-center gap-2 py-8 justify-center">
          <Loader2 className="h-6 w-6 animate-spin" /> Verifying with AHPRA API...
        </div>
        <DialogFooter><LinkButton variant="outline" href={`/doctors/${doctor.id}`}>Close</LinkButton></DialogFooter>
      </DialogContent></Dialog>
    );
  }

  if (state === "error") {
    return (
      <Dialog open><DialogContent>
        <DialogHeader><DialogTitle>AHPRA Verification</DialogTitle></DialogHeader>
        <Alert variant="destructive"><AlertDescription>API verification failed. Try manual verification.</AlertDescription></Alert>
        <DialogFooter>
          <LinkButton href={`/doctors/${doctor.id}/verify`}>Retry API</LinkButton>
          <LinkButton variant="outline" href={`/doctors/${doctor.id}/verify/manual-upload`}>Manual Verification</LinkButton>
        </DialogFooter>
      </DialogContent></Dialog>
    );
  }

  return (
    <Dialog open onOpenChange={() => {}}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">AHPRA Verification <StatusBadge status={doctor.ahpraStatus} /></DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <div><Label>AHPRA Registration Number</Label><p className="mt-1">{doctor.ahpraNumber}</p></div>
          <div><Label>Verification Source</Label><p className="mt-1">{doctor.verificationSource || "Not verified"}</p></div>
          <div><Label>Verification Date</Label><p className="mt-1">{doctor.verificationDate || "—"}</p></div>
          <div className="space-y-2"><Label>Verification Notes</Label><Textarea defaultValue={doctor.verificationNotes} /></div>
        </div>
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <LinkButton href={`/doctors/${doctor.id}/verify`}>Start API Verification</LinkButton>
          <LinkButton variant="outline" href={`/doctors/${doctor.id}/verify/manual-upload`}>Manual Verification</LinkButton>
          <LinkButton variant="outline" href={`/doctors/${doctor.id}`}>Close</LinkButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function VerifyPage() {
  return <Suspense><VerifyContent /></Suspense>;
}
