"use client";

import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useUser } from "@/context/user-context";
import { shouldMaskData } from "@/lib/permissions";

function ExportContent() {
  const { user } = useUser();

  return (
    <Dialog open onOpenChange={() => {}}>
      <DialogContent>
        <DialogHeader><DialogTitle>Export Report</DialogTitle></DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label>Export Format</Label>
            <Select defaultValue="csv">
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="csv">CSV</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {shouldMaskData(user.role) && (
            <div className="flex items-center gap-2">
              <Switch id="masked" />
              <Label htmlFor="masked">Include masked fields</Label>
            </div>
          )}
          <p className="text-sm text-muted-foreground">Export summary: 156 rows, 12 columns, filters applied.</p>
        </div>
        <DialogFooter>
          <LinkButton variant="outline" href="/reporting">Cancel</LinkButton>
          <Button>Download</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function ExportPage() {
  return <Suspense><ExportContent /></Suspense>;
}
