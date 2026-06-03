"use client"

import { useMemo } from "react"
import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SidebarContext, useSidebarState } from "./AppSidebar.hooks"
import { sidebarVariants, styles } from "./AppSidebar.styles"
import { SidebarHeader } from "./SidebarHeader"
import { SidebarModuleSelector } from "./SidebarModuleSelector"
import { SidebarSearch } from "./SidebarSearch"
import { SidebarCategory } from "./SidebarCategory"
import { SidebarFooter } from "./SidebarFooter"
import type { AppSidebarProps } from "./AppSidebar.types"

/* ══════════════════════════════════════════════════════════════════════════
   AppSidebar — Container (view only, no business logic)

   Receives categories array + activeItemId + callbacks via props.
   Composes sub-components. Zero fetch, zero stores.

   Behaviors:
   - Toggle button locks/unlocks expanded state
   - When collapsed, hover over sidebar temporarily expands it
   - Only 1 category open at a time (accordion)
   ══════════════════════════════════════════════════════════════════════════ */

export function AppSidebar({
  logo,
  title,
  module,
  showSearch = true,
  searchPlaceholder,
  searchValue,
  onSearchChange,
  searchRef,
  categories,
  activeItemId,
  onItemClick,
  user,
  defaultExpanded = true,
  expanded: controlledExpanded,
  onExpandedChange,
  showToggleIndicator = false,
  className,
  ...props
}: AppSidebarProps) {
  const {
    expanded,
    isHoverExpand,
    toggle,
    onMouseEnter,
    onMouseLeave,
    openCategoryId,
    setOpenCategoryId,
  } = useSidebarState(defaultExpanded, controlledExpanded, onExpandedChange)

  // Determine which category should be open — from accordion state or from activeItemId
  const resolvedOpenCategoryId =
    openCategoryId ??
    categories.find((cat) =>
      cat.items?.some((item) => item.id === activeItemId)
    )?.id ??
    null

  const contextValue = useMemo(
    () => ({
      expanded,
      isHoverExpand,
      toggle,
      openCategoryId: resolvedOpenCategoryId,
      setOpenCategoryId,
    }),
    [expanded, isHoverExpand, toggle, resolvedOpenCategoryId, setOpenCategoryId]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delay={0}>
        <aside
          aria-label="Navegação lateral"
          className={cn(sidebarVariants({ expanded }), className)}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          {...props}
        >
          {/* Header */}
          <SidebarHeader logo={logo} title={title} showToggleIndicator={showToggleIndicator} />

          {/* Divider */}
          <div className={styles.divider} />

          {/* Module Selector + Search */}
          {expanded && (module || showSearch) && (
            <div className={cn(styles.sectionPadding, styles.textFadeIn)}>
              {module && <SidebarModuleSelector {...module} />}
              {showSearch && (
                <SidebarSearch
                  placeholder={searchPlaceholder}
                  value={searchValue}
                  onChange={onSearchChange}
                  inputRef={searchRef}
                />
              )}
            </div>
          )}

          {/* Divider */}
          {expanded && <div className={styles.divider} />}

          {/* Navigation */}
          <nav className={cn(
            styles.navContainer,
            expanded ? styles.navContainerExpanded : styles.navContainerCollapsed
          )}>
            <div className={styles.navList}>
              {categories.map((cat) => (
                <SidebarCategory
                  key={cat.id}
                  {...cat}
                  activeItemId={activeItemId}
                  onItemClick={onItemClick}
                />
              ))}
            </div>
          </nav>

          {/* User Footer */}
          <SidebarFooter {...user} />
        </aside>
      </TooltipProvider>
    </SidebarContext.Provider>
  )
}

AppSidebar.displayName = "AppSidebar"
