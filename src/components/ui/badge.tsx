import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Badge — Adapted from shadcn base-nova to match Figma (node 262:515)
 *
 * Changes from shadcn default:
 * - h-5 → h-6 (24px), px-2 → px-2.5 (10px), rounded-4xl → rounded-md (6px)
 * - font-medium → font-semibold, tracking-tight
 * - Variants: primary (green subtle), neutral (gray), critical (red subtle)
 * - Added: success, warning, info for complete semantic system
 *
 * Preserved: outline, ghost, link, focus ring, aria-invalid, dark mode
 */
const badgeVariants = cva(
  [
    "group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1",
    "overflow-hidden rounded-md border border-transparent px-2.5 py-0.5",
    "text-xs font-semibold tracking-tight whitespace-nowrap transition-all",
    "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
    "[&>svg]:pointer-events-none [&>svg]:size-3!",
  ].join(" "),
  {
    variants: {
      variant: {
        // Figma Color=Primary — bg #ebfbf1, text #228448
        default: "bg-brand-50 text-brand-700",

        // Figma Color=Neutral — bg #f6f6f6, text #777c82
        secondary: "bg-neutral-100 text-neutral-500",

        // Figma Color=Critical — bg #fbe7e7, text #d93747
        destructive: "bg-critical-50 text-critical-600",

        // Extended: success (same visual as primary/default in this project)
        success: "bg-success-50 text-success-700",

        // Extended: warning
        warning: "bg-warning-50 text-warning-700",

        // Extended: info
        info: "bg-info-50 text-info-700",

        // Shadcn originals (kept)
        outline:
          "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost:
          "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
