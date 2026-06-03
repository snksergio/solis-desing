/* ══════════════════════════════════════════════════════════════════════════
   TableHeader — All styles
   Mapped from Figma node 415:1470
   ══════════════════════════════════════════════════════════════════════════ */

export const styles = {
  // Container — Figma: white, rounded 20px, p 24px, gap 10px between rows
  container: "flex w-full flex-col gap-2.5 rounded-xl bg-card p-6",

  // ── Toolbar (row 1) ──
  toolbar: "flex items-center justify-between",

  // Left side: section tabs
  toolbarLeft: "flex items-center gap-1.5",

  // Section tab — Figma: bg #f6f6f6, h 40px, rounded 8px, px 14px
  sectionTab: {
    active: [
      "flex h-10 cursor-pointer items-center gap-1.5 rounded-md bg-neutral-100 px-3.5",
      "text-sm font-semibold text-foreground whitespace-nowrap",
    ].join(" "),
    inactive: [
      "flex h-10 cursor-pointer items-center gap-1.5 rounded-md px-3.5",
      "text-sm font-medium text-muted-foreground whitespace-nowrap",
      "hover:bg-neutral-100/60 transition-colors",
    ].join(" "),
  },

  // Section tab icon
  sectionIcon: "size-[18px] shrink-0",

  // Add section button (+)
  addSectionBtn: [
    "flex size-10 cursor-pointer items-center justify-center rounded-md",
    "text-muted-foreground hover:bg-neutral-100/60 transition-colors",
  ].join(" "),

  // Vertical divider — Figma: 18px height
  divider: "mx-1 h-[18px] border-r border-border",

  // Right side: actions + export
  toolbarRight: "flex items-center gap-3.5",

  // Action icon group
  actionGroup: "flex items-center gap-1",

  // Action icon button — Figma: h 40px, rounded 8px
  actionBtn: [
    "flex size-10 cursor-pointer items-center justify-center rounded-md",
    "text-muted-foreground transition-colors hover:bg-neutral-100/60",
  ].join(" "),

  // Notification dot
  actionDot: "absolute -top-0.5 -right-0.5 size-1.5 rounded-full bg-critical-500",

  // Export button — Figma: border #e8e8e8, shadow, rounded 10px, h 40px
  exportBtn: [
    "flex h-10 cursor-pointer items-center rounded-lg border border-border bg-card",
    "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] transition-colors hover:bg-muted/50",
  ].join(" "),
  exportBtnContent: "flex items-center gap-1.5 pl-3 pr-1",
  exportBtnIcon: "size-[18px] shrink-0 text-neutral-700",
  exportBtnLabel: "text-sm font-medium text-neutral-700 whitespace-nowrap",
  exportBtnDivider: "mx-0 h-6 border-r border-border",
  exportBtnChevron: "flex items-center px-2.5",

  // More options button (3 dots)
  moreOptionsBtn: [
    "flex size-10 cursor-pointer items-center justify-center rounded-lg border border-border bg-card",
    "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] text-muted-foreground",
    "transition-colors hover:bg-muted/50",
  ].join(" "),

  // Separator between toolbar and filters — Figma: 1px line, no extra margin (gap handles it)
  separator: "h-px w-full bg-border",

  // ── Filter bar (row 2) ──
  filterBar: "flex flex-wrap items-center gap-2",

  // Filter chip — Figma: dashed border #d7d7d7, h 34px, rounded 10px
  filterChip: [
    "flex h-[34px] cursor-pointer items-center gap-1.5 rounded-lg",
    "border border-dashed border-neutral-300 bg-card pl-3 pr-3.5",
    "text-sm font-medium text-neutral-700 whitespace-nowrap",
    "transition-colors hover:bg-neutral-100/50 hover:border-neutral-400",
  ].join(" "),
  filterChipIcon: "size-[18px] shrink-0 text-neutral-500",

  // Add filter button — Figma: bg #f6f6f6, 34px square, rounded 10px
  addFilterBtn: [
    "flex size-[34px] cursor-pointer items-center justify-center rounded-lg",
    "bg-neutral-100 text-neutral-500",
    "transition-colors hover:bg-neutral-200/60",
  ].join(" "),
} as const
