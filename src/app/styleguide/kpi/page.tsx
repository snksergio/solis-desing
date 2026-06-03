"use client"

import { KpiRow } from "@/components/custom/KpiRow"
import type { KpiItem } from "@/components/custom/KpiRow"
import { Button } from "@/components/ui/button"

/* ── Demo icons ── */

function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function DollarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

function CheckCircleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  )
}

function AlertTriangleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}

/* ── Demo data (Figma example) ── */

const figmaKpis: KpiItem[] = [
  { icon: <HomeIcon />, label: "Total de instalações", value: "97.026", variant: "neutral" },
  { icon: <DollarIcon />, label: "Total valor injetado", value: "143,04", variant: "neutral" },
  { icon: <CheckCircleIcon />, label: "Valor total postergado", value: "143,04", variant: "success" },
  { icon: <AlertTriangleIcon />, label: "Valor total injetado", value: "143,04", variant: "critical" },
]

const threeKpis: KpiItem[] = [
  { icon: <HomeIcon />, label: "Processados", value: "150", variant: "neutral" },
  { icon: <CheckCircleIcon />, label: "Sucesso", value: "146", variant: "success" },
  { icon: <AlertTriangleIcon />, label: "Falhas", value: "4", variant: "critical" },
]

const twoKpis: KpiItem[] = [
  { icon: <DollarIcon />, label: "Receita mensal", value: "R$ 45.230,00", variant: "success" },
  { icon: <AlertTriangleIcon />, label: "Inadimplência", value: "R$ 3.100,00", variant: "critical" },
]

export default function KpiPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur px-6 py-4">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <div>
            <h1 className="text-xl font-bold tracking-tight">KpiRow — Todas as variações</h1>
            <p className="text-sm text-muted-foreground">
              Figma node 262:656 | Responsivo: row → grid 2 col → stack
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
            Voltar
          </Button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-12">

        {/* Figma exact */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">4 KPIs (Figma)</h2>
          <p className="text-sm text-muted-foreground">
            Exemplo exato do Figma. Redimensione a janela para ver responsividade.
          </p>
          <KpiRow items={figmaKpis} />
        </section>

        {/* 3 items */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">3 KPIs</h2>
          <KpiRow items={threeKpis} />
        </section>

        {/* 2 items */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">2 KPIs</h2>
          <KpiRow items={twoKpis} />
        </section>

        {/* Mapping */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Mapeamento Figma → Código</h2>
          <div className="rounded-xl border border-border p-6 overflow-x-auto">
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
                  ["Container", "white, border #ececec, r 10px, p 24px", "bg-card border-border rounded-lg p-6"],
                  ["Icon container", "42px, rounded 10px", "size-[42px] rounded-lg"],
                  ["Icon bg neutral", "#f6f6f6", "bg-neutral-100 text-neutral-500"],
                  ["Icon bg success", "#ebfbf1", "bg-brand-50 text-brand-600"],
                  ["Icon bg critical", "#fbe7e7", "bg-critical-50 text-critical-600"],
                  ["Label", "Medium 14px #777c82", "text-sm font-medium text-muted-foreground"],
                  ["Value", "Bold 18px black", "text-lg font-bold text-foreground"],
                  ["Divider", "vertical line", "border-r border-border (lg only)"],
                  ["Responsive", "—", "1 col → 2 col (sm) → row (lg)"],
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
        </section>

        {/* Usage */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Uso</h2>
          <div className="rounded-xl border border-border p-6">
            <pre className="text-xs font-mono leading-relaxed text-muted-foreground overflow-x-auto">
{`import { KpiRow } from "@/components/custom/KpiRow"
import type { KpiItem } from "@/components/custom/KpiRow"

const kpis: KpiItem[] = [
  { icon: <HomeIcon />, label: "Instalações", value: "97.026" },
  { icon: <DollarIcon />, label: "Valor injetado", value: "143,04", variant: "success" },
  { icon: <AlertIcon />, label: "Falhas", value: "4", variant: "critical" },
]

<KpiRow items={kpis} />

// Variants: "neutral" (default) | "success" | "warning" | "critical" | "info"`}
            </pre>
          </div>
        </section>

        {/* Architecture */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Arquitetura</h2>
          <div className="rounded-xl border border-border p-6">
            <pre className="text-xs text-muted-foreground font-mono leading-relaxed">
{`Estratégia: Rota B (custom, sem equivalente shadcn)

KpiRow/
├── index.ts              # Barrel export
├── KpiRow.tsx            # View — renderiza grid de KPI cards
├── KpiRow.types.ts       # KpiRowProps, KpiItem, KpiVariant
└── KpiRow.styles.ts      # Style objects (as const)

Responsividade:
- Mobile (<640px):   1 coluna, stack vertical
- Tablet (≥640px):   2 colunas grid
- Desktop (≥1024px): row horizontal com dividers verticais`}
            </pre>
          </div>
        </section>
      </main>
    </div>
  )
}
