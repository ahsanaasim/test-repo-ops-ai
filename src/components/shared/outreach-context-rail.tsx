import Link from "next/link";
import { Mail, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "@/components/shared/status-badge";
import type { OutreachContext } from "@/lib/types";

export function OutreachContextRail({ context }: { context: OutreachContext }) {
  return (
    <aside className="space-y-4">
      <Card className="shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Related Brief</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p className="font-medium">{context.briefTitle}</p>
          <p className="text-muted-foreground">{context.client}</p>
          <Link href={`/briefs/${context.briefId}`} className="text-primary text-sm hover:underline">
            View brief
          </Link>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium flex items-center gap-2">
            <User className="h-4 w-4" aria-hidden="true" />
            Candidate
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1 text-sm">
          <p className="font-medium">{context.candidateName}</p>
          <p className="text-muted-foreground">{context.candidateSpecialty}</p>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Consent Status</CardTitle>
        </CardHeader>
        <CardContent>
          <StatusBadge status={context.consentStatus} />
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium flex items-center gap-2">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Previous Contact
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {context.previousContacts.map((contact) => (
            <div key={contact.id} className="border-b border-border pb-2 last:border-0 last:pb-0">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-medium truncate">{contact.subject}</p>
                <Badge variant="outline" className="text-xs capitalize shrink-0">
                  {contact.channel}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {contact.direction} · {new Date(contact.timestamp).toLocaleDateString()}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </aside>
  );
}
