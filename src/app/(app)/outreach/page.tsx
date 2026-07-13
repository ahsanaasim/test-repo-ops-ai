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
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PlanLimitBanner } from "@/components/shared/page-states";
import { parsePageState } from "@/lib/page-state";

function OutreachContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));

  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-2xl font-semibold tracking-tight">Outreach Composer</h1>
      {state === "plan_limit" && <PlanLimitBanner />}
      {state === "error" && <Alert variant="destructive"><AlertDescription>Failed to send message. Please retry.</AlertDescription></Alert>}

      <Card className="shadow-sm">
        <CardContent className="p-6 space-y-4">
          <div className="flex gap-2">
            <LinkButton variant="outline" size="sm" href="/outreach/templates">Select Template</LinkButton>
            <LinkButton variant="outline" size="sm" href="/outreach/personalize">Personalize</LinkButton>
          </div>
          <div className="space-y-2"><Label>Recipient(s) *</Label><Input placeholder="Search candidates..." defaultValue="Dr. Amelia Hartley" /></div>
          <div className="space-y-2">
            <Label>Channel *</Label>
            <Select defaultValue="email">
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="sms">SMS</SelectItem>
                <SelectItem value="both">Both</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2"><Label>Message Body *</Label><Textarea rows={8} defaultValue="Dear Dr. Hartley, we have an exciting Emergency Medicine opportunity at Royal Melbourne Hospital..." /></div>
          <div className="flex items-center gap-2">
            <Checkbox id="consent" />
            <Label htmlFor="consent" className="text-sm">Candidate has provided consent for outreach</Label>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-2 justify-end">
        <LinkButton variant="outline" href="/dashboard">Cancel</LinkButton>
        <Button variant="outline">Save as Draft</Button>
        <LinkButton href="/outreach/send-confirm">Send Now</LinkButton>
      </div>
    </div>
  );
}

export default function OutreachPage() {
  return <Suspense><OutreachContent /></Suspense>;
}
