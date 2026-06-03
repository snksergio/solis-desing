"use client"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { useSidebar } from "./AppSidebar.hooks"
import { styles } from "./AppSidebar.styles"
import { ChevronUpDownIcon, UserIcon } from "./AppSidebar.icons"
import type { SidebarFooterProps } from "./AppSidebar.types"

export function SidebarFooter({
  name,
  email,
  avatar,
  actions,
  onAction,
}: SidebarFooterProps) {
  const { expanded } = useSidebar()
  const s = styles.footer

  const triggerContent = (
    <>
      <div className={s.avatar}>
        {avatar ?? <UserIcon className={s.avatarIcon} />}
      </div>
      {expanded && (
        <>
          <div className={s.textContainer}>
            <span className={s.name}>{name}</span>
            <span className={s.email}>{email}</span>
          </div>
          <ChevronUpDownIcon className={s.chevron} />
        </>
      )}
    </>
  )

  // No actions: display-only (no dropdown)
  if (!actions || actions.length === 0) {
    return (
      <div className={s.wrapper}>
        <div className={s.button}>{triggerContent}</div>
      </div>
    )
  }

  // With actions: dropdown with user menu
  return (
    <div className={s.wrapper}>
      <DropdownMenu>
        <DropdownMenuTrigger className={s.button}>
          {triggerContent}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side={expanded ? "top" : "right"}
          sideOffset={8}
          align={expanded ? "end" : "start"}
        >
          <DropdownMenuGroup>
            <DropdownMenuLabel className={s.dropdownLabel}>
              <span className={s.dropdownLabelName}>{name}</span>
              <span className={s.dropdownLabelEmail}>{email}</span>
            </DropdownMenuLabel>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          {actions.map((action) => (
            <DropdownMenuItem
              key={action.id}
              variant={action.variant === "destructive" ? "destructive" : "default"}
              onClick={() => onAction?.(action.id)}
              className={s.dropdownItem}
            >
              {action.icon && <span className={s.dropdownItemIcon}>{action.icon}</span>}
              <span>{action.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

SidebarFooter.displayName = "SidebarFooter"
