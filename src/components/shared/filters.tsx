"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Search } from "lucide-react";

interface FilterBarProps {
  children: React.ReactNode;
}

export function FilterBar({ children }: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-end gap-4 mb-6 p-4 rounded-lg border bg-card shadow-sm">
      {children}
    </div>
  );
}

export function SearchFilter({
  label,
  placeholder = "Search...",
  value,
  onChange,
}: {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5 min-w-[200px]">
      {label && <Label className="text-xs uppercase tracking-wide text-muted-foreground">{label}</Label>}
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={placeholder}
          className="pl-8"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </div>
    </div>
  );
}

export function SelectFilter({
  label,
  placeholder,
  options,
  value,
  onChange,
}: {
  label: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5 min-w-[160px]">
      <Label className="text-xs uppercase tracking-wide text-muted-foreground">{label}</Label>
      <Select value={value} onValueChange={(v) => onChange?.(v ?? "")}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder || `All ${label}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export function ToggleFilter({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <Switch checked={checked} onCheckedChange={onChange} id={label} />
      <Label htmlFor={label} className="text-sm">
        {label}
      </Label>
    </div>
  );
}

export function DateRangeFilter({ label }: { label: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-xs uppercase tracking-wide text-muted-foreground">{label}</Label>
      <div className="flex gap-2">
        <Input type="date" className="w-[140px]" aria-label={`${label} start`} />
        <Input type="date" className="w-[140px]" aria-label={`${label} end`} />
      </div>
    </div>
  );
}
