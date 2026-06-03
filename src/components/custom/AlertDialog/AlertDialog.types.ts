import type { ReactNode } from "react"

/* ══════════════════════════════════════════════════════════════════════════
   AlertDialog — All interfaces
   Presentational: wraps shadcn AlertDialog with Figma visual structure.
   ══════════════════════════════════════════════════════════════════════════ */

/**
 * Visual status of the dialog — determines icon background color
 * and confirm button variant.
 *
 * - destructive: red icon bg, red confirm button (delete/remove actions)
 * - success: green icon bg, green confirm button (positive actions)
 * - info: gray icon bg, green confirm button (informational)
 */
export type AlertDialogStatus = "destructive" | "success" | "info"

/**
 * AlertDialog — A composed alert dialog with icon, title, description,
 * cancel/confirm actions following the Figma layout.
 *
 * @example
 * <AlertDialog
 *   open={open}
 *   onOpenChange={setOpen}
 *   status="destructive"
 *   icon={<TrashIcon />}
 *   title="Excluir Tarifa Fixa"
 *   description="Esta ação não poderá ser desfeita após a confirmação."
 *   cancelLabel="Cancelar"
 *   confirmLabel="Confirmar"
 *   onCancel={() => setOpen(false)}
 *   onConfirm={handleDelete}
 * />
 */
export interface AlertDialogProps {
  /** Whether the dialog is open (controlled) */
  open?: boolean
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void
  /** Visual status — determines icon bg color and confirm button style */
  status?: AlertDialogStatus
  /** Icon displayed in the colored container (ReactNode) */
  icon?: ReactNode
  /** Dialog title */
  title: string
  /** Dialog description/body text */
  description?: string
  /** Cancel button label */
  cancelLabel?: string
  /** Confirm button label */
  confirmLabel?: string
  /** Callback when cancel is clicked */
  onCancel?: () => void
  /** Callback when confirm is clicked */
  onConfirm?: () => void
  /** Show close (X) button in top-right */
  showClose?: boolean
  /** Trigger element (if not using controlled open) */
  trigger?: ReactNode
  /** Additional className for the dialog content */
  className?: string
}
