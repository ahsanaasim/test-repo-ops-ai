"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  ChevronRight,
  LogOut,
  Menu,
  Search,
  Settings,
  User,
} from "lucide-react";
import { getBreadcrumbs, getNavItems } from "@/lib/navigation";
import { useUser } from "@/context/user-context";
import { notifications as allNotifications } from "@/lib/sample-data";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { MultiSelectFilter, ToggleFilter } from "@/components/shared/filters";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { Notification } from "@/lib/types";

interface TopbarProps {
  onMenuClick: () => void;
  title?: string;
}

function groupNotifications(items: Notification[]) {
  const groups: Record<string, Notification[]> = {};
  for (const n of items) {
    const date = new Date(n.timestamp).toLocaleDateString();
    groups[date] = groups[date] ?? [];
    groups[date].push(n);
  }
  return Object.entries(groups);
}

export function Topbar({ onMenuClick, title }: TopbarProps) {
  const pathname = usePathname();
  const { user } = useUser();
  const [searchOpen, setSearchOpen] = useState(false);
  const [items, setItems] = useState(allNotifications);
  const [typeFilter, setTypeFilter] = useState<string[]>([]);
  const [unreadOnly, setUnreadOnly] = useState(false);
  const breadcrumbs = getBreadcrumbs(pathname);
  const unreadCount = items.filter((n) => !n.read).length;
  const navItems = getNavItems(user.role);
  const overdueCount = 1;

  const filtered = useMemo(() => {
    return items.filter((n) => {
      if (unreadOnly && n.read) return false;
      if (typeFilter.length > 0 && !typeFilter.includes(n.type)) return false;
      return true;
    });
  }, [items, typeFilter, unreadOnly]);

  const markRead = (id: string) => {
    setItems((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/80 lg:px-6">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </Button>

      <div className="flex flex-1 flex-col gap-0.5 min-w-0">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1 text-xs uppercase tracking-wide text-muted-foreground"
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-3 w-3" />}
              {crumb.href && i < breadcrumbs.length - 1 ? (
                <Link href={crumb.href} className="hover:text-foreground transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className={i === breadcrumbs.length - 1 ? "text-foreground" : ""}>
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </nav>
        {title && <h1 className="text-2xl font-semibold tracking-tight truncate">{title}</h1>}
      </div>

      <div className="flex items-center gap-2">
        {overdueCount > 0 && (
          <Badge variant="outline" className="hidden sm:flex text-xs text-[var(--status-warning)]">
            {overdueCount} overdue
          </Badge>
        )}

        <Button
          variant="outline"
          size="sm"
          className="hidden sm:flex gap-2 text-muted-foreground"
          onClick={() => setSearchOpen(true)}
        >
          <Search className="h-4 w-4" />
          <span className="text-sm">Search...</span>
          <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden"
          onClick={() => setSearchOpen(true)}
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </Button>

        <Sheet>
          <SheetTrigger>
            <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  {unreadCount}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-md">
            <SheetHeader>
              <SheetTitle>Notifications</SheetTitle>
            </SheetHeader>
            <div className="mt-4 flex flex-wrap gap-3 border-b pb-4">
              <MultiSelectFilter
                label="Type"
                options={[
                  { value: "task", label: "Task" },
                  { value: "brief", label: "Brief" },
                  { value: "verification", label: "Verification" },
                  { value: "outreach", label: "Outreach" },
                  { value: "system", label: "System" },
                ]}
                values={typeFilter}
                onChange={setTypeFilter}
              />
              <ToggleFilter label="Unread only" checked={unreadOnly} onChange={setUnreadOnly} />
            </div>
            <ScrollArea className="h-[calc(100vh-14rem)] mt-4">
              {filtered.length === 0 ? (
                <p className="text-sm text-muted-foreground py-8 text-center">No notifications</p>
              ) : (
                <div className="space-y-4 pr-4">
                  {groupNotifications(filtered).map(([date, group]) => (
                    <div key={date}>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                        {date}
                      </p>
                      <div className="space-y-3">
                        {group.map((n) => (
                          <div
                            key={n.id}
                            className={`rounded-lg border p-3 ${!n.read ? "bg-primary/5 border-primary/20" : ""}`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <Tooltip>
                                <TooltipTrigger>
                                  <Badge variant="outline" className="text-xs capitalize">
                                    {n.type}
                                  </Badge>
                                </TooltipTrigger>
                                <TooltipContent>{n.content}</TooltipContent>
                              </Tooltip>
                              {!n.read && (
                                <span className="h-2 w-2 rounded-full bg-primary" aria-label="Unread" />
                              )}
                            </div>
                            <p className="text-sm mt-2">{n.content}</p>
                            <div className="flex items-center justify-between mt-2 gap-2">
                              <span className="text-xs text-muted-foreground">
                                {new Date(n.timestamp).toLocaleString()}
                              </span>
                              <div className="flex gap-2">
                                {!n.read && (
                                  <Button variant="ghost" size="sm" className="h-auto p-0 text-xs" onClick={() => markRead(n.id)}>
                                    Mark read
                                  </Button>
                                )}
                                {n.relatedUrl && (
                                  <LinkButton variant="link" size="sm" className="h-auto p-0" href={n.relatedUrl}>
                                    View
                                  </LinkButton>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </SheetContent>
        </Sheet>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" size="sm" className="gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-medium">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <span className="hidden md:inline text-sm">{user.name}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <div className="px-2 py-1.5">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
              <Badge variant="outline" className="mt-1 text-xs capitalize">
                {user.role.replace("_", " ")}
              </Badge>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/login" className="flex items-center">
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
        <CommandInput placeholder="Search pages, briefs, doctors..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {navItems.map((item) => (
              <CommandItem
                key={item.href}
                onSelect={() => {
                  window.location.href = item.href;
                  setSearchOpen(false);
                }}
              >
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
}
