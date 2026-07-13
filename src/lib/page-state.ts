import type { PageState } from "@/lib/types";

export function parsePageState(searchParams: Record<string, string | string[] | undefined>): PageState {
  const state = searchParams.state;
  const value = Array.isArray(state) ? state[0] : state;
  const valid: PageState[] = ["default", "empty", "loading", "error", "plan_limit", "permission_denied", "duplicate_detected", "invalid_upload"];
  return valid.includes(value as PageState) ? (value as PageState) : "default";
}
