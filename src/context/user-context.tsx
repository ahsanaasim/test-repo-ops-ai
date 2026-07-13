"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { User, UserRole } from "@/lib/types";

const defaultUser: User = {
  id: "u-1",
  name: "Sarah Chen",
  email: "sarah.chen@recruitmed.com.au",
  role: "recruiter",
};

interface UserContextValue {
  user: User;
  setRole: (role: UserRole) => void;
}

const UserContext = createContext<UserContextValue>({
  user: defaultUser,
  setRole: () => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(defaultUser);

  const setRole = (role: UserRole) => {
    setUser((prev) => ({ ...prev, role }));
  };

  return (
    <UserContext.Provider value={{ user, setRole }}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
