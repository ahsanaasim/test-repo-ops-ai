import { Stethoscope } from "lucide-react";

export function PlatformLogo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className ?? ""}`}>
      <div
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"
        aria-hidden="true"
      >
        <Stethoscope className="h-5 w-5 text-primary" />
      </div>
      <span className="text-xl font-semibold tracking-tight">RecruitMed</span>
    </div>
  );
}
