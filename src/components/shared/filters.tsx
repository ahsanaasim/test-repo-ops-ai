"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { ChevronDown, Search } from "lucide-react";

interface FilterBarProps {
  children: React.ReactNode;
}

export function FilterBar({ children }: FilterBarProps) {
  return (
    <div className="mb-6 flex flex-wrap items-end gap-4 rounded-lg border border-border bg-card p-4 shadow-sm">
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

export function MultiSelectFilter({
  label,
  options,
  values = [],
  onChange,
  disabled,
}: {
  label: string;
  options: { value: string; label: string }[];
  values?: string[];
  onChange?: (v: string[]) => void;
  disabled?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const selected = values.length > 0 ? `${values.length} selected` : `All ${label}`;

  const toggle = (value: string) => {
    const next = values.includes(value)
      ? values.filter((v) => v !== value)
      : [...values, value];
    onChange?.(next);
  };

  return (
    <div className="flex flex-col gap-1.5 min-w-[160px]">
      <Label className="text-xs uppercase tracking-wide text-muted-foreground">{label}</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger disabled={disabled}>
          <Button
            variant="outline"
            className="w-full justify-between font-normal"
            disabled={disabled}
          >
            <span className="truncate">{selected}</span>
            <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-2" align="start">
          <div className="space-y-2">
            {options.map((opt) => (
              <label key={opt.value} className="flex items-center gap-2 text-sm cursor-pointer">
                <Checkbox
                  checked={values.includes(opt.value)}
                  onCheckedChange={() => toggle(opt.value)}
                />
                {opt.label}
              </label>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export function NumericRangeFilter({
  label,
  min = 0,
  max = 100,
  defaultValue = 60,
}: {
  label: string;
  min?: number;
  max?: number;
  defaultValue?: number;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-xs uppercase tracking-wide text-muted-foreground">{label}</Label>
      <input
        type="range"
        min={min}
        max={max}
        defaultValue={defaultValue}
        className="w-32 accent-primary"
        aria-label={label}
      />
    </div>
  );
}

export function SavedFiltersDropdown({
  filters,
}: {
  filters: { id: string; name: string }[];
}) {
  return (
    <div className="flex flex-col gap-1.5 min-w-[160px]">
      <Label className="text-xs uppercase tracking-wide text-muted-foreground">Saved filters</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Load saved filter" />
        </SelectTrigger>
        <SelectContent>
          {filters.map((f) => (
            <SelectItem key={f.id} value={f.id}>
              {f.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
