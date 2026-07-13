"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { parsePageState } from "@/lib/page-state";

function OutreachErrorContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));

  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-2xl font-semibold tracking-tight">Outreach Composer</h1>
      <Alert variant="destructive">
        <AlertDescription>Message delivery failed. The email service returned an error. Please try again.</AlertDescription>
      </Alert>
      <LinkButton href="/outreach">Retry Send</LinkButton>
    </div>
  );
}

export default function OutreachErrorPage() {
  return <Suspense><OutreachErrorContent /></Suspense>;
}
