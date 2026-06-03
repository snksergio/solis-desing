"use client"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { styles } from "./AppSidebar.styles"
import { ChevronUpDownIcon } from "./AppSidebar.icons"
import type { SidebarModuleSelectorProps } from "./AppSidebar.types"

export function SidebarModuleSelector({
  icon,
  title,
  subtitle,
  options,
  onModuleChange,
}: SidebarModuleSelectorProps) {
  const s = styles.module

  const triggerContent = (
    <>
      <div className={s.iconContainer}>
        {icon}
      </div>
      <div className={s.textContainer}>
        <span className={s.title}>{title}</span>
        <span className={s.subtitle}>{subtitle}</span>
      </div>
      <ChevronUpDownIcon className={s.chevron} />
    </>
  )

  // No options: display-only (no dropdown)
  if (!options || options.length === 0) {
    return <div className={s.trigger}>{triggerContent}</div>
  }

  // With options: dropdown to switch modules
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={s.trigger}>
        {triggerContent}
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" sideOffset={4} align="start">
        {options.map((option) => (
          <DropdownMenuItem
            key={option.id}
            className={s.dropdownItem}
            onClick={() => onModuleChange?.(option.id)}
          >
            <div className={s.dropdownItemIcon}>
              {option.icon}
            </div>
            <span className={s.dropdownItemLabel}>{option.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

SidebarModuleSelector.displayName = "SidebarModuleSelector"
