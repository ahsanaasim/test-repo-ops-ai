"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
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
import { parsePageState } from "@/lib/page-state";

function AddBriefContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));

  return (
    <Dialog open onOpenChange={() => {}}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader><DialogTitle>Add New Brief</DialogTitle></DialogHeader>
        {state === "plan_limit" && <PlanLimitBanner />}
        {state === "error" && <Alert variant="destructive"><AlertDescription>Failed to create brief.</AlertDescription></Alert>}
        <div className="grid gap-4 py-4">
          <div className="space-y-2"><Label>Client Name *</Label><Input placeholder="Hospital or clinic name" /></div>
          <div className="space-y-2"><Label>Brief Title *</Label><Input placeholder="Role title" /></div>
          <div className="space-y-2"><Label>Role Type *</Label><Input placeholder="e.g. Registrar" /></div>
          <div className="space-y-2"><Label>Specialty *</Label><Input placeholder="e.g. Emergency Medicine" /></div>
          <div className="space-y-2"><Label>Location *</Label><Input placeholder="City, State" /></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2"><Label>Start Date *</Label><Input type="date" /></div>
            <div className="space-y-2"><Label>End Date</Label><Input type="date" /></div>
          </div>
          <div className="space-y-2">
            <Label>Employment Type *</Label>
            <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="permanent">Permanent</SelectItem>
                <SelectItem value="locum">Locum</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2"><Label>Number of Positions *</Label><Input type="number" defaultValue={1} /></div>
          <div className="space-y-2"><Label>Description</Label><Textarea /></div>
          <div className="space-y-2"><Label>Requirements</Label><Textarea /></div>
          <div className="space-y-2"><Label>Notes</Label><Textarea /></div>
          <div className="space-y-2"><Label>Assigned Recruiter</Label><Input placeholder="Recruiter name" /></div>
        </div>
        <DialogFooter>
          <LinkButton variant="outline" href="/briefs">Cancel</LinkButton>
          {state === "loading" ? (
            <Button disabled><span className="flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" /> Saving...</span></Button>
          ) : (
            <LinkButton href="/briefs">Save Brief</LinkButton>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function AddBriefPage() {
  return <Suspense><AddBriefContent /></Suspense>;
}
