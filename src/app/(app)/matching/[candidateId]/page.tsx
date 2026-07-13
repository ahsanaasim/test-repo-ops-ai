"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ConfidenceBadge, StatusBadge } from "@/components/shared/status-badge";
import { matchCandidates } from "@/lib/sample-data";
import { useUser } from "@/context/user-context";
import { maskEmail } from "@/lib/permissions";

function MatchDetailContent() {
  const params = useParams();
  const { user } = useUser();
  const candidate = matchCandidates.find((c) => c.id === params.candidateId) || matchCandidates[0];

  return (
    <Sheet open onOpenChange={() => {}}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <div className="flex items-center gap-3">
            <Avatar><AvatarFallback>{candidate.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback></Avatar>
            <div>
              <SheetTitle>{candidate.name}</SheetTitle>
              <p className="text-sm text-muted-foreground">{candidate.specialty}</p>
            </div>
          </div>
        </SheetHeader>
        <div className="mt-6 space-y-4 text-sm">
          <div className="flex justify-between"><span className="text-muted-foreground">Location</span><span>{candidate.location}</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">AHPRA</span><StatusBadge status={candidate.ahpraStatus} /></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Match Score</span><ConfidenceBadge value={candidate.confidence} /></div>
          <div><span className="text-muted-foreground">Rationale</span><p className="mt-1">{candidate.rationale}</p></div>
          <div><span className="text-muted-foreground">Contact</span><p className="mt-1">{maskEmail("candidate@email.com", user.role)}</p></div>
        </div>
        <div className="mt-8 space-y-2">
          <LinkButton className="w-full" href={`/doctors/${candidate.id}`}>View Full Profile</LinkButton>
          <LinkButton variant="outline" className="w-full" href="/outreach">Send Outreach</LinkButton>
          <LinkButton variant="outline" className="w-full" href="/matching">Close</LinkButton>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default function MatchDetailPage() {
  return <Suspense><MatchDetailContent /></Suspense>;
}
