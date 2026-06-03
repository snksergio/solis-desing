"use client"

import { cn } from "@/lib/utils"
import { styles } from "./AppSidebar.styles"
import { SearchIcon } from "./AppSidebar.icons"
import type { SidebarSearchProps } from "./AppSidebar.types"

export function SidebarSearch({
  placeholder = "Buscar",
  value,
  onChange,
  inputRef,
}: SidebarSearchProps) {
  const s = styles.search

  return (
    <div className={s.wrapper}>
      <div className={s.inner}>
        <SearchIcon className={s.icon} />
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className={cn(s.text, "bg-transparent outline-none w-full")}
        />
      </div>
      <div className={s.shortcutBadge}>
        <span className={s.shortcutText}>&#8984;F</span>
      </div>
    </div>
  )
}

SidebarSearch.displayName = "SidebarSearch"
