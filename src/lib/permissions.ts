import type { UserRole } from "./types";

const NAV_PERMISSIONS: Record<string, UserRole[]> = {
  dashboard: ["recruiter", "manager", "admin", "reporting", "recruitment_manager"],
  briefs: ["recruiter", "manager", "admin", "recruitment_manager"],
  doctors: ["recruiter", "manager", "admin", "recruitment_manager"],
  matching: ["recruiter", "manager", "admin", "recruitment_manager"],
  outreach: ["recruiter", "manager", "admin", "recruitment_manager"],
  "follow-ups": ["recruiter", "manager", "admin", "recruitment_manager"],
  reporting: ["recruiter", "manager", "admin", "reporting", "recruitment_manager"],
  admin: ["admin"],
};

export function canAccessNav(role: UserRole, path: string): boolean {
  const key = path.replace(/^\//, "").split("/")[0] || "dashboard";
  return NAV_PERMISSIONS[key]?.includes(role) ?? false;
}

export function canExport(role: UserRole): boolean {
  return ["recruiter", "manager", "admin", "recruitment_manager"].includes(role);
}

export function canEdit(role: UserRole): boolean {
  return ["recruiter", "manager", "admin", "recruitment_manager"].includes(role);
}

export function canAccessAdmin(role: UserRole): boolean {
  return role === "admin";
}

export function shouldMaskData(role: UserRole): boolean {
  return role === "reporting";
}

export function maskEmail(email: string, role: UserRole): string {
  if (!shouldMaskData(role)) return email;
  const [local, domain] = email.split("@");
  return `${local[0]}***@${domain}`;
}

export function maskPhone(phone: string, role: UserRole): string {
  if (!shouldMaskData(role)) return phone;
  return phone.replace(/\d(?=\d{4})/g, "*");
}
