"use client"

import { cn } from "@/lib/utils"
import { styles } from "./AppSidebar.styles"
import type { SidebarMenuItemProps } from "./AppSidebar.types"

export function SidebarMenuItem({ label, selected = false, onClick }: SidebarMenuItemProps) {
  return (
    <button onClick={onClick} className={styles.menuItem.wrapper}>
      <div
        className={cn(
          selected ? styles.menuItem.border.selected : styles.menuItem.border.default
        )}
      />
      <span
        className={cn(
          selected ? styles.menuItem.text.selected : styles.menuItem.text.default
        )}
      >
        {label}
      </span>
    </button>
  )
}

SidebarMenuItem.displayName = "SidebarMenuItem"
