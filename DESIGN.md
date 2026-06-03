---
version: alpha
name: Sólis iGreen Design System
description: >-
  Design system corporativo do SuperApp iGreen (folder ds-solar, marca "Sólis").
  Verde de marca #00803c sobre neutros cool-gray, pipeline de tokens em 3 camadas
  (primitive OKLCH → semantic → component), construído sobre shadcn/ui base-nova +
  Base UI. Light é o tema canônico; dark é alternate completo via classe .dark.
# ─────────────────────────────────────────────────────────────────────────────
# COLORS — hex 6-dígitos renderizados a partir dos primitivos OKLCH.
# Os OKLCH são a ground-truth no código; o hex aqui é o que eles produzem em sRGB.
# Onde o Figma fixou um hex de origem diferente, está anotado no comentário.
# ─────────────────────────────────────────────────────────────────────────────
colors:
  primary:    "#00753f"   # from --brand-600 (themes/default/primitives.css); Figma source #00803c
  secondary:  "#f2f3f5"   # from --secondary → --neutral-100 (semantic.css)
  tertiary:   "#009c5c"   # inferred — brand-500, tom de marca mais claro (sem slot tertiary nativo)
  neutral:    "#72767d"   # from --neutral-500; Figma label gray #777c82
  surface:    "#ffffff"   # from --neutral-0 / --card / --background (tema light canônico)
  text:       "#060b14"   # from --foreground → --neutral-950
  text-muted: "#72767d"   # from --muted-foreground → --neutral-500
  border:     "#e6e8ea"   # from --border → --neutral-200
  error:      "#cb2f45"   # from --destructive → --critical-600; Figma source #db4150
  success:    "#007a3a"   # from --success-600 (hue 155, diferenciado da marca hue 160)
  warning:    "#e27300"   # from --warning-600
  info:       "#0065b4"   # from --info-600
  accent:     "#f8f8fa"   # from --accent → --neutral-50
# ─────────────────────────────────────────────────────────────────────────────
typography:
  display:
    fontFamily: Inter
    fontSize: 24px          # text-2xl — h1 / título de página
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.025em # tracking-tight
  heading-1:
    fontFamily: Inter
    fontSize: 20px          # text-xl — h2 de seção
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: -0.025em
  heading-2:
    fontFamily: Inter
    fontSize: 18px          # text-lg
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: -0.025em
  heading-3:
    fontFamily: Inter
    fontSize: 16px          # text-base — título de card
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0em
  body:
    fontFamily: Inter
    fontSize: 14px          # text-sm — corpo padrão, inputs (font-medium)
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0em
  body-strong:
    fontFamily: Inter
    fontSize: 14px          # text-sm — botões, labels de ação
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: -0.025em
  label:
    fontFamily: Inter
    fontSize: 14px          # text-sm — labels de form
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0em
  caption:
    fontFamily: Inter
    fontSize: 12px          # text-xs — badges, captions (font-semibold)
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: -0.025em
  micro:
    fontFamily: Inter
    fontSize: 11px          # text-[11px] — meta labels, rotas
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0em
  badge-count:
    fontFamily: Inter
    fontSize: 10px          # text-[10px] — contador no TabBadge
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -0.025em
  mono:
    fontFamily: Geist Mono
    fontSize: 12px          # font-mono — tokens, código inline, design summary
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
# ─────────────────────────────────────────────────────────────────────────────
# ROUNDED — escala EFETIVA do Tailwind v4 (@theme inline recalcula a partir de
# --radius=10px). Atenção: diverge dos primitivos --radius-* declarados (gotcha §5).
rounded:
  sm:   6px      # calc(--radius * 0.6) — tags pequenas
  md:   8px      # calc(--radius * 0.8) — badge
  lg:   10px     # var(--radius) — PADRÃO: botões, inputs, tabs
  xl:   14px     # calc(--radius * 1.4) — cards
  "2xl": 18px
  "3xl": 22px
  "4xl": 26px
  full: 9999px   # pills, avatares, TabBadge
# ─────────────────────────────────────────────────────────────────────────────
# SPACING — base-4 (escala nativa Tailwind). px-3.5 (14px) é o padding-x canônico
# de botões e inputs, vindo do Figma.
spacing:
  "0": 0px
  px: 1px
  "0.5": 2px
  "1": 4px
  "1.5": 6px
  "2": 8px
  "2.5": 10px
  "3": 12px
  "3.5": 14px    # padding-x de botões/inputs (Figma)
  "4": 16px
  "5": 20px
  "6": 24px
  "8": 32px
  "10": 40px
  "16": 64px
# ─────────────────────────────────────────────────────────────────────────────
# PREVIEW_TOKENS — mapa flat, somente hex literal 6-dígitos (sem references).
preview_tokens:
  button_primary_bg:      "#00753f"   # --brand-600
  button_primary_text:    "#ffffff"
  button_primary_hover:   "#006133"   # --brand-700 (aprox. de hover:bg-primary/90)
  button_secondary_bg:    "#f2f3f5"   # --neutral-100
  button_secondary_text:  "#434851"   # --neutral-700
  button_destructive_bg:  "#cb2f45"   # --critical-600
  badge_primary_bg:       "#e8fbef"   # --brand-50; Figma #ebfbf1
  badge_primary_text:     "#006133"   # --brand-700; Figma #228448
  card_bg:                "#ffffff"
  card_border:            "#e6e8ea"   # --neutral-200
  surface_bg:             "#ffffff"
  canvas_bg:              "#f8f8fa"   # --neutral-50
  input_bg:               "#ffffff"
  text_default:           "#060b14"   # --neutral-950
  text_muted:             "#72767d"   # --neutral-500
  border:                 "#e6e8ea"
  accent:                 "#00753f"
  ring:                   "#009c5c"   # --brand-500
  button_radius:          "10px"
  input_radius:           "10px"
  card_radius:            "14px"
  badge_radius:           "8px"
# ─────────────────────────────────────────────────────────────────────────────
# COMPONENTS — átomos com tokens + dual emission. Decision logic vive no corpo §4.
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: 14px
    fontWeight: 600
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "#434851"
    rounded: "{rounded.lg}"
    padding: 14px
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: 14px
  button-ghost:
    backgroundColor: "#ffffff"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: 14px
  button-destructive:
    backgroundColor: "{colors.error}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: 14px
  badge-default:
    backgroundColor: "#e8fbef"
    textColor: "#006133"
    rounded: "{rounded.md}"
    padding: 10px
    fontWeight: 600
  input-text:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: 14px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.xl}"
    padding: 24px
  tabs-list:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.lg}"
    padding: 4px
  nav-header:
    backgroundColor: "#f5f6f7"
    textColor: "#585a5f"
    rounded: "{rounded.lg}"
    padding: 8px
---

# Sólis iGreen — Design System

> **Provenance.** Extraído por análise estática de código (modalidade C — `/design-md extract-code`)
> em 2026-06-03, a partir de `themes/default/{primitives,semantic,dark}.css`,
> `app/globals.css` (Tailwind v4 `@theme inline`), e `components/ui/*` + `components/custom/*`.
> Stack: Next.js 16.2 · React 19.2 · Tailwind v4 · shadcn/ui (style `base-nova`) · Base UI 1.3 · lucide.
> Os hexes vêm dos primitivos OKLCH renderizados em sRGB; origem Figma `IrZqyXNqnkcV4u0b0mkTPp`.

## 1. Visual Theme & Atmosphere

Sólis é a UI do SuperApp iGreen — um **SaaS corporativo limpo** para gestão de energia e serviços. A atmosfera é institucional e funcional: superfícies brancas, neutros cool-gray e um único verde de marca (`#00803c`) que ancora identidade e ação. Não é um produto consumer colorido; é uma ferramenta de trabalho data-dense (sidebar, KPIs, tabelas, formulários) onde o verde é pontual — aparece em CTAs, estado ativo do menu, links e foco — e o resto respira em escala de cinza.

A construção é **token-first e disciplinada**: três camadas (primitivo OKLCH → semântico → utilitário Tailwind) e zero valores hardcoded em componente. O verde é OKLCH hue 160 com chroma decrescente nas pontas da escala; os neutros são cool (hue 260, chroma ~0.01) para dar um tom levemente frio em vez de cinza morto. O sistema nasce sobre shadcn/ui `base-nova` adaptado visualmente ao Figma, mantendo a API/comportamento do shadcn e sobrescrevendo só o visual (radius 10px, alturas 40/44px, peso de fonte, verde no lugar do preto).

**Key characteristics:**
- Verde de marca único `#00803c` como âncora de identidade e ação; tudo mais é neutro.
- Profundidade quase plana — hierarquia por borda + contraste de superfície, com sombras de 1px sutilíssimas e um realce inset "glass" só nos botões sólidos.
- Cantos consistentes de 10px (`rounded-lg`) como assinatura; cards em 14px.
- Tipografia Inter em três pesos (500/600/700) com `tracking-tight` (-0.025em) em títulos, botões e badges.
- Light é o tema canônico (`:root`), dark é alternate completo (`.dark`) com lightness invertida e mesmas hues.

## 2. Color Palette & Roles

### Primary (Brand — Verde)
Escala `--brand-50..950`, OKLCH hue 160 constante. **`#00753f` (brand-600) é o verde de marca** — botões primários, estado ativo da sidebar, links, anel de foco, `--primary`. Origem Figma `#00803c`. NUNCA escolha primary por frequência: o verde é âncora pontual, a maior parte da UI é neutra.

| Step | Hex | Uso |
|---|---|---|
| brand-50 | `#e8fbef` | fundo subtle de badge/primary (`--color-bg-primary-subtle`) |
| brand-500 | `#009c5c` | anel de foco (`--ring`), chart-1 |
| brand-600 | `#00753f` | **`--primary`**, CTA, link, sidebar ativo |
| brand-700 | `#006133` | hover de primary, texto sobre `brand-50` |

### Neutral Scale (Cool Gray — hue 260)
`--neutral-0..950`. Base de fundos, texto e bordas. `neutral-0 #ffffff` (surface), `neutral-50 #f8f8fa` (canvas/accent), `neutral-100 #f2f3f5` (secondary/muted), `neutral-200 #e6e8ea` (border/input), `neutral-400 #aeb1b6` (fg-subtle), `neutral-500 #72767d` (texto muted, Figma `#777c82`), `neutral-700 #434851` (texto secundário), `neutral-950 #060b14` (`--foreground`).

### Semantic (Feedback)
- **Critical/Error** `--critical-600 #cb2f45` (Figma `#db4150`) — destructive, erro. Subtle `#fff1f1`.
- **Success** `--success-600 #007a3a` (hue 155, **deliberadamente diferente** da marca hue 160 para não confundir verde-de-ação com verde-de-sucesso). Subtle `#e9faee`.
- **Warning** `--warning-600 #e27300` (âmbar). Subtle `#fff8ea`. *Defaults sensatos — não vieram do Figma.*
- **Info** `--info-600 #0065b4` (azul). Subtle `#ebf7ff`. *Defaults sensatos — não vieram do Figma.*

### Sidebar (escala dedicada — hue 263)
`--sidebar-50..950`, cool gray próprio do menu lateral. `sidebar-50 #f5f6f7` (fundo), `sidebar-700 #585a5f` (texto), `sidebar-600 #787c82` (ícones), `sidebar-400 #b7b9bc` (setas/captions). Verde ativo da sidebar é `--sidebar-primary #0b7643` (oklch 0.5 0.12 155), levemente distinto do brand-600.

### Charts
`chart-1..5` = brand-500, info-500, success-500, warning-500, critical-500 (no dark, os steps -400).

### Color Philosophy
Um só verde de marca, neutros frios, semânticos reservados a feedback. Success (hue 155) é separado da marca (hue 160) de propósito. Cores nunca entram cruas no componente: sempre via token semântico (`bg-primary`, `text-muted-foreground`) ou primitivo exposto como utilitário (`bg-brand-600`, `text-neutral-500`). Tokens `warning`/`info` são defaults de engenharia, não decisões de marca — validar com design antes de usar em superfície de marca.

## 3. Typography Rules

**Famílias:** `Inter` (`--font-sans`, via `next/font/google`, variável `--font-inter`) para tudo; `Geist Mono` (`--font-mono`, `--font-geist-mono`) para tokens/código/labels técnicas. Pesos de Inter em uso: **500 (medium), 600 (semibold), 700 (bold)**.

| Role | Font | Size | Weight | LH | LS | Notas |
|---|---|---|---|---|---|---|
| display (h1) | Inter | 24px | 700 | 1.2 | -0.025em | título de página |
| heading-1 (h2) | Inter | 20px | 700 | 1.3 | -0.025em | seção |
| heading-2 | Inter | 18px | 700 | 1.35 | -0.025em | bloco |
| heading-3 | Inter | 16px | 600 | 1.4 | 0 | título de card |
| body | Inter | 14px | 500 | 1.5 | 0 | corpo, input |
| body-strong | Inter | 14px | 600 | 1.4 | -0.025em | **botões**, ação |
| label | Inter | 14px | 500 | 1.4 | 0 | label de form |
| caption | Inter | 12px | 600 | 1.35 | -0.025em | **badges**, captions |
| micro | Inter | 11px | 500 | 1.3 | 0 | meta, rotas |
| badge-count | Inter | 10px | 700 | 1 | -0.025em | TabBadge |
| mono | Geist Mono | 12px | 400 | 1.5 | 0 | tokens, código |

**Princípios:** `tracking-tight` (-0.025em) é assinatura em títulos, botões e badges — não use tracking neutro neles. Corpo e labels ficam em peso 500 (medium), não 400 — o sistema não usa regular para UI. Botão é sempre 14px/600.

## 4. Components

Três rotas de construção (decisão arquitetural central, documentada em `/styleguide`):
- **Rota A** — shadcn existe e basta: instala via `npx shadcn@latest add`, adapta só o visual em `components/ui/`, mantém API/comportamento. Ex: Button, Tabs, Badge, Input.
- **Rota B** — não existe no shadcn: custom em `components/custom/` com CVA + tokens, podendo usar primitivas shadcn dentro. Ex: AppSidebar, KpiRow, TableHeader.
- **Rota C** — composição: wrapper custom sobre primitivo shadcn com props simplificadas. Ex: FormField (Label+Input+Helper), AlertDialog (icon+title+cancel/confirm).

**Button** (`button-primary`) — `components/ui/button.tsx`
- bg `#00753f`, text `#ffffff`, h-10 (40px), px-3.5 (14px), `rounded-lg` (10px), 14px/600 tracking-tight
- Realce glass: `inset 0 1px 0 rgba(255,255,255,.2)` + sombra `0 1px 2px rgba(0,0,0,.05)`; hover `bg-primary/90`; `active:translate-y-px`
- Variantes: `default` (verde), `outline` (border + bg branco + shadow-sm), `secondary` (`#f2f3f5`/`#434851`), `ghost` (transparente, hover `bg-muted`), `destructive` (`#cb2f45`), `link` (texto verde sublinhado)
- Sizes: xs(28) sm(32) default(40) lg(44) + icon/icon-xs/icon-sm/icon-lg
- **Use:** ação primária = `default` (1 por contexto); ações secundárias = `outline`/`secondary`/`ghost`.
- **Não use:** dois `default` verdes lado a lado competindo; `destructive` para ação reversível.

**Badge** (`badge-default`) — `components/ui/badge.tsx`
- h-6 (24px), px-2.5 (10px), `rounded-md`, 12px/600 tracking-tight
- Variantes: `default`/primary (`#e8fbef`/`#006133`), `secondary`/neutral (`#f2f3f5`/`#72767d`), `destructive` (`#fff1f1`/`#cb2f45`), `success`, `warning`, `info` (todos par subtle-bg + 600/700-text), + `outline`/`ghost`/`link`
- **Use:** status e rótulos curtos (Ativado, Pendente, Erro). **Não use:** como botão — badge não é interativo (exceto variantes outline/link explícitas).

**Input** (`input-text`) — `components/ui/input.tsx`
- h-11 (44px), px-3.5 (14px), `rounded-lg` (10px), border `--input`, 14px/500
- Sombra sutil `0 1px 2px rgba(0,0,0,.05)`; placeholder `muted-foreground/60`
- Foco: `border-primary` + `ring-3 ring-primary/20` (**anel verde** — assinatura). Disabled: `bg-neutral-100`, sem sombra. Erro: via `aria-invalid` (borda + anel vermelho).
- **Use:** sempre com FormField (Rota C) para label+helper automáticos. **Não use:** alturas fora de 44px (32/40/48 são para casos específicos via `--height-form-*`).

**Tabs** (`tabs-list`) — `components/ui/tabs.tsx`
- Variante `default` (pill): TabsList `bg-neutral-100`, h-10, p-1, `rounded-lg`; trigger ativo = pílula branca (`bg-card` + `shadow-sm` + `font-semibold`); inativo `muted-foreground`/500.
- Variante `line`: underline `bg-foreground`, sem pílula. `TabBadge` = círculo vermelho `critical-600`, 16px, contador 10px/700 branco.
- **Use:** `default` para troca de visão dentro de uma área; `line` para navegação de subseção mais leve.

**Card** (`card`) — padrão de `/styleguide`
- bg `#ffffff`, border `--border`, `rounded-xl` (14px), p-5/p-6; hover `border-primary/30` + `shadow-sm`
- **Use:** agrupar conteúdo relacionado e itens de navegação. **Não use:** sombra pesada — elevação é sutil aqui.

**Componentes custom** (`components/custom/`): **AppSidebar** (Rota B — categorias, sub-items, module selector, user dropdown; usa escala sidebar), **FormField** (Rota C), **AlertDialog** (Rota C — 3 status: destructive/success/info, icon+title+cancel/confirm), **KpiRow** (Rota B — KPIs com ícones coloridos e dividers), **TableHeader** (Rota B — toolbar com tabs+actions+export+filter chips). Padrão de arquivo custom: `index.ts` (barrel) · `*.tsx` (view só JSX+cn) · `*.types.ts` · `*.styles.ts` (CVA) · `*.hooks.ts` (estado de UI). Componente é "burro": recebe dados via props, dispara callbacks, `useState` só para UI — **nunca** faz fetch nem importa store/context global.

## 5. Layout Principles

**Spacing system:** base-4 (escala nativa Tailwind). `px-3.5` (14px) é o padding-x canônico de botões e inputs (vindo do Figma); gaps típicos `gap-1/2/3` (4/8/12), seções `gap-16` (64). Não introduza tokens fora da escala base-4 (ex.: 20px só via `p-5`, que é múltiplo válido).

**Container:** conteúdo central `max-w-6xl mx-auto`, padding `px-6` (24px). Header sticky com `backdrop-blur` + `bg-background/95`.

**Border radius scale:** `rounded-lg` (10px) é o **padrão** (botões, inputs, tabs, swatches); `rounded-md` badges; `rounded-xl` (14px) cards; `rounded-full` pills/avatares.

> **⚠ Gotcha — radius declarado ≠ efetivo.** `primitives.css` declara `--radius-md:10px`, `--radius-lg:12px`, `--radius-xl:20px`, mas `app/globals.css` `@theme inline` **recalcula** a partir de `--radius:10px`: `md=8px`, `lg=10px`, `xl=14px`. As utilitárias Tailwind (`rounded-*`) usam os valores do `@theme inline` — que é o que vale em componente. Esta tabela e o `rounded:` do frontmatter documentam os valores **efetivos**.

**Whitespace philosophy:** denso mas respirável — é uma ferramenta de trabalho, prioriza densidade de informação (sidebar+KPIs+tabelas) sobre espaço de marketing.

## 6. Depth & Elevation

O sistema é **intencionalmente quase plano**. Hierarquia é construída por borda (`--border`) + contraste de superfície, não por sombra. As únicas sombras são de 1px.

| Level | Treatment | Use |
|---|---|---|
| 0 — flat | sem sombra, borda `--border` | cards padrão, containers, superfícies de leitura |
| 1 — glass inset | `inset 0 1px 0 rgba(255,255,255,.2)` + `0 1px 2px rgba(0,0,0,.05)` | botões sólidos (default, destructive) |
| 1 — hairline | `0 1px 2px rgba(0,0,0,.05)` (`shadow-sm`) | input, botão outline, pílula ativa de Tab, hover de card |

**Shadow philosophy:** não adicione `box-shadow` além desses níveis. Nada de sombras médias/grandes, nada de glow. O realce "glass" (inset branco) é exclusivo de botão sólido — não replicar em card ou input. Não há blur/glassmorphism no sistema (só o `backdrop-blur` do header sticky).

## 7. Do's and Don'ts

**Do**
- Use `#00753f` (`bg-primary`) só para ação/identidade; deixe a maior parte da UI em neutros cool-gray.
- Para foco de input, mantenha o **anel verde** `ring-primary/20` — é assinatura do sistema.
- Botão sempre 14px/600 com `tracking-tight`; título sempre `tracking-tight`.
- Componha Input dentro de FormField (Rota C); crie componente novo seguindo a árvore de decisão Rota A/B/C.
- Use `rounded-lg` (10px) como raio padrão; cards em `rounded-xl` (14px).

**Don't**
- **Não** use preto (`#000000`) ou cinza para CTA primário — a ação é verde `#00753f`; o shadcn default preto foi sobrescrito de propósito.
- **Não** use o verde de sucesso `success-600 #007a3a` (hue 155) como cor de ação, nem o verde de marca como "sucesso" — são hues distintas (160 vs 155) por decisão.
- **Não** aplique a sombra glass-inset (`inset 0 1px 0 rgba(255,255,255,.2)`) em card ou input — ela é exclusiva de botão sólido.
- **Não** adicione `box-shadow` médio/grande nem blur em cards — elevação é borda + 1px no máximo.
- **Não** escreva hex/px arbitrário em componente (`bg-[#22C55E]`, `rounded-[12px]`) — só token semântico (`bg-primary`) ou utilitário Tailwind (`text-sm`, `rounded-lg`).
- **Não** confie nos primitivos `--radius-md/lg/xl` para raciocinar sobre raio — use os valores efetivos do `@theme inline` (8/10/14px).
- **Não** trate `warning`/`info` como cores de marca — são defaults de engenharia, não vieram do Figma; valide com design.

## 8. Responsive Behavior

**Breakpoints:** Tailwind padrão (`sm` 640, `md` 768, `lg` 1024, `xl` 1280). Grids de styleguide usam `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`. KpiRow é "row responsiva" que colapsa em telas estreitas.

**Touch targets:** alturas de form garantem alvo confortável — botão 40px (`--height-form-sm`), input 44px (`--height-form-md`); ícone-botão `size-10` (40px). Mínimo prático ~32px (`xs`/`icon-xs`) só para barras densas.

**Container/collapse:** `max-w-6xl` central; AppSidebar colapsa largura com transição e fade-in do texto (`animate-sidebar-fade-in`, 150ms ease-in, delay 150ms até a largura terminar). Header vira sticky com blur.

## 9. Agent Prompt Guide

**Quick color reference**
- Ação/marca: `bg-primary` (`#00753f`), hover `bg-primary/90`, foco `ring-primary/20`
- Superfície: `bg-background`/`bg-card` (`#ffffff`), canvas `bg-neutral-50` (`#f8f8fa`)
- Texto: `text-foreground` (`#060b14`), muted `text-muted-foreground` (`#72767d`)
- Borda: `border-border` (`#e6e8ea`)
- Feedback: erro `#cb2f45`, sucesso `#007a3a`, warning `#e27300`, info `#0065b4`
- Badge primary: bg `#e8fbef` / text `#006133`

**Example component prompts**
1. "Gere um card de KPI: ícone verde em quadrado `rounded-lg` `bg-brand-50`, número 24px/700 tracking-tight, label 12px/500 `text-muted-foreground`, sem sombra, borda `border-border`."
2. "Botão primário de submit: `<Button>` default, label 'Salvar', 14px/600, verde `#00753f`, h-10, glass inset — não inventar sombra."
3. "Form de login: FormField com label 14px/500 + Input h-44 `rounded-lg`, foco anel verde, erro via `aria-invalid`. Botão primário full-width abaixo."
4. "Tabs de navegação de visão: variante pill (`bg-neutral-100`), aba ativa pílula branca `shadow-sm` font-semibold; adicionar TabBadge vermelho com contador na aba 'Pendências'."
5. "Tabela com TableHeader: toolbar com Tabs à esquerda, botões `outline` de export/filter à direita, chips de filtro abaixo. Cabeçalho neutro, zebra opcional por `bg-neutral-50`."

**Iteration guide**
- Se a UI sair preta/cinza no CTA → trocar para `bg-primary` (o verde é a ação).
- Se aparecer sombra média/glow → remover; só 1px sutil é permitido.
- Se surgir hex/px hardcoded → substituir por token semântico ou utilitário Tailwind.
- Se o raio parecer errado → conferir contra `@theme inline` (lg=10px, xl=14px), não contra os primitivos `--radius-*`.
- Token faltando? Não improvise: proponha o token, explique o papel semântico e pergunte antes de adicionar (ver `CLAUDE.md`/`AGENTS.md`).
