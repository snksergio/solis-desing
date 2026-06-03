/* ══════════════════════════════════════════════════════════════════════════
   FormField — All styles
   Mapped from Figma node 260:20037 (5 states: enabled, filled, focus, disabled, error)
   ══════════════════════════════════════════════════════════════════════════ */

export const styles = {
  // Outer wrapper — Figma: flex-col gap-6px
  wrapper: "flex w-full flex-col gap-1.5",

  // Label row — Figma: flex gap-8px, items-center
  labelRow: "flex items-center gap-2",

  // Label text — Figma: Inter SemiBold 14px
  label: {
    default: "text-sm font-semibold text-muted-foreground",
    error: "text-sm font-semibold text-destructive",
  },

  // Info icon — Figma: 16px, same color as label
  infoIcon: {
    default: "size-4 shrink-0 text-muted-foreground/60",
    error: "size-4 shrink-0 text-destructive/60",
  },

  // Helper text — Figma: Inter Medium 11px
  helperText: {
    default: "text-[11px] font-medium leading-[14px] text-muted-foreground/60",
    error: "text-[11px] font-medium leading-[14px] text-destructive",
  },
} as const
