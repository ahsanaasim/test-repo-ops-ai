"use client";

import { AlertCircle, Ban, Crown, Inbox, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Skeleton } from "@/components/ui/skeleton";
import type { PageState } from "@/lib/types";

interface PageStatesProps {
  state: PageState;
  emptyTitle?: string;
  emptyDescription?: string;
  emptyAction?: { label: string; onClick?: () => void; href?: string };
  errorMessage?: string;
  onRetry?: () => void;
  children: React.ReactNode;
  skeleton?: React.ReactNode;
}

export function PageStates({
  state,
  emptyTitle = "No data yet",
  emptyDescription = "Get started by creating your first item.",
  emptyAction,
  errorMessage = "Something went wrong. Please try again.",
  onRetry,
  children,
  skeleton,
}: PageStatesProps) {
  if (state === "loading") {
    return skeleton ?? <DefaultSkeleton />;
  }

  if (state === "error") {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="flex items-center justify-between gap-4">
          <span>{errorMessage}</span>
          {onRetry && (
            <Button variant="outline" size="sm" onClick={onRetry}>
              Retry
            </Button>
          )}
        </AlertDescription>
      </Alert>
    );
  }

  if (state === "plan_limit") {
    return (
      <>
        <PlanLimitBanner />
        {children}
      </>
    );
  }

  if (state === "permission_denied") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <Ban className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium">Permission Denied</h3>
        <p className="text-sm text-muted-foreground mt-2 max-w-md">
          You do not have permission to view this content. Contact your administrator if you believe this is an error.
        </p>
        <LinkButton className="mt-6" href="/dashboard">Return to Dashboard</LinkButton>
      </div>
    );
  }

  if (state === "empty") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <Inbox className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium">{emptyTitle}</h3>
        <p className="text-sm text-muted-foreground mt-2 max-w-md">{emptyDescription}</p>
        {emptyAction && (
          emptyAction.href ? (
            <LinkButton className="mt-6" href={emptyAction.href}>{emptyAction.label}</LinkButton>
          ) : (
            <Button className="mt-6" onClick={emptyAction.onClick}>{emptyAction.label}</Button>
          )
        )}
      </div>
    );
  }

  return <>{children}</>;
}

export function PlanLimitBanner() {
  return (
    <Alert className="mb-6 border-amber-200 bg-amber-50">
      <Crown className="h-4 w-4 text-amber-600" />
      <AlertTitle className="text-amber-800">Plan Limit Reached</AlertTitle>
      <AlertDescription className="flex items-center justify-between text-amber-700">
        <span>You have reached your plan limit. Upgrade to unlock more features.</span>
        <Button variant="outline" size="sm" className="ml-4 shrink-0">
          Upgrade Plan
        </Button>
      </AlertDescription>
    </Alert>
  );
}

export function LoadingSpinner({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Loader2 className="h-4 w-4 animate-spin" />
      {label && <span>{label}</span>}
    </div>
  );
}

function DefaultSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-48" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-32 rounded-lg" />
        ))}
      </div>
      <Skeleton className="h-64 rounded-lg" />
    </div>
  );
}
