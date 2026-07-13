"use client";

import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

function PersonalizeContent() {
  return (
    <Dialog open onOpenChange={() => {}}>
      <DialogContent>
        <DialogHeader><DialogTitle>Personalization Fields</DialogTitle></DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2"><Label>Candidate Name</Label><Input defaultValue="Dr. Amelia Hartley" /></div>
          <div className="space-y-2"><Label>Role Title</Label><Input defaultValue="Emergency Medicine Registrar" /></div>
          <div className="space-y-2"><Label>Location</Label><Input defaultValue="Melbourne, VIC" /></div>
        </div>
        <DialogFooter>
          <LinkButton variant="outline" href="/outreach">Cancel</LinkButton>
          <LinkButton href="/outreach">Save Personalization</LinkButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function PersonalizePage() {
  return <Suspense><PersonalizeContent /></Suspense>;
}
