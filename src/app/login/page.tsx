"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PlanLimitBanner } from "@/components/shared/page-states";
import { PlatformLogo } from "@/components/shared/platform-logo";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { parsePageState } from "@/lib/page-state";

function LoginForm() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="flex justify-center">
          <PlatformLogo />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Sign in to RecruitMed</h1>
          <p className="text-sm text-muted-foreground mt-2">Medical recruitment platform</p>
        </div>

        {state === "plan_limit" && <PlanLimitBanner />}
        {state === "permission_denied" && (
          <Alert variant="destructive">
            <AlertDescription>Your account does not have permission to access this platform.</AlertDescription>
          </Alert>
        )}
        {state === "error" && (
          <Alert variant="destructive">
            <AlertDescription>Invalid email or password. Please try again.</AlertDescription>
          </Alert>
        )}

        <form className="space-y-4 rounded-lg border bg-card p-6 shadow-sm">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={state === "loading"}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Tooltip>
                <TooltipTrigger>
                  <span className="text-xs text-muted-foreground cursor-help">Session expires after 8 hours</span>
                </TooltipTrigger>
                <TooltipContent>Your session will automatically expire after 8 hours of inactivity for security.</TooltipContent>
              </Tooltip>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={state === "loading"}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Link href="/login/reset" className="text-sm text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
          {state === "loading" ? (
            <Button className="w-full" disabled>
              <span className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" /> Signing in...
              </span>
            </Button>
          ) : (
            <LinkButton className="w-full" href="/dashboard">Sign in</LinkButton>
          )}
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
