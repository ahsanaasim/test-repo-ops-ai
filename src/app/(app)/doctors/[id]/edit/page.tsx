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
import { doctors } from "@/lib/sample-data";
import { parsePageState } from "@/lib/page-state";

function EditDoctorContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));
  const doctor = doctors.find((d) => d.id === params.id) || doctors[0];

  return (
    <Dialog open onOpenChange={() => {}}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader><DialogTitle>Edit Doctor Profile</DialogTitle></DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2"><Label>Name</Label><Input defaultValue={`${doctor.firstName} ${doctor.lastName}`} /></div>
          <div className="space-y-2"><Label>Specialty</Label><Input defaultValue={doctor.specialty} /></div>
          <div className="space-y-2"><Label>Email</Label><Input defaultValue={doctor.email} /></div>
          <div className="space-y-2"><Label>Phone</Label><Input defaultValue={doctor.phone} /></div>
          <div className="space-y-2"><Label>Location</Label><Input defaultValue={doctor.location} /></div>
          <div className="space-y-2"><Label>Current Role</Label><Input defaultValue={doctor.currentRole} /></div>
          <div className="space-y-2"><Label>Employer</Label><Input defaultValue={doctor.currentEmployer} /></div>
          <div className="space-y-2"><Label>Years of Experience</Label><Input type="number" defaultValue={doctor.yearsExperience} /></div>
          <div className="space-y-2">
            <Label>Status</Label>
            <Select defaultValue={doctor.status}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="shortlisted">Shortlisted</SelectItem>
                <SelectItem value="placed">Placed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2"><Label>Manual Notes</Label><Textarea /></div>
        </div>
        <DialogFooter>
          <LinkButton variant="outline" href={`/doctors/${doctor.id}`}>Cancel</LinkButton>
          <LinkButton href={`/doctors/${doctor.id}`}>Save</LinkButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function EditDoctorPage() {
  return <Suspense><EditDoctorContent /></Suspense>;
}
