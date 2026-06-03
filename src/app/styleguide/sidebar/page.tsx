"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/custom/AppSidebar"
import type {
  SidebarCategoryData,
  SidebarModuleOption,
  SidebarUserAction,
} from "@/components/custom/AppSidebar"
import { Button } from "@/components/ui/button"

/* ══════════════════════════════════════════════════════════════════════════
   Icons — passed via the categories array, NOT inside the sidebar component
   ══════════════════════════════════════════════════════════════════════════ */

function IgreenLogo() {
  return (
    <div className="flex size-[38px] items-center justify-center rounded-full bg-brand-600">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07" />
      </svg>
    </div>
  )
}

function ModuleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function InstalacoesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function AssociadosIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function FaturamentoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}

function AuditoriaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

function RateioIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}

function EnergiaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

function IntegracoesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" />
    </svg>
  )
}

/* ── Module icons (for dropdown options) ── */

function CreditosIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function ConfigIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function FaturasModuleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 17.5v-11" />
    </svg>
  )
}

/* ── User action icons ── */

function UserProfileIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  )
}

function SettingsSmIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function LogOutIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}

/* ── Module options (dropdown data) ── */

const moduleOptions: SidebarModuleOption[] = [
  { id: "creditos", label: "Créditos", icon: <CreditosIcon /> },
  { id: "configuracoes", label: "Configurações", icon: <ConfigIcon /> },
  { id: "faturas", label: "Faturas", icon: <FaturasModuleIcon /> },
]

/* ── User actions (dropdown data) ── */

const userActions: SidebarUserAction[] = [
  { id: "perfil", label: "Perfil", icon: <UserProfileIcon /> },
  { id: "configuracoes", label: "Configurações", icon: <SettingsSmIcon /> },
  { id: "logout", label: "Sair", icon: <LogOutIcon />, variant: "destructive" },
]

/* ══════════════════════════════════════════════════════════════════════════
   Navigation data — the sidebar receives this as props
   ══════════════════════════════════════════════════════════════════════════ */

const categories: SidebarCategoryData[] = [
  {
    id: "instalacoes",
    icon: <InstalacoesIcon />,
    label: "Instalações",
    defaultOpen: true,
    items: [
      { id: "contratos", label: "Contratos Instalação" },
      { id: "central", label: "Central do Associado" },
      { id: "ucs", label: "Unidades Consumidoras" },
    ],
  },
  {
    id: "associados",
    icon: <AssociadosIcon />,
    label: "Associados",
    items: [
      { id: "lista-assoc", label: "Lista de Associados" },
      { id: "grupos", label: "Grupos" },
    ],
  },
  {
    id: "faturamento",
    icon: <FaturamentoIcon />,
    label: "Faturamento",
    items: [
      { id: "coleta", label: "Coleta de Faturas" },
      { id: "fat-uc", label: "Faturamentos por UC" },
      { id: "controle-fat", label: "Controle do Faturamento" },
      { id: "tarifas", label: "Tarifas" },
      { id: "tarifas-fixas", label: "Tarifas Fixas" },
      { id: "coleta-xml", label: "Coleta XML" },
      { id: "extrato", label: "Extrato" },
      { id: "fator-co2", label: "Fator de Cálculo para CO2" },
      { id: "fat-motivos", label: "Faturamento Motivos" },
    ],
  },
  {
    id: "auditoria",
    icon: <AuditoriaIcon />,
    label: "Auditoria",
    items: [{ id: "auditoria-geral", label: "Auditoria Geral" }],
  },
  {
    id: "rateio",
    icon: <RateioIcon />,
    label: "Rateio",
    items: [{ id: "rateio-geral", label: "Rateio Geral" }],
  },
  {
    id: "energia",
    icon: <EnergiaIcon />,
    label: "Geração de Energia",
    items: [{ id: "geracao", label: "Usinas" }],
  },
  {
    id: "integracoes",
    icon: <IntegracoesIcon />,
    label: "Integrações",
    items: [
      { id: "webhooks", label: "Webhooks" },
      { id: "api-keys", label: "API Keys" },
    ],
  },
]

/* ══════════════════════════════════════════════════════════════════════════
   Page — manages UI state, passes data down to AppSidebar
   ══════════════════════════════════════════════════════════════════════════ */

export default function SidebarPage() {
  const [expanded, setExpanded] = useState(true)
  const [activeItemId, setActiveItemId] = useState("central")
  const [activeModule, setActiveModule] = useState("creditos")

  // Find the current module to display its icon/title
  const currentModule = moduleOptions.find((m) => m.id === activeModule) ?? moduleOptions[0]

  return (
    <div className="flex h-screen bg-background">
      <AppSidebar
        logo={<IgreenLogo />}
        title="Sólis iGreen"
        module={{
          icon: currentModule.icon,
          title: currentModule.label,
          subtitle: "Módulo Selecionado",
          options: moduleOptions,
          onModuleChange: setActiveModule,
        }}
        showSearch
        categories={categories}
        activeItemId={activeItemId}
        onItemClick={setActiveItemId}
        user={{
          name: "Sérgio Vieira",
          email: "sergio@igreenenergy.com.br",
          actions: userActions,
          onAction: (id) => alert(`Ação: ${id}`),
        }}
        expanded={expanded}
        onExpandedChange={setExpanded}
      />

      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                AppSidebar — Demo
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Componente refatorado: .types / .styles / .hooks / sub-components
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Collapse" : "Expand"}
            </Button>
          </div>

          {/* Props & Usage */}
          <div className="flex flex-col gap-6 max-w-3xl">

            {/* Active state */}
            <div className="rounded-xl border border-border p-6">
              <h2 className="text-lg font-semibold mb-2">Estado atual</h2>
              <div className="flex flex-wrap gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">activeItemId:</span>{" "}
                  <code className="font-mono text-foreground bg-muted px-1.5 py-0.5 rounded">{activeItemId}</code>
                </div>
                <div>
                  <span className="text-muted-foreground">activeModule:</span>{" "}
                  <code className="font-mono text-foreground bg-muted px-1.5 py-0.5 rounded">{activeModule}</code>
                </div>
                <div>
                  <span className="text-muted-foreground">expanded:</span>{" "}
                  <code className="font-mono text-foreground bg-muted px-1.5 py-0.5 rounded">{String(expanded)}</code>
                </div>
              </div>
            </div>

            {/* Usage example */}
            <div className="rounded-xl border border-border p-6">
              <h2 className="text-lg font-semibold mb-4">Uso</h2>
              <pre className="text-xs font-mono leading-relaxed text-muted-foreground overflow-x-auto">
{`<AppSidebar
  logo={<IgreenLogo />}
  title="Sólis iGreen"
  module={{
    icon: currentModule.icon,
    title: currentModule.label,
    subtitle: "Módulo Selecionado",
    options: moduleOptions,          // dropdown com módulos
    onModuleChange: setActiveModule,  // callback ao trocar
  }}
  showSearch
  searchPlaceholder="Buscar"
  searchValue={searchValue}
  onSearchChange={setSearchValue}
  searchRef={searchRef}              // ref do <input> real
  categories={categories}
  activeItemId={activeItemId}
  onItemClick={setActiveItemId}
  user={{
    name: "Sérgio Vieira",
    email: "sergio@igreenenergy.com.br",
    actions: userActions,             // dropdown com ações
    onAction: handleUserAction,       // callback ao clicar
  }}
  expanded={expanded}
  onExpandedChange={setExpanded}
/>`}
              </pre>
            </div>

            {/* Props table */}
            <div className="rounded-xl border border-border p-6">
              <h2 className="text-lg font-semibold mb-4">Props</h2>
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
                      ["logo", "ReactNode", "—", "Ícone do logo no header"],
                      ["title", "string", "—", "Nome do app no header"],
                      ["module", "SidebarModuleData", "undefined", "Config do módulo (com dropdown opcional)"],
                      ["showSearch", "boolean", "true", "Mostra input de busca"],
                      ["searchPlaceholder", "string", "\"Buscar\"", "Placeholder do input de busca"],
                      ["searchValue", "string", "undefined", "Valor controlado do input de busca"],
                      ["onSearchChange", "(v: string) => void", "undefined", "Callback ao digitar na busca"],
                      ["searchRef", "Ref<HTMLInputElement>", "undefined", "Ref do <input> nativo (focus, etc.)"],
                      ["categories", "SidebarCategoryData[]", "—", "Array de categorias de navegação"],
                      ["activeItemId", "string", "undefined", "ID do sub-item ativo (global)"],
                      ["onItemClick", "(id: string) => void", "undefined", "Callback ao clicar num sub-item"],
                      ["user", "SidebarUserData", "—", "Dados do usuário (com dropdown opcional)"],
                      ["expanded", "boolean", "undefined", "Estado expandido (controlado)"],
                      ["onExpandedChange", "(v: boolean) => void", "undefined", "Callback ao expandir/recolher"],
                      ["defaultExpanded", "boolean", "true", "Estado inicial (não-controlado)"],
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

            {/* Module dropdown */}
            <div className="rounded-xl border border-border p-6">
              <h2 className="text-lg font-semibold mb-4">SidebarModuleData (dropdown de módulos)</h2>
              <pre className="text-xs font-mono leading-relaxed text-muted-foreground overflow-x-auto">
{`interface SidebarModuleData {
  icon: ReactNode                    // Ícone do módulo atual
  title: string                      // Nome do módulo atual
  subtitle: string                   // Ex: "Módulo Selecionado"
  options?: SidebarModuleOption[]     // Se presente, renderiza dropdown
  onModuleChange?: (id: string) => void  // Callback ao trocar módulo
}

interface SidebarModuleOption {
  id: string         // Identificador único
  label: string      // Nome do módulo
  icon: ReactNode    // Ícone do módulo
}

// Exemplo de uso:
const moduleOptions: SidebarModuleOption[] = [
  { id: "creditos", label: "Créditos", icon: <CreditosIcon /> },
  { id: "configuracoes", label: "Configurações", icon: <ConfigIcon /> },
  { id: "faturas", label: "Faturas", icon: <FaturasIcon /> },
]`}
              </pre>
            </div>

            {/* User dropdown */}
            <div className="rounded-xl border border-border p-6">
              <h2 className="text-lg font-semibold mb-4">SidebarUserData (dropdown do usuário)</h2>
              <pre className="text-xs font-mono leading-relaxed text-muted-foreground overflow-x-auto">
{`interface SidebarUserData {
  name: string                       // Nome do usuário
  email: string                      // Email
  avatar?: ReactNode                 // Avatar custom (default: ícone genérico)
  actions?: SidebarUserAction[]      // Se presente, renderiza dropdown
  onAction?: (id: string) => void    // Callback ao clicar ação
}

interface SidebarUserAction {
  id: string                         // Identificador único
  label: string                      // Label da ação
  icon?: ReactNode                   // Ícone da ação
  variant?: "default" | "destructive"  // "destructive" = vermelho (ex: Logout)
}

// Exemplo de uso:
const userActions: SidebarUserAction[] = [
  { id: "perfil", label: "Perfil", icon: <UserIcon /> },
  { id: "configuracoes", label: "Configurações", icon: <SettingsIcon /> },
  { id: "logout", label: "Sair", icon: <LogOutIcon />, variant: "destructive" },
]`}
              </pre>
            </div>

            {/* Categories data shape */}
            <div className="rounded-xl border border-border p-6">
              <h2 className="text-lg font-semibold mb-4">SidebarCategoryData (navegação)</h2>
              <pre className="text-xs font-mono leading-relaxed text-muted-foreground overflow-x-auto">
{`interface SidebarCategoryData {
  id: string                         // Identificador único
  icon: ReactNode                    // Ícone da categoria
  label: string                      // Label exibido
  href?: string                      // Link direto (sem sub-items)
  items?: SidebarSubItem[]           // Sub-items colapsáveis
  defaultOpen?: boolean              // Inicia expandido
}

interface SidebarSubItem {
  id: string                         // Identificador único
  label: string                      // Label exibido
  href?: string                      // Link de navegação
}`}
              </pre>
            </div>

            {/* Search */}
            <div className="rounded-xl border border-border p-6">
              <h2 className="text-lg font-semibold mb-4">Search (input real)</h2>
              <pre className="text-xs font-mono leading-relaxed text-muted-foreground overflow-x-auto">
{`// O search é um <input> nativo com ref forwarding.
// Permite controlar valor, placeholder e acessar o DOM.

<AppSidebar
  showSearch                          // boolean — exibe/oculta
  searchPlaceholder="Buscar..."       // placeholder do input
  searchValue={query}                 // valor controlado
  onSearchChange={setQuery}           // callback onChange
  searchRef={inputRef}                // React.Ref<HTMLInputElement>
  ...
/>

// No consumidor:
const inputRef = useRef<HTMLInputElement>(null)
// inputRef.current?.focus() — foco programático`}
              </pre>
            </div>

            {/* Architecture */}
            <div className="rounded-xl border border-border p-6">
              <h2 className="text-lg font-semibold mb-4">Arquitetura</h2>
              <pre className="text-xs text-muted-foreground font-mono leading-relaxed">
{`AppSidebar/
├── index.ts                    # Barrel export
├── AppSidebar.tsx              # Container (view only, compõe sub-components)
├── AppSidebar.types.ts         # Todas as interfaces
├── AppSidebar.styles.ts        # CVA + style objects (as const)
├── AppSidebar.hooks.ts         # useSidebar, useCollapsible (UI only)
├── AppSidebar.icons.tsx        # Ícones internos do chrome
├── SidebarHeader.tsx           # Logo + título + toggle collapse
├── SidebarModuleSelector.tsx   # Card módulo + dropdown (shadcn DropdownMenu)
├── SidebarSearch.tsx           # Input real com ref forwarding
├── SidebarCategory.tsx         # Categoria nav (shadcn Collapsible + Tooltip)
├── SidebarMenuItem.tsx         # Sub-item row com treeview border
└── SidebarFooter.tsx           # Card usuário + dropdown (shadcn DropdownMenu)`}
              </pre>
              <p className="text-xs text-muted-foreground mt-4">
                Componente presentacional (&ldquo;burro&rdquo;): recebe dados via props, renderiza UI, dispara callbacks.
                Sem fetch, sem stores, sem lógica de negócio.
                Dropdowns usam shadcn DropdownMenu (Base UI).
                Só aparece dropdown quando <code className="bg-muted px-1 rounded">options</code> ou <code className="bg-muted px-1 rounded">actions</code> array é passado.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
