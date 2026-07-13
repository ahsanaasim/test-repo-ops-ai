import { Paperclip, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "@/components/shared/status-badge";
import type { ActivityItem } from "@/lib/types";

export function ActivityTimelineItem({ activity }: { activity: ActivityItem }) {
  return (
    <div className="flex items-start gap-3 border-b border-border pb-3 last:border-0">
      <div className="flex-1 min-w-0">
        <p className="text-sm">{activity.description}</p>
        {activity.noteContent && (
          <p className="mt-1 text-sm text-muted-foreground italic">{activity.noteContent}</p>
        )}
        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span>{activity.performedBy}</span>
          <span>·</span>
          <time dateTime={activity.timestamp}>{new Date(activity.timestamp).toLocaleString()}</time>
          {activity.linkedCandidate && (
            <>
              <span>·</span>
              <span>{activity.linkedCandidate}</span>
            </>
          )}
          {activity.linkedCommunication && (
            <>
              <span>·</span>
              <span>{activity.linkedCommunication}</span>
            </>
          )}
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {activity.statusChange && (
            <Badge variant="outline" className="text-xs capitalize">
              {activity.statusChange}
            </Badge>
          )}
          {activity.ahpraBadge && <StatusBadge status={activity.ahpraBadge} />}
          {activity.aiGenerated && (
            <Badge variant="outline" className="text-xs gap-1">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              AI note
            </Badge>
          )}
          {activity.hasAttachment && (
            <Paperclip className="h-3.5 w-3.5 text-muted-foreground" aria-label="Has attachment" />
          )}
        </div>
      </div>
    </div>
  );
}
