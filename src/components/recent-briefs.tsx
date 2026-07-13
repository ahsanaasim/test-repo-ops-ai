"use client";

import * as React from "react";
import { Search } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Brief = {
  id: string;
  title: string;
  client: string;
  specialty: string;
  status: "Open" | "Interviewing" | "Filled";
  positions: number;
};

const BRIEFS: Brief[] = [
  {
    id: "BR-1041",
    title: "Emergency Medicine Registrar",
    client: "Royal Melbourne Hospital",
    specialty: "Emergency Medicine",
    status: "Open",
    positions: 3,
  },
  {
    id: "BR-1038",
    title: "Consultant Anaesthetist",
    client: "St Vincent's Health",
    specialty: "Anaesthetics",
    status: "Interviewing",
    positions: 1,
  },
  {
    id: "BR-1033",
    title: "GP — Rural Locum",
    client: "Ballarat Community Health",
    specialty: "General Practice",
    status: "Open",
    positions: 2,
  },
  {
    id: "BR-1029",
    title: "Cardiology Fellow",
    client: "Alfred Health",
    specialty: "Cardiology",
    status: "Filled",
    positions: 1,
  },
];

const STATUS_STYLES: Record<Brief["status"], string> = {
  Open: "bg-primary/10 text-primary",
  Interviewing: "bg-amber-500/10 text-amber-600",
  Filled: "bg-emerald-500/10 text-emerald-600",
};

export function RecentBriefs() {
  const [query, setQuery] = React.useState("");

  const filtered = BRIEFS.filter((b) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      b.title.toLowerCase().includes(q) ||
      b.client.toLowerCase().includes(q) ||
      b.specialty.toLowerCase().includes(q)
    );
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between gap-4 space-y-0">
        <div>
          <CardTitle className="text-base">Recent client briefs</CardTitle>
          <CardDescription>
            {filtered.length} of {BRIEFS.length} briefs shown
          </CardDescription>
        </div>
        <div className="relative w-full max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter briefs..."
            aria-label="Filter briefs"
            className="h-9 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-hidden rounded-md border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
                <th className="px-4 py-3 font-medium">Brief</th>
                <th className="px-4 py-3 font-medium">Client</th>
                <th className="px-4 py-3 font-medium">Specialty</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 text-right font-medium">Positions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((b) => (
                <tr key={b.id} className="border-b last:border-0">
                  <td className="px-4 py-3">
                    <div className="font-medium">{b.title}</div>
                    <div className="text-xs text-muted-foreground">{b.id}</div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {b.client}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {b.specialty}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_STYLES[b.status]}`}
                    >
                      {b.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums">
                    {b.positions}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-10 text-center text-sm text-muted-foreground"
                  >
                    No briefs match “{query}”.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
