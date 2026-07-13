import { cn } from "@/lib/utils";

const variants: Record<string, string> = {
  open: "bg-emerald-50 text-emerald-700 border-emerald-200",
  in_progress: "bg-blue-50 text-blue-700 border-blue-200",
  filled: "bg-zinc-100 text-zinc-700 border-zinc-200",
  on_hold: "bg-amber-50 text-amber-700 border-amber-200",
  closed: "bg-zinc-100 text-zinc-500 border-zinc-200",
  verified: "bg-emerald-50 text-emerald-700 border-emerald-200",
  pending: "bg-amber-50 text-amber-700 border-amber-200",
  failed: "bg-red-50 text-red-700 border-red-200",
  manual_review: "bg-orange-50 text-orange-700 border-orange-200",
  unverified: "bg-zinc-100 text-zinc-600 border-zinc-200",
  active: "bg-emerald-50 text-emerald-700 border-emerald-200",
  inactive: "bg-zinc-100 text-zinc-500 border-zinc-200",
  shortlisted: "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/30 dark:text-orange-400 dark:border-orange-800",
  placed: "bg-orange-50 text-orange-800 border-orange-200 dark:bg-orange-950/30 dark:text-orange-300 dark:border-orange-800",
  low: "bg-zinc-100 text-zinc-600 border-zinc-200",
  medium: "bg-blue-50 text-blue-700 border-blue-200",
  high: "bg-orange-50 text-orange-700 border-orange-200",
  urgent: "bg-red-50 text-red-700 border-red-200",
  completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
  overdue: "bg-red-50 text-red-700 border-red-200",
};

export function StatusBadge({ status, className }: { status: string; className?: string }) {
  const key = status.toLowerCase().replace(/\s+/g, "_");
  const style = variants[key] || "bg-zinc-100 text-zinc-600 border-zinc-200";
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
    value >= 80
      ? "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/30 dark:text-orange-400 dark:border-orange-800"
      : value >= 60
        ? "bg-amber-50 text-amber-700 border-amber-200"
        : "bg-zinc-100 text-zinc-600 border-zinc-200";

  return (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium", color)}>
      {value}%
    </span>
  );
}

export function AiBadge() {
  return (
    <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-2 py-0.5 text-xs font-medium text-orange-700 dark:border-orange-800 dark:bg-orange-950/30 dark:text-orange-400">
      AI
    </span>
  );
}
