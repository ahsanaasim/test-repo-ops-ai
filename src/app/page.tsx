import {
  Brain,
  Clock,
  Lock,
  ShieldCheck,
  Users,
} from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlatformLogo } from "@/components/shared/platform-logo";

const features = [
  {
    icon: Brain,
    title: "AI-powered matching",
    description: "Ranked candidate recommendations for recruiter review.",
  },
  {
    icon: ShieldCheck,
    title: "AHPRA verification",
    description: "Hybrid API and manual credential workflows.",
  },
  {
    icon: Users,
    title: "Role-based access",
    description: "Secure workspace for recruiters, managers, and reporting.",
  },
] as const;

const relatedInfo = [
  {
    icon: Lock,
    title: "Secure access",
    description: "Email and password authentication with role-based permissions for MVP.",
  },
  {
    icon: Clock,
    title: "Recruiter workflows",
    description: "Briefs, doctors, matching, outreach, and follow-ups in one workspace.",
  },
] as const;

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-[1fr_320px] lg:items-start lg:gap-8">
        {/* main */}
        <main className="space-y-6">
          <header className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
            <PlatformLogo />
            <h1 className="mt-6 text-2xl font-semibold tracking-tight">
              Healthcare recruitment platform
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              RecruitMed helps internal recruiting teams manage briefs, verify clinicians,
              match candidates, and run outreach — without leaving the workspace.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <LinkButton className="sm:min-w-[140px]" href="/login">
                Login
              </LinkButton>
              <LinkButton className="sm:min-w-[140px]" variant="secondary" href="/register">
                Register
              </LinkButton>
            </div>
          </header>

          <section
            aria-label="Platform capabilities"
            className="rounded-lg border border-border bg-card p-6 shadow-sm"
          >
            <h2 className="text-base font-medium">What you can do</h2>
            <ul className="mt-4 space-y-4">
              {features.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex gap-3">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted"
                    aria-hidden="true"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{title}</p>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </main>

        {/* context-rail */}
        <aside className="space-y-4" aria-label="Related information">
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Related info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {relatedInfo.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium">{title}</p>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Getting started</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>1. Register with your work email</p>
              <p>2. Sign in to open the recruiter dashboard</p>
              <p>3. Create briefs and manage doctor candidates</p>
              <LinkButton variant="outline" size="sm" className="w-full" href="/login">
                Go to login
              </LinkButton>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
