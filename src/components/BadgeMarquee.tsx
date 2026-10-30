import { cn } from "@/lib/utils";
import { BadgeCard, badgeList } from "@/components/badges";

/**
 * Continuous credential marquee. Badges drift in from the LEFT edge of the
 * section and loop seamlessly; hovering pauses the motion.
 */
export function BadgeMarquee({ className }: { className?: string }) {
  return (
    <div className={cn("marquee-mask", className)}>
      <div className="marquee-track py-4">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center gap-10 pr-10"
          >
            {badgeList.map((badge) => (
              <BadgeCard key={`${copy}-${badge.id}`} badge={badge} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
