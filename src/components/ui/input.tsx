import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

/**
 * Input — Adapted from shadcn base-nova to match Figma (node 260:20037)
 *
 * Changes from shadcn default:
 * - h-8 → h-11 (44px from Figma)
 * - px-2.5 → px-3.5 (14px from Figma)
 * - rounded-lg (10px from Figma)
 * - shadow-sm (Figma subtle shadow)
 * - font-medium text-sm (Inter Medium 14px)
 * - Focus: border-primary ring-primary/20 (green ring, Figma)
 * - Disabled: bg-neutral-100 (Figma #f6f6f6)
 * - Error: via aria-invalid (red border + ring, Figma)
 *
 * Preserved: all shadcn behavior, file input, dark mode
 */
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        // Base — Figma: h-44px, px-14px, rounded-10px, shadow
        "h-11 w-full min-w-0 rounded-lg border border-input bg-background px-3.5 py-2.5",
        "text-sm font-medium text-foreground transition-all outline-none",
        "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]",
        // Placeholder — Figma: #ced0d2
        "placeholder:text-muted-foreground/60",
        // Focus — Figma: border #00803c + ring 3px rgba(6,131,65,0.2)
        "focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20",
        // Disabled — Figma: bg #f6f6f6, no shadow
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:shadow-none disabled:opacity-70",
        // Error — Figma: border #dc2626 + ring 3px rgba(220,38,38,0.2)
        "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
        // File input
        "file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        // Dark mode
        "dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
