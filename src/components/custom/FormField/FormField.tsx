"use client"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { styles } from "./FormField.styles"
import type { FormFieldProps } from "./FormField.types"

/* ── Info icon (internal) ── */

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}

/**
 * FormField — Composed input with label, helper text, and error state.
 *
 * Consumes shadcn Input internally. Automatically applies:
 * - Error: red label + red border + red ring + red helper text
 * - Disabled: gray bg + reduced opacity
 * - Focus: green border + green ring (via shadcn Input)
 */
export function FormField({
  label,
  showInfoIcon = true,
  helperText,
  error,
  inputRef,
  endAdornment,
  wrapperClassName,
  className,
  disabled,
  ...inputProps
}: FormFieldProps) {
  const hasError = !!error
  const s = styles

  return (
    <div className={cn(s.wrapper, wrapperClassName)}>
      {/* Label row */}
      {label && (
        <div className={s.labelRow}>
          <span className={hasError ? s.label.error : s.label.default}>
            {label}
          </span>
          {showInfoIcon && (
            <InfoIcon
              className={hasError ? s.infoIcon.error : s.infoIcon.default}
            />
          )}
        </div>
      )}

      {/* Input */}
      {endAdornment ? (
        <div className="relative">
          <Input
            ref={inputRef}
            disabled={disabled}
            aria-invalid={hasError || undefined}
            className={cn("pr-10", className)}
            {...inputProps}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {endAdornment}
          </div>
        </div>
      ) : (
        <Input
          ref={inputRef}
          disabled={disabled}
          aria-invalid={hasError || undefined}
          className={className}
          {...inputProps}
        />
      )}

      {/* Helper text / Error message */}
      {(helperText || error) && (
        <span className={hasError ? s.helperText.error : s.helperText.default}>
          {error || helperText}
        </span>
      )}
    </div>
  )
}

FormField.displayName = "FormField"
