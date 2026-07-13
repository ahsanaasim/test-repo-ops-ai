import { AppShell } from "@/components/app-shell";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RecentBriefs } from "@/components/recent-briefs";

const METRICS = [
  { label: "Active briefs", value: "12" },
  { label: "Open tasks", value: "7" },
  { label: "Candidates sourced", value: "148" },
  { label: "Candidates verified", value: "93" },
];

export default function DashboardPage() {
  return (
    <AppShell breadcrumb="Workspace" title="Recruiter Dashboard">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Welcome back, Riley
          </h2>
          <p className="text-sm text-muted-foreground">
            Here is what is happening across your assigned briefs today.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m) => (
            <Card key={m.label}>
              <CardHeader className="pb-2">
                <CardDescription className="text-xs uppercase tracking-wide">
                  {m.label}
                </CardDescription>
                <CardTitle className="text-3xl text-primary">
                  {m.value}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground">
                Updated just now
              </CardContent>
            </Card>
          ))}
        </div>

        <RecentBriefs />
      </div>
    </AppShell>
  );
}
