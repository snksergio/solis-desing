import type { ReactNode, HTMLAttributes } from "react"

/* ══════════════════════════════════════════════════════════════════════════
   KpiRow — All interfaces
   Presentational: receives array of KPIs, renders a responsive row.
   ══════════════════════════════════════════════════════════════════════════ */

/**
 * Icon background color variant — maps to Figma icon container colors.
 *
 * - neutral: #f6f6f6 (gray — default)
 * - success: #ebfbf1 (green)
 * - warning: amber subtle
 * - critical: #fbe7e7 (red)
 * - info: blue subtle
 */
export type KpiVariant = "neutral" | "success" | "warning" | "critical" | "info"

/**
 * A single KPI data item.
 *
 * @example
 * { icon: <HomeIcon />, label: "Total de instalações", value: "97.026" }
 */
export interface KpiItem {
  /** Icon displayed in the colored container */
  icon: ReactNode
  /** KPI label/description (e.g. "Total de instalações") */
  label: string
  /** KPI value (e.g. "97.026", "143,04") */
  value: string
  /** Icon background color variant */
  variant?: KpiVariant
}

/**
 * KpiRow — A responsive row of KPI cards with icons, labels, and values.
 *
 * Desktop: horizontal row with vertical dividers between items.
 * Tablet: 2-column grid.
 * Mobile: single column stack.
 *
 * @example
 * <KpiRow
 *   items={[
 *     { icon: <HomeIcon />, label: "Instalações", value: "97.026" },
 *     { icon: <DollarIcon />, label: "Valor injetado", value: "143,04", variant: "success" },
 *   ]}
 * />
 */
export interface KpiRowProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /** Array of KPI items to render */
  items: KpiItem[]
}
