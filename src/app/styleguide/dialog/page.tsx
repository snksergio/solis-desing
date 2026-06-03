"use client"

import { useState } from "react"
import { AlertDialog } from "@/components/custom/AlertDialog"
import { Button } from "@/components/ui/button"

/* ── Demo icons ── */

function TrashIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}

export default function DialogPage() {
  const [destructiveOpen, setDestructiveOpen] = useState(false)
  const [successOpen, setSuccessOpen] = useState(false)
  const [infoOpen, setInfoOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur px-6 py-4">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              AlertDialog — Todas as variações
            </h1>
            <p className="text-sm text-muted-foreground">
              Figma node 392:722 | 3 status: destructive, success, info
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
            Voltar
          </Button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-12">

        {/* Interactive demos */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Demo interativo</h2>
          <p className="text-sm text-muted-foreground">
            Clique nos botões para abrir cada variante.
          </p>
          <div className="rounded-xl border border-border bg-card p-6 flex flex-wrap gap-4">
            <Button variant="destructive" onClick={() => setDestructiveOpen(true)}>
              Excluir (destructive)
            </Button>
            <Button onClick={() => setSuccessOpen(true)}>
              Confirmar (success)
            </Button>
            <Button variant="outline" onClick={() => setInfoOpen(true)}>
              Informação (info)
            </Button>
          </div>

          {/* Destructive dialog */}
          <AlertDialog
            open={destructiveOpen}
            onOpenChange={setDestructiveOpen}
            status="destructive"
            icon={<TrashIcon />}
            title="Excluir Tarifa Fixa"
            description="Esta ação não poderá ser desfeita após a confirmação."
            confirmLabel="Confirmar"
            onCancel={() => setDestructiveOpen(false)}
            onConfirm={() => {
              setDestructiveOpen(false)
              alert("Excluído!")
            }}
          />

          {/* Success dialog */}
          <AlertDialog
            open={successOpen}
            onOpenChange={setSuccessOpen}
            status="success"
            icon={<CheckIcon />}
            title="Salvar Alterações"
            description="As alterações serão aplicadas imediatamente."
            confirmLabel="Confirmar"
            onCancel={() => setSuccessOpen(false)}
            onConfirm={() => {
              setSuccessOpen(false)
              alert("Salvo!")
            }}
          />

          {/* Info dialog */}
          <AlertDialog
            open={infoOpen}
            onOpenChange={setInfoOpen}
            status="info"
            icon={<InfoIcon />}
            title="Exportar Relatório"
            description="O relatório será gerado e enviado para seu email."
            confirmLabel="Confirmar"
            onCancel={() => setInfoOpen(false)}
            onConfirm={() => {
              setInfoOpen(false)
              alert("Exportado!")
            }}
          />
        </section>

        {/* Mapping */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Mapeamento Figma → Código</h2>
          <div className="rounded-xl border border-border p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left font-medium text-muted-foreground p-2">Propriedade</th>
                    <th className="text-left font-medium text-muted-foreground p-2">Figma</th>
                    <th className="text-left font-medium text-muted-foreground p-2">Código</th>
                  </tr>
                </thead>
                <tbody className="text-xs font-mono">
                  {[
                    ["Container", "w 402px, r 20px, border #ececec", "max-w-[402px] rounded-xl border-border"],
                    ["Shadow", "multi-layer", "shadow (Figma exact)"],
                    ["Body padding", "32px", "p-8"],
                    ["Icon container", "59px, rounded 10px", "size-[59px] rounded-lg"],
                    ["Icon bg (destructive)", "#fbe7e7", "bg-critical-50"],
                    ["Icon bg (success)", "#ebfbf1", "bg-brand-50"],
                    ["Icon bg (info)", "#f6f6f6", "bg-neutral-100"],
                    ["Title", "Inter SemiBold 18px black", "text-lg font-semibold"],
                    ["Description", "Inter Medium 14px #777c82", "text-sm text-muted-foreground"],
                    ["Footer bg", "#f6f6f6", "bg-neutral-100"],
                    ["Footer padding", "px 32, py 18", "px-8 py-[18px]"],
                    ["Cancel button", "outline (shadcn)", "variant='outline' flex-1"],
                    ["Confirm (destructive)", "filled red", "variant='destructive' flex-1"],
                    ["Confirm (success/info)", "filled green", "variant='default' flex-1"],
                    ["Close btn", "38px, top-right", "size-[38px] rounded-lg"],
                  ].map(([prop, figma, code]) => (
                    <tr key={prop} className="border-b border-border">
                      <td className="p-2 font-sans text-foreground">{prop}</td>
                      <td className="p-2 text-muted-foreground">{figma}</td>
                      <td className="p-2 text-muted-foreground">{code}</td>
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
{`import { AlertDialog } from "@/components/custom/AlertDialog"

{/* Destructive — delete action */}
<AlertDialog
  open={open}
  onOpenChange={setOpen}
  status="destructive"
  icon={<TrashIcon />}
  title="Excluir Tarifa Fixa"
  description="Esta ação não poderá ser desfeita."
  onCancel={() => setOpen(false)}
  onConfirm={handleDelete}
/>

{/* Success — save/confirm action */}
<AlertDialog
  status="success"
  icon={<CheckIcon />}
  title="Salvar Alterações"
  description="As alterações serão aplicadas."
  onConfirm={handleSave}
/>

{/* Info — informational */}
<AlertDialog
  status="info"
  icon={<InfoIcon />}
  title="Exportar Relatório"
/>`}
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
                    ["open", "boolean", "undefined", "Estado controlado"],
                    ["onOpenChange", "(open: boolean) => void", "undefined", "Callback ao mudar estado"],
                    ["status", '"destructive" | "success" | "info"', '"info"', "Determina cor do ícone e botão confirm"],
                    ["icon", "ReactNode", "undefined", "Ícone no container colorido"],
                    ["title", "string", "—", "Título do dialog"],
                    ["description", "string", "undefined", "Texto descritivo"],
                    ["cancelLabel", "string", '"Cancelar"', "Label do botão cancelar"],
                    ["confirmLabel", "string", '"Confirmar"', "Label do botão confirmar"],
                    ["onCancel", "() => void", "undefined", "Callback ao cancelar"],
                    ["onConfirm", "() => void", "undefined", "Callback ao confirmar"],
                    ["showClose", "boolean", "true", "Mostra botão X no canto"],
                    ["trigger", "ReactNode", "undefined", "Elemento que abre o dialog"],
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

shadcn AlertDialog (Base UI)  → overlay, portal, backdrop, primitives
  ↓ consumido por
custom AlertDialog            → compõe icon + title + desc + cancel/confirm

AlertDialog/
├── index.ts                  # Barrel export
├── AlertDialog.tsx           # View (compõe shadcn AlertDialog parts)
├── AlertDialog.types.ts      # AlertDialogProps + AlertDialogStatus
└── AlertDialog.styles.ts     # Style objects (as const)`}
            </pre>
          </div>
        </section>
      </main>
    </div>
  )
}
