export type UserRole =
  | "recruiter"
  | "manager"
  | "admin"
  | "reporting"
  | "recruitment_manager";

export type PageState =
  | "default"
  | "empty"
  | "loading"
  | "error"
  | "plan_limit"
  | "permission_denied"
  | "duplicate_detected"
  | "invalid_upload";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Brief {
  id: string;
  title: string;
  client: string;
  location: string;
  specialty: string;
  status: "open" | "in_progress" | "filled" | "on_hold" | "closed";
  assignedRecruiter: string;
  openPositions: number;
  createdDate: string;
  aiMatchConfidence?: number;
  ahpraStatus?: string;
  notes?: string;
  roleType?: string;
  startDate?: string;
  endDate?: string;
  employmentType?: string;
  description?: string;
  requirements?: string;
}

export interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  specialty: string;
  location: string;
  ahpraStatus: "verified" | "pending" | "failed" | "manual_review" | "unverified";
  ahpraNumber?: string;
  employmentType?: string;
  availability?: string;
  email?: string;
  phone?: string;
  status: "active" | "inactive" | "shortlisted" | "placed";
  duplicate?: boolean;
  aiGeneratedNotes?: boolean;
  yearsExperience?: number;
  currentRole?: string;
  currentEmployer?: string;
  subspecialties?: string[];
  education?: string[];
  verificationSource?: string;
  verificationDate?: string;
  verificationNotes?: string;
}

export interface FollowUp {
  id: string;
  dueDate: string;
  priority: "low" | "medium" | "high" | "urgent";
  status: "pending" | "in_progress" | "completed" | "overdue";
  notes?: string;
  assignee: string;
  relatedCandidate?: string;
  relatedBrief?: string;
}

export interface Notification {
  id: string;
  type: "task" | "brief" | "verification" | "outreach" | "system";
  content: string;
  timestamp: string;
  read: boolean;
  relatedUrl?: string;
}

export interface ActivityItem {
  id: string;
  type: string;
  timestamp: string;
  description: string;
  performedBy: string;
  linkedCandidate?: string;
  linkedCommunication?: string;
  statusChange?: string;
  ahpraBadge?: string;
  noteContent?: string;
  hasAttachment?: boolean;
  aiGenerated?: boolean;
}

export interface MatchCandidate {
  id: string;
  name: string;
  specialty: string;
  location: string;
  ahpraStatus: string;
  confidence: number;
  rationale: string;
  availability?: string;
  yearsExperience?: number;
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  objectType: string;
  objectName: string;
  details?: string;
  ipAddress?: string;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: "active" | "inactive" | "pending";
  lastLogin?: string;
}
