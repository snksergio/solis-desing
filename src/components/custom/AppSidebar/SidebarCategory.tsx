"use client"

import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"
import { useSidebar } from "./AppSidebar.hooks"
import { categoryVariants, styles } from "./AppSidebar.styles"
import { ChevronDownIcon } from "./AppSidebar.icons"
import { SidebarMenuItem } from "./SidebarMenuItem"
import type { SidebarCategoryProps } from "./AppSidebar.types"

export function SidebarCategory({
  id,
  icon,
  label,
  active = false,
  items,
  activeItemId,
  onItemClick,
  onCategoryClick,
}: SidebarCategoryProps) {
  const { expanded, openCategoryId, setOpenCategoryId } = useSidebar()
  const hasItems = items && items.length > 0

  // Accordion: this category is open only if it's the selected one
  const isOpen = hasItems ? openCategoryId === id : false
  const isActive = hasItems ? isOpen : active

  const s = styles.category
  const textClass = isActive ? s.text.active : s.text.inactive
  const iconClass = isActive ? s.icon.active : s.icon.inactive
  const chevronClass = isActive ? s.chevron.active : s.chevron.inactive

  const handleToggle = () => {
    if (hasItems) {
      // Accordion: toggle this, close others
      setOpenCategoryId(isOpen ? null : id)
    }
    onCategoryClick?.()
  }

  // Collapsed sidebar: icon only with tooltip, centered
  if (!expanded) {
    return (
      <Tooltip>
        <TooltipTrigger
          role="button"
          tabIndex={0}
          onClick={handleToggle}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleToggle() } }}
          className={categoryVariants({ active: isActive, collapsed: true })}
        >
          <span className={iconClass}>{icon}</span>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={8}>
          {label}
        </TooltipContent>
      </Tooltip>
    )
  }

  // No sub-items: simple button (no chevron — nothing to expand)
  if (!hasItems) {
    return (
      <button
        onClick={handleToggle}
        className={categoryVariants({ active: isActive, collapsed: false })}
      >
        <span className={iconClass}>{icon}</span>
        <span className={textClass}>{label}</span>
      </button>
    )
  }

  // With sub-items: collapsible (controlled by accordion via onOpenChange only)
  return (
    <Collapsible open={isOpen} onOpenChange={(open) => {
      setOpenCategoryId(open ? id : null)
      onCategoryClick?.()
    }}>
      <CollapsibleTrigger
        className={categoryVariants({ active: isActive, collapsed: false })}
      >
        <span className={iconClass}>{icon}</span>
        <span className={textClass}>{label}</span>
        <ChevronDownIcon
          className={cn(chevronClass, "transition-transform", isOpen && "rotate-180")}
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className={styles.subItemList}>
          {items.map((item) => (
            <SidebarMenuItem
              key={item.id}
              label={item.label}
              selected={item.id === activeItemId}
              onClick={() => onItemClick?.(item.id)}
            />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

SidebarCategory.displayName = "SidebarCategory"
