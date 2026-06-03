/* ══════════════════════════════════════════════════════════════════════════
   KpiRow — All styles
   Mapped from Figma node 262:656
   ══════════════════════════════════════════════════════════════════════════ */

export const styles = {
  // Container — Figma: white, border #ececec, rounded 10px, p 24px, shadow
  container: [
    "w-full rounded-lg border border-border bg-card p-6",
    "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]",
  ].join(" "),

  // Items grid — responsive: 1 col mobile, 2 col tablet, row desktop
  grid: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:flex lg:items-center lg:gap-0",

  // Single KPI item — Figma: flex, gap 16px, flex-1, items-center vertically
  item: "flex items-center gap-4 lg:flex-1 lg:px-6 first:lg:pl-0 last:lg:pr-0",

  // Divider — vertical line between items (desktop only), self-stretch for full height
  divider: "hidden lg:block self-stretch border-r border-border",

  // Icon container — Figma: 42px, rounded 10px
  iconContainer: {
    base: "flex size-[42px] shrink-0 items-center justify-center rounded-lg",
    neutral: "bg-neutral-100 text-neutral-500",
    success: "bg-brand-50 text-brand-600",
    warning: "bg-warning-50 text-warning-600",
    critical: "bg-critical-50 text-critical-600",
    info: "bg-info-50 text-info-600",
  },

  // Icon inside container — Figma: 18px
  icon: "size-[18px]",

  // Text — Figma: whitespace-nowrap, gap 8px
  textContainer: "flex flex-col gap-2 whitespace-nowrap",
  label: "text-sm font-medium leading-[14px] text-muted-foreground tracking-tight",
  value: "text-lg font-bold leading-[18px] text-foreground tracking-tighter",
} as const
