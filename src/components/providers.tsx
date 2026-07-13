"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { UserProvider } from "@/context/user-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <UserProvider>{children}</UserProvider>
    </TooltipProvider>
  );
}
