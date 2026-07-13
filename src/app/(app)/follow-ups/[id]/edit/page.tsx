"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { followUps } from "@/lib/sample-data";

function EditFollowUpContent() {
  const params = useParams();
  const task = followUps.find((f) => f.id === params.id) || followUps[0];

  return (
    <Dialog open onOpenChange={() => {}}>
      <DialogContent>
        <DialogHeader><DialogTitle>Edit Follow-Up Task</DialogTitle></DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2"><Label>Due Date *</Label><Input type="date" defaultValue={task.dueDate} /></div>
          <div className="space-y-2">
            <Label>Priority *</Label>
            <Select defaultValue={task.priority}><SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Status *</Label>
            <Select defaultValue={task.status}><SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2"><Label>Assignee *</Label><Input defaultValue={task.assignee} /></div>
          <div className="space-y-2"><Label>Notes</Label><Textarea defaultValue={task.notes} /></div>
        </div>
        <DialogFooter>
          <LinkButton variant="outline" href="/follow-ups">Cancel</LinkButton>
          <LinkButton href="/follow-ups">Save Changes</LinkButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function EditFollowUpPage() {
  return <Suspense><EditFollowUpContent /></Suspense>;
}
