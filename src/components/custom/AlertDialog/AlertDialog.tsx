"use client"

import { cn } from "@/lib/utils"
import {
  AlertDialog as ShadcnAlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog"
import { styles } from "./AlertDialog.styles"
import type { AlertDialogProps, AlertDialogStatus } from "./AlertDialog.types"

/* ── Close icon (internal) ── */

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

/* ── Icon bg color per status ── */

function getIconBg(status: AlertDialogStatus) {
  return styles.iconContainer[status]
}

/**
 * AlertDialog — Composed dialog with icon, title, description, cancel/confirm.
 *
 * Consumes shadcn AlertDialog internally. Applies Figma visual structure:
 * - Centered icon in colored container
 * - Title + description
 * - Footer with bg-neutral-100, border-top, cancel + confirm buttons
 * - Status determines icon bg color and confirm button variant
 */
export function AlertDialog({
  open,
  onOpenChange,
  status = "info",
  icon,
  title,
  description,
  cancelLabel = "Cancelar",
  confirmLabel = "Confirmar",
  onCancel,
  onConfirm,
  showClose = true,
  trigger,
  className,
}: AlertDialogProps) {
  const isDestructive = status === "destructive"

  return (
    <ShadcnAlertDialog open={open} onOpenChange={onOpenChange}>
      {trigger && <AlertDialogTrigger>{trigger}</AlertDialogTrigger>}

      <AlertDialogPortal>
        <AlertDialogOverlay className={styles.overlay} />
        <AlertDialogContent className={cn(styles.content, className)}>
          {/* Body */}
          <div className={styles.body}>
            {/* Icon */}
            {icon && (
              <div className={cn(styles.iconContainer.base, getIconBg(status))}>
                <span className={styles.icon}>{icon}</span>
              </div>
            )}

            {/* Text */}
            <div className={styles.textContainer}>
              <AlertDialogTitle className={styles.title}>
                {title}
              </AlertDialogTitle>
              {description && (
                <AlertDialogDescription className={styles.description}>
                  {description}
                </AlertDialogDescription>
              )}
            </div>

            {/* Close button */}
            {showClose && (
              <AlertDialogCancel
                variant="ghost"
                size="icon"
                className={styles.closeButton}
                onClick={onCancel}
              >
                <CloseIcon />
              </AlertDialogCancel>
            )}
          </div>

          {/* Footer */}
          <div className={styles.footer}>
            <AlertDialogCancel
              variant="outline"
              className={styles.footerButton}
              onClick={onCancel}
            >
              {cancelLabel}
            </AlertDialogCancel>
            <AlertDialogAction
              variant={isDestructive ? "destructive" : "default"}
              className={styles.footerButton}
              onClick={onConfirm}
            >
              {confirmLabel}
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialogPortal>
    </ShadcnAlertDialog>
  )
}

AlertDialog.displayName = "AlertDialog"
