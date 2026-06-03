import type { ReactNode, HTMLAttributes } from "react"

/* ══════════════════════════════════════════════════════════════════════════
   TableHeader — All interfaces
   Toolbar + filter bar above data tables. Presentational.
   ══════════════════════════════════════════════════════════════════════════ */

/**
 * A section/tab in the toolbar (e.g. "Instalações", "Faturas")
 */
export interface TableSection {
  /** Unique identifier */
  id: string
  /** Section label */
  label: string
  /** Section icon */
  icon: ReactNode
}

/**
 * An action button in the toolbar right side (search, filter, settings, etc.)
 */
export interface TableAction {
  /** Unique identifier */
  id: string
  /** Icon */
  icon: ReactNode
  /** Tooltip/aria-label */
  label: string
  /** Show notification dot */
  dot?: boolean
}

/**
 * A filter chip in the filter bar
 */
export interface TableFilter {
  /** Unique identifier */
  id: string
  /** Filter label (e.g. "Status da UC", "Titular") */
  label: string
  /** Optional icon (defaults to plus-circle) */
  icon?: ReactNode
}

/**
 * Export button config
 */
export interface TableExportConfig {
  /** Export button label */
  label?: string
  /** Export icon */
  icon?: ReactNode
  /** Callback when export is clicked */
  onExport?: () => void
  /** Show dropdown chevron */
  showDropdown?: boolean
}

/**
 * TableHeader — Toolbar + filter bar for data tables.
 *
 * @example
 * <TableHeader
 *   sections={[{ id: "inst", label: "Instalações", icon: <GridIcon /> }]}
 *   activeSectionId="inst"
 *   onSectionChange={setSection}
 *   actions={[{ id: "search", icon: <SearchIcon />, label: "Buscar" }]}
 *   filters={[{ id: "id", label: "ID" }, { id: "titular", label: "Titular" }]}
 *   onFilterClick={(id) => openFilter(id)}
 *   onAddFilter={() => openFilterPicker()}
 *   exportConfig={{ label: "Exportar", onExport: handleExport }}
 * />
 */
export interface TableHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /** Section tabs (left side of toolbar) */
  sections?: TableSection[]
  /** Active section id */
  activeSectionId?: string
  /** Callback when section tab is clicked */
  onSectionChange?: (id: string) => void
  /** Callback when add section (+) is clicked */
  onAddSection?: () => void
  /** Action buttons (right side of toolbar, before export) */
  actions?: TableAction[]
  /** Callback when action button is clicked */
  onActionClick?: (id: string) => void
  /** Export button config */
  exportConfig?: TableExportConfig
  /** More options button (3 dots) */
  showMoreOptions?: boolean
  /** Callback when more options is clicked */
  onMoreOptions?: () => void
  /** Filter chips below toolbar */
  filters?: TableFilter[]
  /** Callback when a filter chip is clicked */
  onFilterClick?: (id: string) => void
  /** Show add filter (+) button */
  showAddFilter?: boolean
  /** Callback when add filter is clicked */
  onAddFilter?: () => void
}
