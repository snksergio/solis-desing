"use client"

import { cn } from "@/lib/utils"
import { styles } from "./TableHeader.styles"
import type { TableHeaderProps } from "./TableHeader.types"

/* ── Internal icons ── */

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}

function PlusCircleIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  )
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function MoreVerticalIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  )
}

/**
 * TableHeader — Toolbar + filter bar above data tables.
 * Presentational: receives data via props, renders UI, fires callbacks.
 */
export function TableHeader({
  sections,
  activeSectionId,
  onSectionChange,
  onAddSection,
  actions,
  onActionClick,
  exportConfig,
  showMoreOptions = false,
  onMoreOptions,
  filters,
  onFilterClick,
  showAddFilter = true,
  onAddFilter,
  className,
  ...props
}: TableHeaderProps) {
  const s = styles
  const hasToolbar = sections || actions || exportConfig
  const hasFilters = filters && filters.length > 0

  return (
    <div className={cn(s.container, className)} {...props}>
      {/* ── Toolbar ── */}
      {hasToolbar && (
        <div className={s.toolbar}>
          {/* Left: section tabs */}
          <div className={s.toolbarLeft}>
            {sections?.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionChange?.(section.id)}
                className={
                  section.id === activeSectionId
                    ? s.sectionTab.active
                    : s.sectionTab.inactive
                }
              >
                <span className={s.sectionIcon}>{section.icon}</span>
                {section.label}
              </button>
            ))}

            {onAddSection && (
              <>
                <div className={s.divider} />
                <button onClick={onAddSection} className={s.addSectionBtn}>
                  <PlusIcon />
                </button>
              </>
            )}
          </div>

          {/* Right: actions + export */}
          <div className={s.toolbarRight}>
            {/* Action buttons */}
            {actions && actions.length > 0 && (
              <>
                <div className={s.actionGroup}>
                  {actions.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => onActionClick?.(action.id)}
                      className={s.actionBtn}
                      aria-label={action.label}
                    >
                      <span className="relative">
                        {action.icon}
                        {action.dot && <span className={s.actionDot} />}
                      </span>
                    </button>
                  ))}
                </div>

                {exportConfig && <div className={s.divider} />}
              </>
            )}

            {/* Export button */}
            {exportConfig && (
              <button onClick={exportConfig.onExport} className={s.exportBtn}>
                <div className={s.exportBtnContent}>
                  {exportConfig.icon && (
                    <span className={s.exportBtnIcon}>{exportConfig.icon}</span>
                  )}
                  <span className={s.exportBtnLabel}>
                    {exportConfig.label || "Exportar"}
                  </span>
                </div>
                {exportConfig.showDropdown !== false && (
                  <>
                    <div className={s.exportBtnDivider} />
                    <div className={s.exportBtnChevron}>
                      <ChevronDownIcon className="size-[18px] text-neutral-500" />
                    </div>
                  </>
                )}
              </button>
            )}

            {/* More options */}
            {showMoreOptions && (
              <button onClick={onMoreOptions} className={s.moreOptionsBtn}>
                <MoreVerticalIcon />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Separator */}
      {hasToolbar && hasFilters && <div className={s.separator} />}

      {/* ── Filter bar ── */}
      {hasFilters && (
        <div className={s.filterBar}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterClick?.(filter.id)}
              className={s.filterChip}
            >
              <span className={s.filterChipIcon}>
                {filter.icon || <PlusCircleIcon />}
              </span>
              {filter.label}
            </button>
          ))}

          {showAddFilter && (
            <button onClick={onAddFilter} className={s.addFilterBtn}>
              <PlusIcon className="size-[18px]" />
            </button>
          )}
        </div>
      )}
    </div>
  )
}

TableHeader.displayName = "TableHeader"
