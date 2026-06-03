import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react"

/* ══════════════════════════════════════════════════════════════════════════
   AppSidebar — UI-only hooks (no business logic, no fetch, no stores)
   ══════════════════════════════════════════════════════════════════════════ */

// ── Sidebar expand/collapse context ──

interface SidebarContextValue {
  expanded: boolean
  /** Whether expanded state is from hover (temporary) vs toggle (locked) */
  isHoverExpand: boolean
  toggle: () => void
  /** Open category id for accordion behavior (only 1 open at a time) */
  openCategoryId: string | null
  setOpenCategoryId: (id: string | null) => void
}

export const SidebarContext = createContext<SidebarContextValue>({
  expanded: true,
  isHoverExpand: false,
  toggle: () => {},
  openCategoryId: null,
  setOpenCategoryId: () => {},
})

export function useSidebar() {
  return useContext(SidebarContext)
}

// ── Controlled/uncontrolled expanded state with hover support ──

export function useSidebarState(
  defaultExpanded: boolean,
  controlledExpanded?: boolean,
  onExpandedChange?: (v: boolean) => void
) {
  const [internal, setInternal] = useState(defaultExpanded)
  const isControlled = controlledExpanded !== undefined
  const expanded = isControlled ? controlledExpanded : internal

  // Track whether the sidebar is "locked" open (via toggle) or "hover" open
  const [lockedOpen, setLockedOpen] = useState(defaultExpanded)
  const [hoverOpen, setHoverOpen] = useState(false)
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const setExpanded = useCallback(
    (v: boolean) => {
      if (!isControlled) setInternal(v)
      onExpandedChange?.(v)
    },
    [isControlled, onExpandedChange]
  )

  // Toggle button: locks/unlocks the sidebar
  const toggle = useCallback(() => {
    const next = !lockedOpen
    setLockedOpen(next)
    setHoverOpen(false)
    setExpanded(next)
  }, [lockedOpen, setExpanded])

  // Hover enter: if sidebar is locked closed, expand temporarily
  const onMouseEnter = useCallback(() => {
    if (lockedOpen) return // already open, no hover needed
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    setHoverOpen(true)
    setExpanded(true)
  }, [lockedOpen, setExpanded])

  // Hover leave: if hover-expanded, collapse after short delay
  const onMouseLeave = useCallback(() => {
    if (lockedOpen) return // locked open, don't collapse
    hoverTimeoutRef.current = setTimeout(() => {
      setHoverOpen(false)
      setExpanded(false)
    }, 200)
  }, [lockedOpen, setExpanded])

  // Cleanup hover timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    }
  }, [])

  const isHoverExpand = hoverOpen && !lockedOpen

  // Accordion state: only 1 category open at a time
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null)

  return {
    expanded,
    isHoverExpand,
    toggle,
    onMouseEnter,
    onMouseLeave,
    openCategoryId,
    setOpenCategoryId,
  }
}

