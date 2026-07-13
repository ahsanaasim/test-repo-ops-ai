"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { PlanLimitBanner } from "@/components/shared/page-states";
import { parsePageState } from "@/lib/page-state";

function CvUploadContent() {
  const searchParams = useSearchParams();
  const state = parsePageState(Object.fromEntries(searchParams.entries()));

  return (
    <div className="space-y-6 max-w-xl mx-auto">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Badge>Step 1</Badge> of 4 — Upload CV
      </div>
      <h1 className="text-2xl font-semibold tracking-tight">Upload CV</h1>
      {state === "plan_limit" && <PlanLimitBanner />}

      <div className="border-2 border-dashed rounded-lg p-12 text-center bg-card shadow-sm">
        <Upload className="h-10 w-10 mx-auto text-muted-foreground" />
        <p className="text-sm mt-4">Drag and drop your CV here, or click to browse</p>
        <div className="flex justify-center gap-2 mt-4">
          <Badge variant="outline">PDF</Badge>
          <Badge variant="outline">DOCX</Badge>
        </div>
        <Tooltip>
          <TooltipTrigger><p className="text-xs text-muted-foreground mt-2 cursor-help">Max file size: 10MB</p></TooltipTrigger>
          <TooltipContent>Supported formats: PDF, DOCX. Maximum file size is 10MB.</TooltipContent>
        </Tooltip>
        {state === "loading" && <Progress value={75} className="mt-6" />}
      </div>

      <div className="flex gap-2 justify-end">
        <LinkButton variant="outline" href="/doctors/add">Cancel</LinkButton>
        <LinkButton href="/doctors/add/cv-review">Upload & Parse</LinkButton>
      </div>
    </div>
  );
}

export default function CvUploadPage() {
  return <Suspense><CvUploadContent /></Suspense>;
}
