"use client"

import { cn } from "@/lib/utils"
import { useSidebar } from "./AppSidebar.hooks"
import { styles } from "./AppSidebar.styles"
import { PanelLeftCloseIcon } from "./AppSidebar.icons"
import type { SidebarHeaderProps } from "./AppSidebar.types"

export function SidebarHeader({ logo, title, showToggleIndicator = false }: SidebarHeaderProps) {
  const { expanded, isHoverExpand, toggle } = useSidebar()

  // Icon flipped = sidebar was manually collapsed (toggle).
  // Stays flipped even when hover temporarily expands it.
  const isFlipped = isHoverExpand || !expanded

  return (
    <div className={styles.header.wrapper}>
      <div className={styles.header.inner}>
        <div className={styles.header.logo}>{logo}</div>
        {expanded && <span className={styles.header.title}>{title}</span>}
      </div>

      {expanded ? (
        <button
          onClick={toggle}
          className={styles.header.collapseBtn}
          aria-label={isFlipped ? "Expandir sidebar" : "Recolher sidebar"}
        >
          <PanelLeftCloseIcon className={cn(
            "transition-transform duration-300",
            isFlipped && "rotate-180"
          )} />
        </button>
      ) : showToggleIndicator ? (
        <button
          onClick={toggle}
          className={styles.header.expandBtn}
          aria-label="Expandir sidebar"
        >
          <PanelLeftCloseIcon className={cn(
            styles.header.expandBtnIcon,
            "transition-transform duration-300 rotate-180"
          )} />
        </button>
      ) : null}
    </div>
  )
}

SidebarHeader.displayName = "SidebarHeader"
