"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ══════════════════════════════════════════════════════════════════════════
   Data
   ══════════════════════════════════════════════════════════════════════════ */

const componentPages = [
  {
    href: "/styleguide/buttons",
    label: "Button",
    description: "6 variants × 8 sizes. Figma: filled green, outline, destructive.",
    route: "Rota A — shadcn adaptado",
    badge: "shadcn",
  },
  {
    href: "/styleguide/tabs",
    label: "Tabs",
    description: "Pill tabs + line variant + badge com contador.",
    route: "Rota A — shadcn adaptado",
    badge: "shadcn",
  },
  {
    href: "/styleguide/input",
    label: "Input & FormField",
    description: "5 estados: enabled, filled, focus, disabled, error. Label + helper automáticos.",
    route: "Rota C — composição shadcn + custom",
    badge: "custom",
  },
  {
    href: "/styleguide/dialog",
    label: "AlertDialog",
    description: "3 status: destructive, success, info. Icon + title + cancel/confirm.",
    route: "Rota C — composição shadcn + custom",
    badge: "custom",
  },
  {
    href: "/styleguide/sidebar",
    label: "AppSidebar",
    description: "Menu lateral com categorias, sub-items, module selector, user dropdown.",
    route: "Rota B — custom com shadcn primitivas",
    badge: "custom",
  },
  {
    href: "/styleguide/kpi",
    label: "KpiRow",
    description: "Row responsiva de KPIs com ícones coloridos e dividers.",
    route: "Rota B — custom",
    badge: "custom",
  },
  {
    href: "/styleguide/table-header",
    label: "TableHeader",
    description: "Toolbar com tabs + actions + export + filter chips.",
    route: "Rota B — custom",
    badge: "custom",
  },
];

const brandScale = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const neutralScale = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

function ColorSwatch({ name, variable }: { name: string; variable: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="size-12 rounded-lg border border-border"
        style={{ backgroundColor: `var(${variable})` }}
      />
      <span className="text-xs text-muted-foreground font-mono">{name}</span>
    </div>
  );
}

function ScaleRow({ label, prefix, steps }: { label: string; prefix: string; steps: number[] }) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-sm font-semibold">{label}</h4>
      <div className="flex flex-wrap gap-2">
        {steps.map((step) => (
          <ColorSwatch key={step} name={`${step}`} variable={`--${prefix}-${step}`} />
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   Page
   ══════════════════════════════════════════════════════════════════════════ */

export default function StyleguidePage() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur px-6 py-4">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Sólis iGreen — Design System
              </h1>
              <p className="text-sm text-muted-foreground">
                Next.js 16 + Tailwind v4 + shadcn/ui (base-nova) + React 19
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={() => setDark(!dark)}>
              {dark ? "Light Mode" : "Dark Mode"}
            </Button>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-16">

          {/* ══════════════════════════════════════════════════════
             1. NAVIGATION — Component pages
             ══════════════════════════════════════════════════════ */}
          <section>
            <h2 className="text-xl font-bold mb-1">Componentes</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Clique para ver demos, props, mapeamento Figma → Código e exemplos de uso.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {componentPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group flex flex-col gap-2 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold group-hover:text-primary transition-colors">
                      {page.label}
                    </span>
                    <Badge variant={page.badge === "shadcn" ? "default" : "secondary"}>
                      {page.badge}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {page.description}
                  </p>
                  <span className="text-[11px] font-mono text-muted-foreground/60">
                    {page.route}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
             2. GUIDE — How to create/use components
             ══════════════════════════════════════════════════════ */}
          <section>
            <h2 className="text-xl font-bold mb-1">Guia de Desenvolvimento</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Como criar, estilizar e consumir componentes neste projeto.
            </p>

            <div className="flex flex-col gap-6">
              {/* Decision tree */}
              <div className="rounded-xl border border-border p-6">
                <h3 className="text-base font-semibold mb-4">Quando usar cada rota?</h3>
                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex gap-3">
                    <Badge>Rota A</Badge>
                    <div>
                      <p className="font-medium">Componente shadcn existe e é suficiente</p>
                      <p className="text-muted-foreground text-xs mt-0.5">
                        Instala via <code className="bg-muted px-1 rounded">npx shadcn@latest add [component]</code>,
                        adapta apenas o visual (radius, height, font) no arquivo <code className="bg-muted px-1 rounded">src/components/ui/</code>.
                        Mantém toda a API e comportamento do shadcn. Ex: Button, Tabs, Badge, Input.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Badge variant="secondary">Rota B</Badge>
                    <div>
                      <p className="font-medium">Componente não existe no shadcn</p>
                      <p className="text-muted-foreground text-xs mt-0.5">
                        Cria custom em <code className="bg-muted px-1 rounded">src/components/custom/</code> com CVA + tokens.
                        Pode usar shadcn primitivas internamente (Collapsible, Tooltip).
                        Ex: AppSidebar, KpiRow, TableHeader.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Badge variant="info">Rota C</Badge>
                    <div>
                      <p className="font-medium">Composição de shadcn + custom wrapper</p>
                      <p className="text-muted-foreground text-xs mt-0.5">
                        Shadcn fornece os primitivos (Input, AlertDialog), custom wrapper compõe com props simplificadas.
                        Ex: FormField (Label + Input + HelperText), AlertDialog (icon + title + cancel/confirm).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Architecture rules */}
              <div className="rounded-xl border border-border p-6">
                <h3 className="text-base font-semibold mb-4">Arquitetura de componentes custom</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-medium mb-2">Estrutura de arquivos</p>
                    <pre className="text-xs font-mono text-muted-foreground leading-relaxed bg-muted/30 p-3 rounded-lg">
{`src/components/custom/ComponentName/
├── index.ts               # Barrel export
├── ComponentName.tsx       # View — apenas JSX + cn()
├── ComponentName.types.ts  # Interfaces (JSDoc)
├── ComponentName.styles.ts # CVA + style objects
└── ComponentName.hooks.ts  # Estado de UI (opcional)`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Princípio: componente &ldquo;burro&rdquo;</p>
                    <div className="text-xs text-muted-foreground space-y-1.5">
                      <p className="flex gap-2"><span className="text-brand-600">&#10003;</span> Recebe dados via props, renderiza UI</p>
                      <p className="flex gap-2"><span className="text-brand-600">&#10003;</span> Dispara callbacks (onClick, onChange)</p>
                      <p className="flex gap-2"><span className="text-brand-600">&#10003;</span> useState apenas para UI (isOpen, activeIndex)</p>
                      <p className="flex gap-2"><span className="text-critical-600">&#10007;</span> Não faz fetch / API calls</p>
                      <p className="flex gap-2"><span className="text-critical-600">&#10007;</span> Não gerencia estado de negócio</p>
                      <p className="flex gap-2"><span className="text-critical-600">&#10007;</span> Não importa stores/contexts globais</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Styling rules */}
              <div className="rounded-xl border border-border p-6">
                <h3 className="text-base font-semibold mb-4">Regras de estilo</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-medium mb-2">Hierarquia de tokens</p>
                    <pre className="text-xs font-mono text-muted-foreground leading-relaxed bg-muted/30 p-3 rounded-lg">
{`Primitive (OKLCH raw)
  --brand-600, --neutral-200
      ↓
Semantic (propósito)
  --primary, --muted-foreground
      ↓
Component (Tailwind utility)
  bg-primary, text-muted-foreground`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Zero valores hardcoded</p>
                    <div className="text-xs font-mono space-y-1.5">
                      <p><span className="text-critical-600">&#10007;</span> <span className="text-muted-foreground">bg-[#22C55E] text-[14px] rounded-[12px]</span></p>
                      <p><span className="text-brand-600">&#10003;</span> <span className="text-foreground">bg-primary text-sm rounded-xl</span></p>
                      <p className="mt-3 font-sans text-muted-foreground">
                        Sempre usar tokens semânticos (bg-primary) ou Tailwind nativo (text-sm, rounded-lg).
                        Nunca hex/px arbitrários.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* shadcn workflow */}
              <div className="rounded-xl border border-border p-6">
                <h3 className="text-base font-semibold mb-4">Workflow: Figma → Código</h3>
                <div className="flex flex-col gap-4 text-sm">
                  <div className="flex gap-3 items-start">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-bold">1</span>
                    <div>
                      <p className="font-medium">Ler o Figma via MCP</p>
                      <p className="text-xs text-muted-foreground">
                        <code className="bg-muted px-1 rounded">get_screenshot</code> + <code className="bg-muted px-1 rounded">get_design_context</code> para extrair cores, fontes, dimensões.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-bold">2</span>
                    <div>
                      <p className="font-medium">Mapear valores visuais → tokens</p>
                      <p className="text-xs text-muted-foreground">
                        Hex → token semântico (bg-primary). Px → utility Tailwind (h-10, rounded-lg). Se não casar → perguntar.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-bold">3</span>
                    <div>
                      <p className="font-medium">Verificar se o Prompt 1 (tokens) já resolve</p>
                      <p className="text-xs text-muted-foreground">
                        Os tokens em <code className="bg-muted px-1 rounded">globals.css</code> sobrescrevem o shadcn.
                        Ex: bg-primary já é verde, não preto. Se o override resolve → não modificar o componente.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-bold">4</span>
                    <div>
                      <p className="font-medium">Adaptar apenas o que o Figma exige além do shadcn</p>
                      <p className="text-xs text-muted-foreground">
                        Radius, height, font weight, variantes novas. Manter todas as variants/sizes/states do shadcn.
                        O Figma define o <strong>visual</strong>. O shadcn define a <strong>API e comportamento</strong>.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-bold">5</span>
                    <div>
                      <p className="font-medium">Documentar e criar demo page</p>
                      <p className="text-xs text-muted-foreground">
                        Tabela Figma → Código, todas as variações, props, exemplo de uso em <code className="bg-muted px-1 rounded">/styleguide/[component]</code>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dependency map */}
              <div className="rounded-xl border border-border p-6">
                <h3 className="text-base font-semibold mb-4">Dependências</h3>
                <pre className="text-xs font-mono text-muted-foreground leading-relaxed bg-muted/30 p-3 rounded-lg">
{`src/
├── themes/default/
│   ├── primitives.css     ← OKLCH scales (brand, neutral, critical, sidebar...)
│   ├── semantic.css       ← shadcn overrides + extended tokens
│   └── dark.css           ← dark mode
├── app/globals.css        ← @import themes + @theme inline (Tailwind v4)
├── components/
│   ├── ui/                ← shadcn components (adaptados visualmente)
│   │   ├── button.tsx     ← Rota A: h-10, font-semibold, glass effect
│   │   ├── tabs.tsx       ← Rota A: pill variant, TabBadge
│   │   ├── input.tsx      ← Rota A: h-11, focus green ring
│   │   ├── badge.tsx      ← Rota A: semantic variants
│   │   ├── alert-dialog.tsx  ← shadcn primitivo (consumido pelo custom)
│   │   ├── collapsible.tsx   ← shadcn primitivo (consumido pelo sidebar)
│   │   ├── tooltip.tsx       ← shadcn primitivo (consumido pelo sidebar)
│   │   └── dropdown-menu.tsx ← shadcn primitivo (consumido pelo sidebar)
│   └── custom/            ← componentes custom (Rota B/C)
│       ├── AppSidebar/    ← 11 arquivos (.types, .styles, .hooks, sub-components)
│       ├── FormField/     ← compõe shadcn Input + Label + HelperText
│       ├── AlertDialog/   ← compõe shadcn AlertDialog + icon/status
│       ├── KpiRow/        ← row responsiva de KPI cards
│       └── TableHeader/   ← toolbar + filter bar`}
                </pre>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
             3. TOKENS — Color scales
             ══════════════════════════════════════════════════════ */}
          <section>
            <h2 className="text-xl font-bold mb-1">Escalas de Cor</h2>
            <p className="text-sm text-muted-foreground mb-6">
              OKLCH, hue constante por escala. Primitivas → nunca usadas diretamente.
            </p>
            <div className="flex flex-col gap-6">
              <ScaleRow label="Brand (hue 160)" prefix="brand" steps={brandScale} />
              <ScaleRow label="Neutral (hue 260)" prefix="neutral" steps={neutralScale} />
              <ScaleRow label="Critical (hue 19)" prefix="critical" steps={brandScale} />
              <ScaleRow label="Warning (hue 65)" prefix="warning" steps={brandScale} />
              <ScaleRow label="Info (hue 250)" prefix="info" steps={brandScale} />
              <ScaleRow label="Success (hue 155)" prefix="success" steps={brandScale} />
              <ScaleRow label="Sidebar (hue 263)" prefix="sidebar" steps={brandScale} />
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
             4. BADGES — All variants
             ══════════════════════════════════════════════════════ */}
          <section>
            <h2 className="text-xl font-bold mb-1">Badge</h2>
            <p className="text-sm text-muted-foreground mb-6">
              9 variantes: 3 Figma + 3 extended + 3 shadcn.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-3">
                <Badge>Ativado</Badge>
                <Badge variant="destructive">Erro</Badge>
                <Badge variant="secondary">Neutro</Badge>
                <Badge variant="success">Concluído</Badge>
                <Badge variant="warning">Pendente</Badge>
                <Badge variant="info">Informação</Badge>
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline">Outline</Badge>
                <Badge variant="ghost">Ghost</Badge>
                <Badge variant="link">Link</Badge>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
             5. BUTTONS — Quick preview
             ══════════════════════════════════════════════════════ */}
          <section>
            <h2 className="text-xl font-bold mb-1">Button</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Preview rápido. <Link href="/styleguide/buttons" className="text-primary hover:underline">Ver todas as variações →</Link>
            </p>
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
             6. DESIGN SUMMARY
             ══════════════════════════════════════════════════════ */}
          <section className="rounded-xl border border-border bg-muted/30 p-6">
            <h2 className="text-lg font-bold mb-4">Design Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm font-mono">
              <div><span className="text-muted-foreground">Primary:</span> oklch(0.48 0.148 160) — #00803c (Green)</div>
              <div><span className="text-muted-foreground">Destructive:</span> oklch(0.558 0.191 19) — #db4150 (Red)</div>
              <div><span className="text-muted-foreground">Neutral:</span> Cool gray (hue 260)</div>
              <div><span className="text-muted-foreground">Font:</span> Inter (500, 600, 700)</div>
              <div><span className="text-muted-foreground">Radius:</span> 10px standard</div>
              <div><span className="text-muted-foreground">Heights:</span> 40px btn, 44px input</div>
              <div><span className="text-muted-foreground">Style:</span> Clean corporate SaaS</div>
              <div><span className="text-muted-foreground">Source:</span> Figma MCP + Screenshots</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
