import type { ReactNode, HTMLAttributes } from "react"

/* ══════════════════════════════════════════════════════════════════════════
   Sidebar — All interfaces and types
   Presentational component: receives data via props, renders UI.
   ══════════════════════════════════════════════════════════════════════════ */

/**
 * A single sub-item inside a category (e.g. "Contratos Instalação")
 */
export interface SidebarSubItem {
  /** Unique identifier */
  id: string
  /** Display label */
  label: string
  /** Optional navigation href */
  href?: string
}

/**
 * A navigation category (e.g. "Instalações", "Faturamento")
 *
 * Can be a simple link (no items) or collapsible group (with items).
 */
export interface SidebarCategoryData {
  /** Unique identifier */
  id: string
  /** Category icon (ReactNode — accepts any icon component) */
  icon: ReactNode
  /** Display label */
  label: string
  /** Optional navigation href (for categories without sub-items) */
  href?: string
  /** Sub-items that appear when category is expanded */
  items?: SidebarSubItem[]
  /** Whether the category starts expanded */
  defaultOpen?: boolean
}

/**
 * A single option in the module dropdown
 *
 * @example
 * { id: "creditos", label: "Créditos", icon: <CreditIcon /> }
 */
export interface SidebarModuleOption {
  /** Unique identifier */
  id: string
  /** Display label */
  label: string
  /** Module icon */
  icon: ReactNode
}

/**
 * Module selector configuration
 *
 * When `options` array is provided, clicking opens a dropdown to switch modules.
 * When omitted, the selector is display-only (no dropdown).
 */
export interface SidebarModuleData {
  /** Currently selected module icon */
  icon: ReactNode
  /** Currently selected module name */
  title: string
  /** Subtitle / description */
  subtitle: string
  /** Available modules for switching (renders dropdown when provided) */
  options?: SidebarModuleOption[]
  /** Callback when a module is selected from dropdown */
  onModuleChange?: (id: string) => void
}

/**
 * A single action in the user dropdown (e.g. "Perfil", "Logout")
 *
 * @example
 * { id: "logout", label: "Sair", icon: <LogOutIcon /> }
 */
export interface SidebarUserAction {
  /** Unique identifier */
  id: string
  /** Display label */
  label: string
  /** Optional icon */
  icon?: ReactNode
  /** Visual variant — destructive renders in red (e.g. Logout) */
  variant?: "default" | "destructive"
}

/**
 * User information for the footer
 */
export interface SidebarUserData {
  /** Display name */
  name: string
  /** Email address */
  email: string
  /** Custom avatar (defaults to generic user icon) */
  avatar?: ReactNode
  /** Dropdown actions (renders dropdown when provided) */
  actions?: SidebarUserAction[]
  /** Callback when a user action is clicked */
  onAction?: (id: string) => void
}

/* ── Sub-component props ── */

/**
 * SidebarSearch props
 */
export interface SidebarSearchProps {
  /** Placeholder text */
  placeholder?: string
  /** Controlled value */
  value?: string
  /** Change callback */
  onChange?: (value: string) => void
  /** Ref forwarded to the <input> element */
  inputRef?: React.Ref<HTMLInputElement>
}

/**
 * SidebarHeader props
 */
export interface SidebarHeaderProps {
  /** Logo element (e.g. SVG icon) */
  logo: ReactNode
  /** App title shown when expanded */
  title: string
  /** Show floating toggle indicator when collapsed */
  showToggleIndicator?: boolean
}

/**
 * SidebarCategory props
 */
export interface SidebarCategoryProps extends SidebarCategoryData {
  /** Whether this category is visually active */
  active?: boolean
  /** Currently selected sub-item id */
  activeItemId?: string
  /** Callback when a sub-item is clicked */
  onItemClick?: (id: string) => void
  /** Callback when the category header is clicked */
  onCategoryClick?: () => void
}

/**
 * SidebarMenuItem props (a single sub-item row)
 */
export interface SidebarMenuItemProps {
  /** Display label */
  label: string
  /** Whether this item is selected */
  selected?: boolean
  /** Click handler */
  onClick?: () => void
}

/**
 * SidebarFooter props
 */
export interface SidebarFooterProps extends SidebarUserData {}

/**
 * SidebarModuleSelector props
 */
export interface SidebarModuleSelectorProps extends SidebarModuleData {}

/**
 * AppSidebar — Main container props
 *
 * @example
 * <AppSidebar
 *   logo={<IgreenLogo />}
 *   title="Sólis iGreen"
 *   categories={categories}
 *   user={{ name: "Sérgio", email: "sergio@igreen.com", actions: userActions }}
 *   module={{ icon, title: "Créditos", subtitle: "Módulo", options: modules }}
 *   activeItemId="central"
 *   onItemClick={(id) => setActiveItem(id)}
 * />
 */
export interface AppSidebarProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  /** Header logo icon */
  logo: ReactNode
  /** App title shown when expanded */
  title: string
  /** Module selector config (with optional dropdown options) */
  module?: SidebarModuleData
  /** Show search input */
  showSearch?: boolean
  /** Placeholder text for the search input */
  searchPlaceholder?: string
  /** Controlled search value */
  searchValue?: string
  /** Callback when search value changes */
  onSearchChange?: (value: string) => void
  /** Ref forwarded to the search <input> element */
  searchRef?: React.Ref<HTMLInputElement>
  /** Navigation categories array */
  categories: SidebarCategoryData[]
  /** Currently selected sub-item id (global across all categories) */
  activeItemId?: string
  /** Callback when any sub-item is clicked */
  onItemClick?: (id: string) => void
  /** User info for footer (with optional dropdown actions) */
  user: SidebarUserData
  /** Default expanded state */
  defaultExpanded?: boolean
  /** Controlled expanded state */
  expanded?: boolean
  /** Callback on expanded change */
  onExpandedChange?: (expanded: boolean) => void
  /** Show floating toggle indicator when collapsed (default: false) */
  showToggleIndicator?: boolean
}
