/* ══════════════════════════════════════════════════════════════════════════
   AlertDialog — All styles
   Mapped from Figma node 392:722 (3 statuses: destructive, success, info)
   ══════════════════════════════════════════════════════════════════════════ */

export const styles = {
  // Overlay
  overlay: "fixed inset-0 z-50 bg-black/40",

  // Content container — override shadcn p-4 with p-0, apply Figma layout
  content: [
    "!p-0 !gap-0 !ring-0 !max-w-[402px]",
    "overflow-hidden border-border bg-card",
    "shadow-[0px_2px_5px_0px_rgba(0,0,0,0.04),0px_10px_10px_0px_rgba(0,0,0,0.04),0px_22px_13px_0px_rgba(0,0,0,0.02)]",
  ].join(" "),

  // Body — Figma: p-32px, centered content, gap-24px between icon and text
  body: "relative flex flex-col items-center gap-6 p-8 text-center",

  // Icon container — Figma: 59px square, rounded-10px
  iconContainer: {
    base: "flex size-[59px] shrink-0 items-center justify-center rounded-lg",
    destructive: "bg-critical-50 text-critical-600",
    success: "bg-brand-50 text-brand-600",
    info: "bg-neutral-100 text-neutral-500",
  },

  // Icon inside container
  icon: "size-8",

  // Text container — Figma: gap-6px between title and description
  textContainer: "flex flex-col gap-1.5 w-full",

  // Title — Figma: Inter SemiBold 18px, black, tracking -0.4px
  title: "text-lg font-semibold tracking-tight text-foreground",

  // Description — Figma: Inter Medium 14px, #777c82, leading 20px
  description: "text-sm font-medium leading-5 text-muted-foreground",

  // Close button — Figma: 38px, top-8px right, rounded-8px
  closeButton: [
    "absolute right-2 top-2 flex size-[38px] cursor-pointer items-center justify-center",
    "rounded-lg text-muted-foreground/60 transition-colors",
    "hover:bg-muted hover:text-muted-foreground",
  ].join(" "),

  // Footer — Figma: bg #f6f6f6, border-top, edge-to-edge, internal px-32 py-18
  footer: "flex items-center gap-2 border-t border-border bg-neutral-100 px-8 py-[18px]",

  // Footer buttons — flex-1 each
  footerButton: "flex-1",
} as const
