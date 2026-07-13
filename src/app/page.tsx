import { Brain, ShieldCheck, Users } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { PlatformLogo } from "@/components/shared/platform-logo";

const features = [
  {
    icon: Brain,
    title: "AI-powered matching",
    description: "Surface ranked candidate recommendations for recruiter review.",
  },
  {
    icon: ShieldCheck,
    title: "AHPRA verification",
    description: "Hybrid API and manual workflows to verify clinician credentials.",
  },
  {
    icon: Users,
    title: "Role-based access",
    description: "Secure workspace for recruiters, managers, and reporting users.",
  },
] as const;

export default function LandingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md rounded-lg border border-border bg-card p-8 shadow-sm">
        <div className="flex justify-center mb-6">
          <PlatformLogo />
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Healthcare recruitment platform</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Internal workspace for medical recruiting teams across Australia
          </p>
        </div>

        <ul className="mt-8 space-y-4" aria-label="Platform features">
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

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <LinkButton className="w-full sm:flex-1" href="/login">
            Login
          </LinkButton>
          <LinkButton className="w-full sm:flex-1" variant="secondary" href="/register">
            Register
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
