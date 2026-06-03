"use client"

import { useState } from "react"
import { FormField } from "@/components/custom/FormField"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function InputPage() {
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur px-6 py-4">
          <div className="flex items-center justify-between max-w-5xl mx-auto">
            <div>
              <h1 className="text-xl font-bold tracking-tight">
                Input & FormField — Todas as variações
              </h1>
              <p className="text-sm text-muted-foreground">
                Figma node 260:20037 | 5 estados: enabled, filled, focus, disabled, error
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setDark(!dark)}>
                {dark ? "Light" : "Dark"}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
                Voltar
              </Button>
            </div>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-12">

          {/* Raw Input */}
          <section className="flex flex-col gap-4">
            <div>
              <h2 className="text-lg font-semibold">Input (shadcn adaptado)</h2>
              <p className="text-sm text-muted-foreground">
                Componente base — h-11 (44px), rounded-lg, shadow-sm, focus green ring
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4 max-w-sm">
              <Input placeholder="Placeholder" />
              <Input defaultValue="Valor preenchido" />
              <Input disabled placeholder="Disabled" />
              <Input aria-invalid placeholder="Com erro" />
            </div>
          </section>

          {/* FormField — All states (Figma) */}
          <section className="flex flex-col gap-4">
            <div>
              <h2 className="text-lg font-semibold">FormField — 5 estados do Figma</h2>
              <p className="text-sm text-muted-foreground">
                Componente composto: Label + Input + Helper Text. Estados automáticos via props.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Enabled (empty) */}
                <FormField
                  label="Label"
                  placeholder="Valor"
                  helperText="Helper Text"
                />

                {/* Filled */}
                <FormField
                  label="Label"
                  defaultValue="Valor"
                  helperText="Helper Text"
                />

                {/* Focus — user clicks to see */}
                <FormField
                  label="Label"
                  defaultValue="Valor"
                  helperText="Helper Text (clique para ver focus)"
                />

                {/* Disabled */}
                <FormField
                  label="Label"
                  defaultValue="Valor"
                  helperText="Helper Text"
                  disabled
                />

                {/* Error */}
                <FormField
                  label="Label"
                  defaultValue="Valor"
                  error="Helper Text"
                />
              </div>
            </div>
          </section>

          {/* Real-world examples */}
          <section className="flex flex-col gap-4">
            <div>
              <h2 className="text-lg font-semibold">Exemplos reais</h2>
              <p className="text-sm text-muted-foreground">
                Formulários como nas telas do Sólis iGreen
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                <FormField
                  label="Unidade Consumidora"
                  defaultValue="1132834901821"
                  helperText="Código da UC"
                />
                <FormField
                  label="Mês de referência"
                  defaultValue="03/2026"
                />
                <FormField
                  label="Data de vencimento"
                  placeholder="00/00/0000"
                  type="text"
                />
                <FormField
                  label="Data de Emissão"
                  placeholder="00/00/0000"
                  type="text"
                />
                <FormField
                  label="Consumo (Kwh)"
                  placeholder="0.00"
                  type="number"
                />
                <FormField
                  label="CNPJ"
                  defaultValue="00.000.000/0001-00"
                  error="CNPJ inválido. Verifique os dígitos."
                />
              </div>
            </div>
          </section>

          {/* Without label / without helper */}
          <section className="flex flex-col gap-4">
            <div>
              <h2 className="text-lg font-semibold">Variações de composição</h2>
              <p className="text-sm text-muted-foreground">
                Label e helper text são opcionais
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
                <FormField
                  label="Com label e helper"
                  placeholder="Valor"
                  helperText="Texto auxiliar"
                />
                <FormField
                  label="Só label"
                  placeholder="Valor"
                />
                <FormField
                  placeholder="Só input (sem label)"
                  showInfoIcon={false}
                />
                <FormField
                  label="Sem info icon"
                  placeholder="Valor"
                  showInfoIcon={false}
                  helperText="showInfoIcon={false}"
                />
              </div>
            </div>
          </section>

          {/* Mapping */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Mapeamento Figma → Código</h2>
            <div className="rounded-xl border border-border p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left font-medium text-muted-foreground p-2">Estado</th>
                      <th className="text-left font-medium text-muted-foreground p-2">Input</th>
                      <th className="text-left font-medium text-muted-foreground p-2">Label</th>
                      <th className="text-left font-medium text-muted-foreground p-2">Helper</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs font-mono">
                    {[
                      ["enabled", "bg-background border-input shadow-sm", "text-muted-foreground", "text-muted-foreground/60"],
                      ["filled", "text-foreground (mesmo visual)", "text-muted-foreground", "text-muted-foreground/60"],
                      ["focus", "border-primary ring-primary/20", "text-muted-foreground", "text-muted-foreground/60"],
                      ["disabled", "bg-neutral-100 opacity-70", "text-muted-foreground", "text-muted-foreground/60"],
                      ["error", "border-destructive ring-destructive/20", "text-destructive", "text-destructive"],
                    ].map(([state, input, label, helper]) => (
                      <tr key={state} className="border-b border-border">
                        <td className="p-2 font-sans font-semibold text-foreground">{state}</td>
                        <td className="p-2 text-muted-foreground">{input}</td>
                        <td className="p-2 text-muted-foreground">{label}</td>
                        <td className="p-2 text-muted-foreground">{helper}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Usage */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Uso</h2>
            <div className="rounded-xl border border-border p-6">
              <pre className="text-xs font-mono leading-relaxed text-muted-foreground overflow-x-auto">
{`import { FormField } from "@/components/custom/FormField"

{/* Básico */}
<FormField
  label="Email"
  placeholder="nome@empresa.com"
  helperText="Será usado para login"
/>

{/* Com erro — label e helper ficam vermelhos automaticamente */}
<FormField
  label="CNPJ"
  value={cnpj}
  onChange={(e) => setCnpj(e.target.value)}
  error={cnpjError}  // string → ativa estado error
/>

{/* Disabled */}
<FormField label="Campo" disabled defaultValue="Bloqueado" />

{/* Sem label */}
<FormField placeholder="Buscar..." showInfoIcon={false} />

{/* Com ref */}
const inputRef = useRef<HTMLInputElement>(null)
<FormField label="Nome" inputRef={inputRef} />`}
              </pre>
            </div>
          </section>

          {/* Props */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Props</h2>
            <div className="rounded-xl border border-border p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left font-medium text-muted-foreground p-2">Prop</th>
                      <th className="text-left font-medium text-muted-foreground p-2">Tipo</th>
                      <th className="text-left font-medium text-muted-foreground p-2">Default</th>
                      <th className="text-left font-medium text-muted-foreground p-2">Descrição</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    {[
                      ["label", "string", "undefined", "Texto do label acima do input"],
                      ["showInfoIcon", "boolean", "true", "Ícone ⓘ ao lado do label"],
                      ["helperText", "string", "undefined", "Texto auxiliar abaixo do input"],
                      ["error", "string", "undefined", "Mensagem de erro (ativa estado red)"],
                      ["inputRef", "Ref<HTMLInputElement>", "undefined", "Ref do <input> nativo"],
                      ["endAdornment", "ReactNode", "undefined", "Elemento à direita dentro do input"],
                      ["wrapperClassName", "string", "undefined", "Classes do container externo"],
                      ["...inputProps", "InputHTMLAttributes", "—", "Todos os props nativos do <input>"],
                    ].map(([prop, type, def, desc]) => (
                      <tr key={prop} className="border-b border-border">
                        <td className="p-2 font-mono text-foreground">{prop}</td>
                        <td className="p-2 font-mono text-muted-foreground">{type}</td>
                        <td className="p-2 font-mono text-muted-foreground">{def}</td>
                        <td className="p-2 text-muted-foreground">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Architecture */}
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Arquitetura</h2>
            <div className="rounded-xl border border-border p-6">
              <pre className="text-xs text-muted-foreground font-mono leading-relaxed">
{`Estratégia: Rota C (composição shadcn + custom)

shadcn Input (adaptado)     → h-11, rounded-lg, shadow-sm, focus green ring
  ↓ consumido por
custom FormField            → compõe Label + Input + HelperText/Error

FormField/
├── index.ts                # Barrel export
├── FormField.tsx           # View (compõe shadcn Input + label + helper)
├── FormField.types.ts      # FormFieldProps interface
└── FormField.styles.ts     # Style objects (label, helper, icons por estado)`}
              </pre>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
