"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { Pencil, Shield, Clock, Trash2, Upload, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PageStates } from "@/components/shared/page-states";
import { StatusBadge, AiBadge } from "@/components/shared/status-badge";
import { ActivityTimelineItem } from "@/components/shared/activity-timeline-item";
import { doctors, followUps, activities } from "@/lib/sample-data";
import { parsePageState } from "@/lib/page-state";
import { useUser } from "@/context/user-context";
import { maskEmail, maskPhone } from "@/lib/permissions";

function DoctorProfileContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));
  const { user } = useUser();
  const doctor = doctors.find((d) => d.id === params.id) || doctors[0];
  const doctorActivities = activities.filter((a) =>
    a.linkedCandidate?.includes(doctor.lastName)
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <Avatar className="h-16 w-16">
            <AvatarFallback className="text-lg bg-primary/10 text-primary">
              {doctor.firstName[0]}
              {doctor.lastName[0]}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Dr. {doctor.firstName} {doctor.lastName}
            </h1>
            <p className="text-muted-foreground">
              {doctor.specialty} · {doctor.location}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <StatusBadge status={doctor.status} />
              <StatusBadge status={doctor.ahpraStatus} />
              {doctor.employmentType && (
                <Badge variant="outline" className="text-xs">
                  {doctor.employmentType}
                </Badge>
              )}
              {doctor.availability && (
                <Badge variant="outline" className="text-xs">
                  {doctor.availability}
                </Badge>
              )}
              {doctor.duplicate && (
                <Badge variant="outline" className="text-xs text-[var(--status-warning)]">
                  Possible duplicate
                </Badge>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <LinkButton variant="outline" size="sm" href={`/doctors/${doctor.id}/edit`}>
            <Pencil className="h-4 w-4 mr-1" /> Edit
          </LinkButton>
          <LinkButton variant="outline" size="sm" href={`/doctors/${doctor.id}/verify`}>
            <Shield className="h-4 w-4 mr-1" /> Verify
          </LinkButton>
          <LinkButton variant="outline" size="sm" href={`/doctors/${doctor.id}/timeline`}>
            <Clock className="h-4 w-4 mr-1" /> Timeline
          </LinkButton>
          <Button variant="outline" size="sm" disabled>
            <Trash2 className="h-4 w-4 mr-1" /> Delete
          </Button>
        </div>
      </div>

      <PageStates state={state}>
        <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
          <Tabs defaultValue="profile">
            <TabsList>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="followups">Follow-Ups</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="mt-4 space-y-4">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">Candidate Information</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Email:</span>{" "}
                    {doctor.email && maskEmail(doctor.email, user.role)}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Phone:</span>{" "}
                    {doctor.phone && maskPhone(doctor.phone, user.role)}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Current role:</span> {doctor.currentRole}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Employer:</span> {doctor.currentEmployer}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Experience:</span> {doctor.yearsExperience} years
                  </div>
                  <div>
                    <span className="text-muted-foreground">AHPRA:</span> {doctor.ahpraNumber}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Verification source:</span>{" "}
                    {doctor.verificationSource || "—"}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Verified:</span> {doctor.verificationDate || "Pending"}
                  </div>
                  <div>
                    <span className="text-muted-foreground">AHPRA last checked:</span>{" "}
                    {doctor.ahpraLastChecked || "—"}
                  </div>
                </CardContent>
              </Card>

              {doctor.subspecialties && doctor.subspecialties.length > 0 && (
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-base">Subspecialties</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {doctor.subspecialties.map((s) => (
                      <Badge key={s} variant="outline">
                        {s}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              )}

              {doctor.education && doctor.education.length > 0 && (
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-base">Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      {doctor.education.map((e) => (
                        <li key={e}>{e}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {doctor.manualNotes && (
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-base">Manual Notes</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">{doctor.manualNotes}</CardContent>
                </Card>
              )}

              {doctor.aiNotesText && (
                <Card className="shadow-sm">
                  <CardContent className="p-4 flex gap-2">
                    <AiBadge />
                    <p className="text-sm">{doctor.aiNotesText}</p>
                  </CardContent>
                </Card>
              )}

              {doctor.parsedCvFields && (
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-base">Parsed CV Data</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {doctor.parsedCvFields.map((f) => (
                      <div key={f.field} className="flex items-center justify-between text-sm">
                        <span>
                          {f.field}: {f.value}
                        </span>
                        {f.aiExtracted && (
                          <Badge variant="outline" className="text-xs gap-1">
                            <Sparkles className="h-3 w-3" aria-hidden="true" />
                            {f.confidence}%
                          </Badge>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="documents" className="mt-4 space-y-4">
              <Card className="shadow-sm">
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{doctor.cvFileName || "No CV uploaded"}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Parsing status: <StatusBadge status={doctor.cvParsingStatus || "pending"} />
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-1" /> Upload CV
                    </Button>
                  </div>
                  {doctor.supportingDocuments?.map((doc) => (
                    <div key={doc.name} className="flex justify-between text-sm border-t pt-2">
                      <span>{doc.name}</span>
                      <span className="text-muted-foreground">{doc.type}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="timeline" className="mt-4">
              {doctorActivities.length > 0 ? (
                <Card className="shadow-sm">
                  <CardContent className="p-4">
                    {doctorActivities.map((a) => (
                      <ActivityTimelineItem key={a.id} activity={a} />
                    ))}
                  </CardContent>
                </Card>
              ) : (
                <p className="text-sm text-muted-foreground">No timeline events yet.</p>
              )}
              <LinkButton variant="outline" size="sm" className="mt-2" href={`/doctors/${doctor.id}/timeline`}>
                Open full timeline
              </LinkButton>
            </TabsContent>

            <TabsContent value="followups" className="mt-4 space-y-4">
              <div className="flex justify-end">
                <LinkButton variant="outline" size="sm" href="/follow-ups/add">
                  Add follow-up
                </LinkButton>
              </div>
              {followUps
                .filter((f) => f.relatedCandidate?.includes(doctor.lastName))
                .map((f) => (
                  <div key={f.id} className="border rounded-lg p-4 flex justify-between gap-4">
                    <div>
                      <p className="text-sm">{f.notes}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Due: {f.dueDate} · {f.assignee}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <StatusBadge status={f.priority} />
                      <StatusBadge status={f.status} />
                    </div>
                  </div>
                ))}
            </TabsContent>
          </Tabs>

          <aside className="space-y-4">
            <Card className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">AHPRA Verification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <StatusBadge status={doctor.ahpraStatus} />
                <p className="text-muted-foreground">Source: {doctor.verificationSource || "—"}</p>
                <p className="text-muted-foreground">Date: {doctor.verificationDate || "Pending"}</p>
                {doctor.verificationNotes && (
                  <p className="text-muted-foreground">{doctor.verificationNotes}</p>
                )}
                <LinkButton variant="outline" size="sm" className="w-full" href={`/doctors/${doctor.id}/verify`}>
                  Verify AHPRA
                </LinkButton>
              </CardContent>
            </Card>

            {doctor.communicationLog && doctor.communicationLog.length > 0 && (
              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Communication Log</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {doctor.communicationLog.map((c) => (
                    <div key={c.id} className="text-sm border-b pb-2 last:border-0">
                      <p className="font-medium">{c.subject}</p>
                      <p className="text-xs text-muted-foreground">
                        {c.channel} · {c.direction} · {new Date(c.timestamp).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {doctor.profileMeta && (
              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Profile Meta</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground space-y-1">
                  <p>Created by {doctor.profileMeta.createdBy}</p>
                  <p>Created {doctor.profileMeta.createdAt}</p>
                  <p>Updated {doctor.profileMeta.lastUpdated}</p>
                </CardContent>
              </Card>
            )}
          </aside>
        </div>
      </PageStates>
    </div>
  );
}

export default function DoctorProfilePage() {
  return (
    <Suspense>
      <DoctorProfileContent />
    </Suspense>
  );
}
