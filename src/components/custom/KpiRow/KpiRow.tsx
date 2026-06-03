"use client"

import { cn } from "@/lib/utils"
import { styles } from "./KpiRow.styles"
import type { KpiRowProps, KpiItem, KpiVariant } from "./KpiRow.types"
import { Fragment } from "react"

/* ── Single KPI card (internal) ── */

function KpiCard({ icon, label, value, variant = "neutral" }: KpiItem) {
  const s = styles

  return (
    <div className={s.item}>
      <div className={cn(s.iconContainer.base, s.iconContainer[variant])}>
        <span className={s.icon}>{icon}</span>
      </div>
      <div className={s.textContainer}>
        <span className={s.label}>{label}</span>
        <span className={s.value}>{value}</span>
      </div>
    </div>
  )
}

/**
 * KpiRow — Responsive row of KPI cards.
 *
 * Desktop: horizontal with vertical dividers.
 * Tablet: 2-column grid.
 * Mobile: single column stack.
 */
export function KpiRow({ items, className, ...props }: KpiRowProps) {
  return (
    <div className={cn(styles.container, className)} {...props}>
      <div className={styles.grid}>
        {items.map((item, i) => (
          <Fragment key={item.label + i}>
            {/* Divider between items (desktop only) */}
            {i > 0 && <div className={styles.divider} />}
            <KpiCard {...item} />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

KpiRow.displayName = "KpiRow"
