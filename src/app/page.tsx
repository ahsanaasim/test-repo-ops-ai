import Link from "next/link";
import { Stethoscope, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 py-16">
      <div className="flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
        <span className="flex h-2 w-2 rounded-full bg-primary" />
        Internal MVP · Recruiter Workspace
      </div>

      <h1 className="mt-6 text-center text-4xl font-semibold tracking-tight sm:text-5xl">
        MedRecruit
      </h1>
      <p className="mt-4 max-w-2xl text-center text-base text-muted-foreground">
        A workspace-centric platform for medical recruiters to manage client
        briefs, doctor candidates, AHPRA verification, AI-powered matching, and
        outreach — end to end.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild size="lg">
          <Link href="/dashboard">Open Dashboard</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/briefs">Browse Briefs</Link>
        </Button>
      </div>

      <div className="mt-14 grid w-full gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <Stethoscope className="size-5 text-primary" />
            <CardTitle className="mt-2 text-base">Doctor database</CardTitle>
            <CardDescription>
              Search, filter, and manage candidate profiles with parsed CV data.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <ShieldCheck className="size-5 text-primary" />
            <CardTitle className="mt-2 text-base">AHPRA verification</CardTitle>
            <CardDescription>
              Hybrid API + manual verification workflow with manager review.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Sparkles className="size-5 text-primary" />
            <CardTitle className="mt-2 text-base">AI matching</CardTitle>
            <CardDescription>
              Ranked candidate recommendations with confidence indicators.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
