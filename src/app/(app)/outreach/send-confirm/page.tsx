"use client";

import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

function SendConfirmContent() {
  return (
    <Dialog open onOpenChange={() => {}}>
      <DialogContent>
        <DialogHeader><DialogTitle>Confirm Send</DialogTitle></DialogHeader>
        <p className="text-sm text-muted-foreground">You are about to send an outreach message to Dr. Amelia Hartley via Email.</p>
        <div className="flex items-center gap-2 py-4">
          <Checkbox id="confirm-consent" />
          <Label htmlFor="confirm-consent" className="text-sm">I confirm the candidate has consented and has not opted out</Label>
        </div>
        <DialogFooter>
          <LinkButton variant="outline" href="/outreach">Cancel</LinkButton>
          <Button variant="outline">Save as Draft</Button>
          <LinkButton href="/dashboard">Send</LinkButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function SendConfirmPage() {
  return <Suspense><SendConfirmContent /></Suspense>;
}
