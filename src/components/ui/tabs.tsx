"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Tabs — Adapted from shadcn base-nova to match Figma (node 388:6682)
 *
 * Changes from shadcn default:
 * - TabsList: h-8 → h-10, p-[3px] → p-1, bg-muted → bg-neutral-100, gap-0.5
 * - TabsTrigger: px-1.5 → px-4, tracking-tight, font-semibold when active
 * - Active: bg-card shadow-sm (white pill), text-foreground font-semibold
 * - Inactive: transparent, text-muted-foreground font-medium
 * - Badge support via children (red circle with count)
 *
 * Preserved from shadcn:
 * - All variants (default, line), orientation (horizontal, vertical)
 * - Focus ring, disabled states, dark mode
 * - TabsContent unchanged
 */

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-horizontal:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  [
    "group/tabs-list inline-flex h-10 w-fit items-center justify-center rounded-lg text-muted-foreground",
    "group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col",
    "data-[variant=line]:rounded-none",
  ].join(" "),
  {
    variants: {
      variant: {
        // Figma: #f6f6f6 pill container, h-40px, p-4px, gap-2px, rounded-10px
        default: "bg-neutral-100 gap-0.5 p-1",
        line: "gap-1 bg-transparent p-0 h-auto",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        // Base — h-8 (32px) = TabsList 40px - p-1 (4px) * 2
        [
          "relative inline-flex h-8 flex-1 cursor-pointer items-center justify-center gap-1.5",
          "rounded-md border border-transparent px-4",
          "text-sm font-medium tracking-tight whitespace-nowrap",
          "text-muted-foreground transition-all",
          "group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start",
        ].join(" "),
        // Focus
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring",
        // Disabled
        "disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
        // Hover (inactive)
        "hover:text-foreground",
        // Active — Figma: white bg, shadow, semibold, dark text
        "data-active:bg-card data-active:text-foreground data-active:font-semibold data-active:shadow-sm",
        // Dark active
        "dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground",
        // Line variant overrides
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent group-data-[variant=line]/tabs-list:data-active:shadow-none",
        "dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
        // Line variant underline indicator
        [
          "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity",
          "group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5",
          "group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5",
          "group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        ].join(" "),
        // Icons
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    />
  )
}

/**
 * TabBadge — Notification badge inside a tab trigger (Figma: red circle, 16px)
 *
 * @example
 * <TabsTrigger value="history">
 *   Histórico de ações
 *   <TabBadge count={3} />
 * </TabsTrigger>
 */
function TabBadge({ count, className }: { count: number; className?: string }) {
  if (count <= 0) return null
  return (
    <span
      className={cn(
        "flex size-4 shrink-0 items-center justify-center rounded-full bg-critical-600 text-[10px] font-bold leading-none text-white tracking-tight",
        className
      )}
    >
      {count}
    </span>
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, TabBadge, tabsListVariants }
