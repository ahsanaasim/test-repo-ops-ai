"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { Pencil, Trash2, Plus, Clock } from "lucide-react";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { PageStates } from "@/components/shared/page-states";
import { StatusBadge, ConfidenceBadge, AiBadge } from "@/components/shared/status-badge";
import { briefs, doctors, followUps, activities } from "@/lib/sample-data";
import { parsePageState } from "@/lib/page-state";

function BriefDetailContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));
  const brief = briefs.find((b) => b.id === params.id) || briefs[0];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{brief.title}</h1>
          <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
            <span>{brief.client}</span>
            <span>·</span>
            <span>{brief.location}</span>
            <span>·</span>
            <span>{brief.specialty}</span>
            <StatusBadge status={brief.status} />
          </div>
          <div className="flex flex-wrap gap-4 mt-2 text-sm">
            <span>Recruiter: <strong>{brief.assignedRecruiter}</strong></span>
            <span>Positions: <strong>{brief.openPositions}</strong></span>
            <span>Created: <strong>{brief.createdDate}</strong></span>
          </div>
        </div>
        <div className="flex gap-2">
          <LinkButton variant="outline" size="sm" href={`/briefs/${brief.id}/edit`}><Pencil className="h-4 w-4 mr-1" /> Edit</LinkButton>
          <Button variant="outline" size="sm" className="text-destructive"><Trash2 className="h-4 w-4 mr-1" /> Delete</Button>
          <LinkButton variant="outline" size="sm" href={`/briefs/${brief.id}/timeline`}><Clock className="h-4 w-4 mr-1" /> Timeline</LinkButton>
        </div>
      </div>

      {brief.notes && (
        <Card className="shadow-sm"><CardContent className="p-4"><p className="text-sm">{brief.notes}</p></CardContent></Card>
      )}

      <PageStates state={state} skeleton={<Skeleton className="h-96" />}>
        <Tabs defaultValue="details">
          <TabsList>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="candidates">Candidates</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="mt-4 space-y-4">
            <Card className="shadow-sm">
              <CardHeader><CardTitle className="text-base">Brief Details</CardTitle></CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2 text-sm">
                <div><span className="text-muted-foreground">Role Type:</span> {brief.roleType}</div>
                <div><span className="text-muted-foreground">Employment:</span> {brief.employmentType}</div>
                <div><span className="text-muted-foreground">Start Date:</span> {brief.startDate}</div>
                <div><span className="text-muted-foreground">AI Match:</span> {brief.aiMatchConfidence && <ConfidenceBadge value={brief.aiMatchConfidence} />}</div>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base">Follow-Up Tasks</CardTitle>
                <LinkButton size="sm" href="/follow-ups/add"><Plus className="h-4 w-4 mr-1" /> Add</LinkButton>
              </CardHeader>
              <CardContent>
                {followUps.filter((f) => f.relatedBrief?.includes(brief.title.split(" ")[0])).map((f) => (
                  <div key={f.id} className="flex items-center justify-between border-b py-2 last:border-0">
                    <div>
                      <p className="text-sm">{f.notes}</p>
                      <p className="text-xs text-muted-foreground">Due: {f.dueDate} · {f.assignee}</p>
                    </div>
                    <StatusBadge status={f.status} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="candidates" className="mt-4">
            <div className="flex justify-between mb-4">
              <h3 className="text-base font-medium">AI-Powered Candidate Matches</h3>
              <LinkButton size="sm" href="/doctors/add">Add Candidate</LinkButton>
            </div>
            <div className="space-y-3">
              {doctors.map((d) => (
                <Card key={d.id} className="shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <Link href={`/doctors/${d.id}`} className="font-medium hover:underline">
                          Dr. {d.firstName} {d.lastName}
                        </Link>
                        <p className="text-sm text-muted-foreground">{d.specialty} · {d.location}</p>
                        <div className="flex gap-2 mt-2">
                          <StatusBadge status={d.status} />
                          <StatusBadge status={d.ahpraStatus} />
                          {d.aiGeneratedNotes && <AiBadge />}
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">AHPRA: {d.ahpraNumber} · Verified: {d.verificationDate || "Pending"}</p>
                      </div>
                      <ConfidenceBadge value={85} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="mt-4">
            <div className="space-y-3">
              {activities.map((a) => (
                <div key={a.id} className="flex gap-3 border-b pb-3">
                  <div className="flex-1">
                    <p className="text-sm">{a.description}</p>
                    <p className="text-xs text-muted-foreground">{a.performedBy} · {new Date(a.timestamp).toLocaleString()}</p>
                  </div>
                  {a.aiGenerated && <AiBadge />}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </PageStates>
    </div>
  );
}

export default function BriefDetailPage() {
  return <Suspense><BriefDetailContent /></Suspense>;
}
