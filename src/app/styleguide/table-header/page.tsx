"use client"

import { useState } from "react"
import { TableHeader } from "@/components/custom/TableHeader"
import type { TableSection, TableAction, TableFilter } from "@/components/custom/TableHeader"
import { Button } from "@/components/ui/button"

/* ── Icons ── */

function GridIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function SlidersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="4" y1="21" y2="14" />
      <line x1="4" x2="4" y1="10" y2="3" />
      <line x1="12" x2="12" y1="21" y2="12" />
      <line x1="12" x2="12" y1="8" y2="3" />
      <line x1="20" x2="20" y1="21" y2="16" />
      <line x1="20" x2="20" y1="12" y2="3" />
      <line x1="2" x2="6" y1="14" y2="14" />
      <line x1="10" x2="14" y1="8" y2="8" />
      <line x1="18" x2="22" y1="16" y2="16" />
    </svg>
  )
}

function SettingsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

/* ── Demo data ── */

const sections: TableSection[] = [
  { id: "instalacoes", label: "Instalações", icon: <GridIcon /> },
]

const actions: TableAction[] = [
  { id: "search", icon: <SearchIcon />, label: "Buscar" },
  { id: "filter", icon: <SlidersIcon />, label: "Filtros", dot: true },
  { id: "settings", icon: <SettingsIcon />, label: "Configurações" },
]

const filters: TableFilter[] = [
  { id: "id", label: "ID" },
  { id: "titular", label: "Titular" },
  { id: "uc", label: "UC" },
  { id: "status-uc", label: "Status da UC" },
  { id: "etapa-uc", label: "Etapa da UC" },
  { id: "data-assinatura", label: "Data de assinatura" },
  { id: "cancel-request", label: "Solicitação de Cancelamento" },
  { id: "cancel-date", label: "Data de Cancelamento" },
  { id: "consorcio", label: "Consórcio" },
  { id: "consumo-ref", label: "Consumo de referência" },
]

export default function TableHeaderPage() {
  const [activeSection, setActiveSection] = useState("instalacoes")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur px-6 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div>
            <h1 className="text-xl font-bold tracking-tight">TableHeader — Demo</h1>
            <p className="text-sm text-muted-foreground">
              Figma node 415:1470 | Toolbar + filter bar
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
            Voltar
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-12">

        {/* Full example (Figma) */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Completo (Figma)</h2>
          <p className="text-sm text-muted-foreground">
            Toolbar com tabs, actions, export + filter bar com chips.
          </p>
          <TableHeader
            sections={sections}
            activeSectionId={activeSection}
            onSectionChange={setActiveSection}
            onAddSection={() => alert("Adicionar seção")}
            actions={actions}
            onActionClick={(id) => alert(`Action: ${id}`)}
            exportConfig={{
              label: "Exportar",
              icon: <DownloadIcon />,
              onExport: () => alert("Exportar"),
            }}
            showMoreOptions
            onMoreOptions={() => alert("Mais opções")}
            filters={filters}
            onFilterClick={(id) => alert(`Filter: ${id}`)}
            onAddFilter={() => alert("Adicionar filtro")}
          />
        </section>

        {/* Multiple sections */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Múltiplas seções</h2>
          <TableHeader
            sections={[
              { id: "faturas", label: "Faturas", icon: <GridIcon /> },
              { id: "tarifas", label: "Tarifas", icon: <GridIcon /> },
              { id: "extrato", label: "Extrato", icon: <GridIcon /> },
            ]}
            activeSectionId="faturas"
            onSectionChange={() => {}}
            actions={[{ id: "search", icon: <SearchIcon />, label: "Buscar" }]}
            exportConfig={{ label: "Exportar", icon: <DownloadIcon /> }}
            filters={[
              { id: "cliente", label: "Cliente" },
              { id: "status", label: "Status" },
              { id: "periodo", label: "Período" },
            ]}
          />
        </section>

        {/* Only toolbar, no filters */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Só toolbar (sem filtros)</h2>
          <TableHeader
            sections={[{ id: "logs", label: "Lista de Logs", icon: <GridIcon /> }]}
            activeSectionId="logs"
            onAddSection={() => {}}
            actions={[
              { id: "search", icon: <SearchIcon />, label: "Buscar" },
              { id: "settings", icon: <SettingsIcon />, label: "Config" },
            ]}
          />
        </section>

        {/* Only filters */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Só filtros</h2>
          <TableHeader
            filters={[
              { id: "nome", label: "Nome" },
              { id: "email", label: "Email" },
              { id: "status", label: "Status" },
            ]}
            onFilterClick={(id) => alert(id)}
          />
        </section>

        {/* Usage */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Uso</h2>
          <div className="rounded-xl border border-border p-6">
            <pre className="text-xs font-mono leading-relaxed text-muted-foreground overflow-x-auto">
{`import { TableHeader } from "@/components/custom/TableHeader"

<TableHeader
  sections={[{ id: "inst", label: "Instalações", icon: <GridIcon /> }]}
  activeSectionId="inst"
  onSectionChange={setActiveSection}
  onAddSection={() => openModal()}
  actions={[
    { id: "search", icon: <SearchIcon />, label: "Buscar" },
    { id: "filter", icon: <SlidersIcon />, label: "Filtros", dot: true },
    { id: "settings", icon: <SettingsIcon />, label: "Config" },
  ]}
  onActionClick={(id) => handleAction(id)}
  exportConfig={{
    label: "Exportar",
    icon: <DownloadIcon />,
    onExport: handleExport,
    showDropdown: true,
  }}
  showMoreOptions
  onMoreOptions={handleMore}
  filters={[
    { id: "id", label: "ID" },
    { id: "titular", label: "Titular" },
  ]}
  onFilterClick={(id) => openFilterModal(id)}
  onAddFilter={() => openFilterPicker()}
/>`}
            </pre>
          </div>
        </section>

        {/* Architecture */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Arquitetura</h2>
          <div className="rounded-xl border border-border p-6">
            <pre className="text-xs text-muted-foreground font-mono leading-relaxed">
{`Estratégia: Rota B (custom, sem equivalente shadcn)

TableHeader/
├── index.ts                # Barrel export
├── TableHeader.tsx         # View — toolbar + filter bar
├── TableHeader.types.ts    # Props, TableSection, TableAction, TableFilter
└── TableHeader.styles.ts   # Style objects (as const)`}
            </pre>
          </div>
        </section>
      </main>
    </div>
  )
}
