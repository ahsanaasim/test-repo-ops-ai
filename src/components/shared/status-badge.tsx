import { cn } from "@/lib/utils";

const accentBadge =
  "bg-primary/10 text-primary border-primary/20 dark:bg-primary/15 dark:text-primary dark:border-primary/30";
const successBadge =
  "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-800";
const infoBadge =
  "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-800";
const warningBadge =
  "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-800";
const errorBadge =
  "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/30 dark:text-red-400 dark:border-red-800";
const neutralBadge =
  "bg-zinc-100 text-zinc-600 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700";

const variants: Record<string, string> = {
  open: successBadge,
  in_progress: infoBadge,
  filled: neutralBadge,
  on_hold: warningBadge,
  closed: neutralBadge,
  verified: successBadge,
  pending: warningBadge,
  failed: errorBadge,
  manual_review: warningBadge,
  unverified: neutralBadge,
  active: successBadge,
  inactive: neutralBadge,
  shortlisted: accentBadge,
  placed: accentBadge,
  low: neutralBadge,
  medium: infoBadge,
  high: accentBadge,
  urgent: errorBadge,
  completed: successBadge,
  overdue: errorBadge,
};

export function StatusBadge({ status, className }: { status: string; className?: string }) {
  const key = status.toLowerCase().replace(/\s+/g, "_");
  const style = variants[key] || neutralBadge;
  const label = status.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        style,
        className
      )}
    >
      {label}
    </span>
  );
}

export function ConfidenceBadge({ value }: { value: number }) {
  const color =
    value >= 80 ? accentBadge : value >= 60 ? warningBadge : neutralBadge;

  return (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium", color)}>
      {value}%
    </span>
  );
}

export function AiBadge() {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium uppercase tracking-wide",
        accentBadge
      )}
    >
      AI
    </span>
  );
}
