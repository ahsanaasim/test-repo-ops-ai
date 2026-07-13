"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PlanLimitBanner } from "@/components/shared/page-states";
import { briefs } from "@/lib/sample-data";
import { parsePageState } from "@/lib/page-state";

function EditBriefContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));
  const brief = briefs.find((b) => b.id === params.id) || briefs[0];

  return (
    <Dialog open onOpenChange={() => {}}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Brief</DialogTitle>
        </DialogHeader>
        {state === "plan_limit" && <PlanLimitBanner />}
        {state === "permission_denied" && <Alert variant="destructive"><AlertDescription>Permission denied.</AlertDescription></Alert>}
        {state === "error" && <Alert variant="destructive"><AlertDescription>Failed to save brief.</AlertDescription></Alert>}
        <div className="grid gap-4 py-4">
          <div className="space-y-2"><Label>Title</Label><Input defaultValue={brief.title} disabled={state === "loading"} /></div>
          <div className="space-y-2"><Label>Client</Label><Input defaultValue={brief.client} /></div>
          <div className="space-y-2"><Label>Location</Label><Input defaultValue={brief.location} /></div>
          <div className="space-y-2"><Label>Specialty</Label><Input defaultValue={brief.specialty} /></div>
          <div className="space-y-2">
            <Label>Status</Label>
            <Select defaultValue={brief.status}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="filled">Filled</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2"><Label>Assigned Recruiter</Label><Input defaultValue={brief.assignedRecruiter} /></div>
          <div className="space-y-2"><Label>Open Positions</Label><Input type="number" defaultValue={brief.openPositions} /></div>
          <div className="space-y-2"><Label>Notes</Label><Textarea defaultValue={brief.notes} /></div>
        </div>
        <DialogFooter>
          <LinkButton variant="outline" href={`/briefs/${brief.id}`}>Cancel</LinkButton>
          {state === "loading" ? (
            <Button disabled><span className="flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" /> Saving...</span></Button>
          ) : (
            <LinkButton href={`/briefs/${brief.id}`}>Save</LinkButton>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function EditBriefPage() {
  return <Suspense><EditBriefContent /></Suspense>;
}
