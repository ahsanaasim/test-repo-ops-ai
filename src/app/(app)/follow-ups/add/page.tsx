"use client";

import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

function AddFollowUpContent() {
  return (
    <Dialog open onOpenChange={() => {}}>
      <DialogContent>
        <DialogHeader><DialogTitle>Add Follow-Up Task</DialogTitle></DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2"><Label>Due Date *</Label><Input type="date" /></div>
          <div className="space-y-2">
            <Label>Priority *</Label>
            <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Status *</Label>
            <Select defaultValue="pending"><SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2"><Label>Assignee *</Label><Input placeholder="Assign to..." /></div>
          <div className="space-y-2"><Label>Related Candidate/Brief</Label><Input placeholder="Optional" /></div>
          <div className="space-y-2"><Label>Notes</Label><Textarea /></div>
        </div>
        <DialogFooter>
          <LinkButton variant="outline" href="/follow-ups">Cancel</LinkButton>
          <LinkButton href="/follow-ups">Save</LinkButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function AddFollowUpPage() {
  return <Suspense><AddFollowUpContent /></Suspense>;
}
