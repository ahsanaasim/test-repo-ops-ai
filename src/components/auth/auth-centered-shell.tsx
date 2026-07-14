import type { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PlatformLogo } from "@/components/shared/platform-logo";
import { cn } from "@/lib/utils";

/**
 * Centered authentication card shell (Design Pattern Brain).
 * Reading flow: brand-logo → form-title → children (fields/actions) → footer (secondary links).
 * Keeps product brand tokens; canvas uses a neutral slate wash so the white card reads clearly.
 */
export function AuthCenteredShell({
  title,
  description,
  banners,
  children,
  footer,
  className,
}: {
  title: string;
  description?: string;
  banners?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex min-h-screen items-center justify-center bg-slate-50 p-4 sm:p-8",
        className
      )}
    >
      <div className="w-full max-w-md">
        <Card
          className="gap-0 py-0 shadow-sm [--card-spacing:--spacing(6)] sm:[--card-spacing:--spacing(8)]"
          data-region="centered-panel"
        >
          <CardHeader className="items-center gap-6 pt-6 text-center sm:pt-8">
            <PlatformLogo />
            <div className="space-y-2">
              <h1 className="text-[1.75rem] font-semibold leading-[2.125rem] tracking-tight text-foreground">
                {title}
              </h1>
              {description ? (
                <p className="text-sm leading-6 text-muted-foreground">{description}</p>
              ) : null}
            </div>
          </CardHeader>
          <CardContent className="space-y-6 pb-6 sm:pb-8">
            {banners ? <div className="space-y-3">{banners}</div> : null}
            {children}
            {footer ? <div className="space-y-4 pt-1">{footer}</div> : null}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
