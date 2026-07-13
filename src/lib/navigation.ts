import {
  Briefcase,
  CalendarClock,
  LayoutDashboard,
  Mail,
  Settings,
  Sparkles,
  Stethoscope,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import type { UserRole } from "./types";
import { canAccessNav } from "./permissions";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

const ALL_NAV: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Briefs", href: "/briefs", icon: Briefcase },
  { label: "Doctors", href: "/doctors", icon: Stethoscope },
  { label: "Matching", href: "/matching", icon: Sparkles },
  { label: "Outreach", href: "/outreach", icon: Mail },
  { label: "Follow-Ups", href: "/follow-ups", icon: CalendarClock },
  { label: "Reporting", href: "/reporting", icon: BarChart3 },
  { label: "Admin", href: "/admin", icon: Settings },
];

export function getNavItems(role: UserRole): NavItem[] {
  return ALL_NAV.filter((item) => canAccessNav(role, item.href));
}

export function getBreadcrumbs(pathname: string): { label: string; href?: string }[] {
  const segments = pathname.split("/").filter(Boolean);
  const crumbs: { label: string; href?: string }[] = [{ label: "Home", href: "/dashboard" }];

  const labels: Record<string, string> = {
    dashboard: "Dashboard",
    briefs: "Briefs",
    doctors: "Doctors",
    matching: "Matching",
    outreach: "Outreach",
    "follow-ups": "Follow-Ups",
    reporting: "Reporting",
    admin: "Admin",
    notifications: "Notifications",
    add: "Add",
    edit: "Edit",
    timeline: "Timeline",
    verify: "AHPRA Verification",
    "cv-upload": "CV Upload",
    "cv-review": "CV Review",
    duplicates: "Duplicates",
    confirm: "Confirm",
    templates: "Templates",
    personalize: "Personalize",
    "send-confirm": "Send Confirmation",
    overdue: "Overdue",
    export: "Export",
    users: "Users",
    roles: "Roles",
    audit: "Audit Log",
    retention: "Data Retention",
    "manual-upload": "Upload Docs",
    "manual-notes": "Add Notes",
    "manual-submit": "Submit",
    "manual-review": "Manager Review",
    login: "Login",
    reset: "Password Reset",
    forbidden: "Access Denied",
  };

  let path = "";
  for (const seg of segments) {
    path += `/${seg}`;
    crumbs.push({
      label: labels[seg] || seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      href: path,
    });
  }
  return crumbs;
}
