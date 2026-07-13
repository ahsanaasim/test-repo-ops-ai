"use client";

import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { messageTemplates } from "@/lib/sample-data";

function TemplatesContent() {
  return (
    <Dialog open onOpenChange={() => {}}>
      <DialogContent className="max-w-lg">
        <DialogHeader><DialogTitle>Message Templates</DialogTitle></DialogHeader>
        <Input placeholder="Search templates..." className="mb-4" />
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {messageTemplates.map((t) => (
            <div key={t.id} className="border rounded-lg p-3 hover:bg-muted/50 cursor-pointer">
              <p className="font-medium text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{t.preview}</p>
            </div>
          ))}
        </div>
        <DialogFooter>
          <LinkButton variant="outline" href="/outreach">Close</LinkButton>
          <LinkButton href="/outreach">Select Template</LinkButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function TemplatesPage() {
  return <Suspense><TemplatesContent /></Suspense>;
}
