"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  Stethoscope,
  Sparkles,
  Send,
  ListChecks,
  BarChart3,
  Shield,
  PanelLeftClose,
  PanelLeft,
  Search,
  Bell,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/briefs", label: "Briefs", icon: Briefcase },
  { href: "/doctors", label: "Doctors", icon: Stethoscope },
  { href: "/matching", label: "Matching", icon: Sparkles },
  { href: "/outreach", label: "Outreach", icon: Send },
  { href: "/follow-ups", label: "Follow-Ups", icon: ListChecks },
  { href: "/reporting", label: "Reporting", icon: BarChart3 },
  { href: "/admin", label: "Admin", icon: Shield },
];

export function AppShell({
  title,
  breadcrumb,
  children,
}: {
  title: string;
  breadcrumb?: string;
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = React.useState(false);
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen w-full">
      <aside
        className={cn(
          "hidden shrink-0 border-r bg-card transition-all duration-200 md:flex md:flex-col",
          collapsed ? "w-16" : "w-60"
        )}
      >
        <div className="flex h-14 items-center gap-2 border-b px-4">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Stethoscope className="size-4" />
          </div>
          {!collapsed && (
            <span className="text-sm font-semibold tracking-tight">
              MedRecruit
            </span>
          )}
        </div>
        <nav className="flex flex-1 flex-col gap-1 p-2">
          {NAV_ITEMS.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground",
                  collapsed && "justify-center px-0"
                )}
              >
                <Icon className="size-4 shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 items-center gap-3 border-b bg-card px-4">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle sidebar"
            className="hidden md:inline-flex"
            onClick={() => setCollapsed((c) => !c)}
          >
            {collapsed ? (
              <PanelLeft className="size-4" />
            ) : (
              <PanelLeftClose className="size-4" />
            )}
          </Button>
          <div className="flex flex-col">
            {breadcrumb && (
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                {breadcrumb}
              </span>
            )}
            <h1 className="text-sm font-semibold tracking-tight">{title}</h1>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Search className="size-4" />
              <span className="hidden sm:inline">Search</span>
            </Button>
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="size-4" />
            </Button>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-medium">
              RK
            </div>
          </div>
        </header>

        <main className="flex-1 bg-background">
          <div className="mx-auto w-full max-w-7xl p-4 md:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
