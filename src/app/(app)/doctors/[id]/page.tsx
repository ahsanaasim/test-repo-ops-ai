"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { Pencil, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { PageStates } from "@/components/shared/page-states";
import { StatusBadge, AiBadge } from "@/components/shared/status-badge";
import { doctors, followUps } from "@/lib/sample-data";
import { parsePageState } from "@/lib/page-state";
import { useUser } from "@/context/user-context";
import { maskEmail, maskPhone } from "@/lib/permissions";

function DoctorProfileContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));
  const { user } = useUser();
  const doctor = doctors.find((d) => d.id === params.id) || doctors[0];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <Avatar className="h-16 w-16">
            <AvatarFallback className="text-lg bg-primary/10 text-primary">
              {doctor.firstName[0]}{doctor.lastName[0]}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Dr. {doctor.firstName} {doctor.lastName}</h1>
            <p className="text-muted-foreground">{doctor.specialty} · {doctor.location}</p>
            <div className="flex gap-2 mt-2">
              <StatusBadge status={doctor.status} />
              <StatusBadge status={doctor.ahpraStatus} />
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <LinkButton variant="outline" size="sm" href={`/doctors/${doctor.id}/edit`}><Pencil className="h-4 w-4 mr-1" /> Edit</LinkButton>
          <LinkButton variant="outline" size="sm" href={`/doctors/${doctor.id}/verify`}><Shield className="h-4 w-4 mr-1" /> Verify</LinkButton>
          <LinkButton variant="outline" size="sm" href={`/doctors/${doctor.id}/timeline`}><Clock className="h-4 w-4 mr-1" /> Timeline</LinkButton>
        </div>
      </div>

      <PageStates state={state}>
        <Tabs defaultValue="profile">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="followups">Follow-Ups</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="mt-4">
            <Card className="shadow-sm">
              <CardHeader><CardTitle className="text-base">Candidate Information</CardTitle></CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2 text-sm">
                <div><span className="text-muted-foreground">Email:</span> {doctor.email && maskEmail(doctor.email, user.role)}</div>
                <div><span className="text-muted-foreground">Phone:</span> {doctor.phone && maskPhone(doctor.phone, user.role)}</div>
                <div><span className="text-muted-foreground">Current Role:</span> {doctor.currentRole}</div>
                <div><span className="text-muted-foreground">Employer:</span> {doctor.currentEmployer}</div>
                <div><span className="text-muted-foreground">Experience:</span> {doctor.yearsExperience} years</div>
                <div><span className="text-muted-foreground">AHPRA:</span> {doctor.ahpraNumber}</div>
                <div><span className="text-muted-foreground">Verification Source:</span> {doctor.verificationSource || "—"}</div>
                <div><span className="text-muted-foreground">Verified:</span> {doctor.verificationDate || "Pending"}</div>
              </CardContent>
            </Card>
            {doctor.aiGeneratedNotes && (
              <Card className="shadow-sm mt-4">
                <CardContent className="p-4 flex items-center gap-2">
                  <AiBadge /> <span className="text-sm">AI-generated screening notes available</span>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="documents" className="mt-4">
            <Card className="shadow-sm">
              <CardContent className="p-4">
                <p className="text-sm">CV: Hartley_CV_2026.pdf</p>
                <p className="text-xs text-muted-foreground mt-1">Parsing status: <StatusBadge status="verified" /></p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline" className="mt-4">
            <p className="text-sm text-muted-foreground">View full timeline in the timeline drawer.</p>
            <LinkButton variant="outline" size="sm" className="mt-2" href={`/doctors/${doctor.id}/timeline`}>Open Timeline</LinkButton>
          </TabsContent>

          <TabsContent value="followups" className="mt-4">
            {followUps.filter((f) => f.relatedCandidate?.includes(doctor.lastName)).map((f) => (
              <div key={f.id} className="border-b py-2 flex justify-between">
                <div><p className="text-sm">{f.notes}</p><p className="text-xs text-muted-foreground">Due: {f.dueDate}</p></div>
                <StatusBadge status={f.status} />
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </PageStates>
    </div>
  );
}

export default function DoctorProfilePage() {
  return <Suspense><DoctorProfileContent /></Suspense>;
}
