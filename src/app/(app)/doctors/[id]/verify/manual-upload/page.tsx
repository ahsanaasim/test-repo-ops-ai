"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Upload } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { doctors } from "@/lib/sample-data";

function ManualUploadContent() {
  const params = useParams();
  const doctor = doctors.find((d) => d.id === params.id) || doctors[0];

  return (
    <div className="space-y-6 max-w-xl mx-auto">
      <Badge>Step 1 of 3</Badge>
      <h1 className="text-2xl font-semibold tracking-tight">Upload Supporting Documents</h1>
      <p className="text-sm text-muted-foreground">Dr. {doctor.firstName} {doctor.lastName} · {doctor.ahpraNumber}</p>
      <div className="border-2 border-dashed rounded-lg p-8 text-center">
        <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
        <p className="text-sm mt-2">Upload verification documents</p>
        <div className="mt-4 space-y-2 text-left max-w-xs mx-auto">
          <Label>Document Type</Label>
          <Select><SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="registration">Registration Certificate</SelectItem>
              <SelectItem value="id">Photo ID</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-2 justify-end">
        <LinkButton variant="outline" href={`/doctors/${doctor.id}/verify`}>Cancel</LinkButton>
        <LinkButton href={`/doctors/${doctor.id}/verify/manual-notes`}>Next</LinkButton>
      </div>
    </div>
  );
}

export default function ManualUploadPage() {
  return <Suspense><ManualUploadContent /></Suspense>;
}
