"use client";

import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

function AddUserContent() {
  return (
    <Dialog open onOpenChange={() => {}}>
      <DialogContent>
        <DialogHeader><DialogTitle>Add User</DialogTitle></DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2"><Label>Full Name *</Label><Input /></div>
          <div className="space-y-2"><Label>Email Address *</Label><Input type="email" /></div>
          <div className="space-y-2">
            <Label>Role *</Label>
            <Select><SelectTrigger><SelectValue placeholder="Select role" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="recruiter">Recruiter</SelectItem>
                <SelectItem value="manager">Recruitment Manager</SelectItem>
                <SelectItem value="admin">Administrator</SelectItem>
                <SelectItem value="reporting">Reporting User</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2"><Checkbox id="invite" /><Label htmlFor="invite">Send invitation email</Label></div>
        </div>
        <DialogFooter>
          <LinkButton variant="outline" href="/admin/users">Cancel</LinkButton>
          <LinkButton href="/admin/users">Add User</LinkButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function AddUserPage() {
  return <Suspense><AddUserContent /></Suspense>;
}
