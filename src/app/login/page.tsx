"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { AuthCenteredShell } from "@/components/auth/auth-centered-shell";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PlanLimitBanner } from "@/components/shared/page-states";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { parsePageState } from "@/lib/page-state";

function LoginForm() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoading = state === "loading";
  const isBlocked = state === "permission_denied" || state === "plan_limit";

  return (
    <AuthCenteredShell
      title="Sign in"
      description="Enter your work email to access RecruitMed"
      banners={
        <>
          {state === "plan_limit" && <PlanLimitBanner />}
          {state === "permission_denied" && (
            <Alert variant="destructive">
              <AlertDescription>
                Your account does not have permission to access this platform.
              </AlertDescription>
            </Alert>
          )}
          {state === "error" && (
            <Alert variant="destructive">
              <AlertDescription>
                Invalid email or password. Please try again.
              </AlertDescription>
            </Alert>
          )}
        </>
      }
      footer={
        <>
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/login/reset"
              className="text-sm text-primary transition-colors duration-150 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Forgot password?
            </Link>
            <Tooltip>
              <TooltipTrigger>
                <span className="cursor-help text-xs text-muted-foreground">
                  Session tip
                </span>
              </TooltipTrigger>
              <TooltipContent>
                Your session will automatically expire after 8 hours of inactivity
                for security.
              </TooltipContent>
            </Tooltip>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            New to RecruitMed?{" "}
            <Link
              href="/register"
              className="font-medium text-primary transition-colors duration-150 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Create an account
            </Link>
          </p>
        </>
      }
    >
      <form
        className="space-y-4"
        onSubmit={(e) => e.preventDefault()}
        aria-busy={isLoading}
      >
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading || isBlocked}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading || isBlocked}
              className="pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full transition-opacity duration-150"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              disabled={isLoading || isBlocked}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
        {isLoading ? (
          <Button className="w-full" disabled>
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Signing in...
            </span>
          </Button>
        ) : isBlocked ? (
          <Button className="w-full" disabled>
            Sign in
          </Button>
        ) : (
          <LinkButton
            className="w-full transition-colors duration-150"
            href="/dashboard"
          >
            Sign in
          </LinkButton>
        )}
      </form>
    </AuthCenteredShell>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
