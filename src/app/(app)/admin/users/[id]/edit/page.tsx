"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { adminUsers } from "@/lib/sample-data";

function EditUserContent() {
  const params = useParams();
  const user = adminUsers.find((u) => u.id === params.id) || adminUsers[0];

  return (
    <Dialog open onOpenChange={() => {}}>
      <DialogContent>
        <DialogHeader><DialogTitle>Edit User</DialogTitle></DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2"><Label>Full Name *</Label><Input defaultValue={user.name} /></div>
          <div className="space-y-2"><Label>Email *</Label><Input defaultValue={user.email} /></div>
          <div className="space-y-2">
            <Label>Role *</Label>
            <Select defaultValue={user.role}><SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="recruiter">Recruiter</SelectItem>
                <SelectItem value="admin">Administrator</SelectItem>
                <SelectItem value="reporting">Reporting User</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Account Status *</Label>
            <Select defaultValue={user.status}><SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button variant="outline">Reset Password</Button>
          <Button variant="destructive">Delete User</Button>
          <LinkButton variant="outline" href="/admin/users">Cancel</LinkButton>
          <LinkButton href="/admin/users">Save Changes</LinkButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function EditUserPage() {
  return <Suspense><EditUserContent /></Suspense>;
}
