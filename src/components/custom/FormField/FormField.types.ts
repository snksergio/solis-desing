import type { ReactNode, InputHTMLAttributes } from "react"

/* ══════════════════════════════════════════════════════════════════════════
   FormField — All interfaces
   Composicional: shadcn Input + Label + helper/error text
   ══════════════════════════════════════════════════════════════════════════ */

/**
 * FormField — A composed input field with label, helper text, and error state.
 *
 * Wraps shadcn Input with Figma's visual structure:
 * Label (+ optional info icon) → Input → Helper text / Error message
 *
 * @example
 * <FormField
 *   label="Email"
 *   placeholder="nome@empresa.com"
 *   helperText="Será usado para login"
 * />
 *
 * @example
 * <FormField
 *   label="CNPJ"
 *   error="CNPJ inválido"
 *   value={cnpj}
 *   onChange={(e) => setCnpj(e.target.value)}
 * />
 */
export interface FormFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Label text displayed above the input */
  label?: string
  /** Show info icon next to label */
  showInfoIcon?: boolean
  /** Helper text displayed below the input (hidden when error is present) */
  helperText?: string
  /** Error message — when set, label and helper turn red, input gets red border */
  error?: string
  /** Ref forwarded to the native <input> element */
  inputRef?: React.Ref<HTMLInputElement>
  /** Additional icon or element on the right side of the input */
  endAdornment?: ReactNode
  /** Wrapper className for the outer container */
  wrapperClassName?: string
}
