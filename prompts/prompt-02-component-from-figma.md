# Prompt 2: Criação/Adaptação de Componente a partir do Figma

> **Skill necessária:** `reader-skills-design`
> Carregue a meta-skill e leia especificamente:
> - `shadcn-ui-official` — critical rules, component selection, CLI, docs command
> - `ui-ux-pro-max` — accessibility, interaction states, touch targets
> - `tailwind-design-system-v4` — CVA patterns, @theme

---

## Contexto

- O Figma **NÃO possui tokens** — valores visuais (hex, px) aplicados diretamente
- O **design system foi criado no Prompt 1** — tokens em `src/themes/default/`
  e shadcn override em `src/styles/globals.css`
- O **shadcn/ui já está instalado** com os valores sobrescritos pelo Prompt 1
- Os componentes no Figma mostram **apenas a variação padrão de uso** — geralmente
  sem estados (hover, disabled, focus), sem múltiplos tamanhos, sem todas as props.
  São **referências visuais do estilo**, não especificações completas.

## Objetivo

Ler o componente no Figma, extrair o **estilo visual** (cores, radius, font, spacing),
e **adaptar o componente shadcn equivalente** para refletir esse estilo — mantendo
todas as variants, sizes, states e props que o shadcn já oferece.

**Resumo:** O Figma define o **visual**. O shadcn define a **API e comportamento**.

---

## Input

O usuário fornece:

1. **URL do Figma** do componente
2. **Se existe equivalente no shadcn** (ex: "é um Button", "é um Card", "não tem no shadcn")
3. **Screenshots** (opcional, como reforço visual)

```
Componente: Button
Equivalente shadcn: Sim — shadcn Button
Figma: https://www.figma.com/design/{fileKey}/{fileName}?node-id={nodeId}&m=dev
```

---

## Fase 1: Leitura do Figma

### Passo 1 — Screenshot
```
Figma:get_screenshot(fileKey, nodeId)
```

### Passo 2 — Design Context
```
Figma:get_design_context(fileKey, nodeId, clientFrameworks: "react", clientLanguages: "typescript")
```

Extrair do componente no Figma:
- **Cores** → background, texto, borda, ícone (hex values)
- **Tipografia** → font-family, size, weight
- **Dimensões** → height, padding, gap, border-radius
- **Ícones** → posição (esquerda, direita, ambos), tamanho
- **Variantes visíveis** → quais variações o Figma mostra (ex: filled verde, outline, destructive)

### O que o Figma NÃO vai mostrar (e está OK):
- Estados hover, focus, active, disabled → **herdar do shadcn**
- Múltiplos tamanhos (sm, md, lg) → **herdar do shadcn, ajustar valores**
- Props como `asChild`, `loading` → **herdar do shadcn**
- Acessibilidade (ARIA, focus ring) → **herdar do shadcn**

---

## Fase 2: Mapeamento Visual → Tokens

Para cada valor visual do Figma, mapear para token existente:

```
Figma hex/px  →  Token shadcn (bg-primary, text-muted-foreground)
              →  Token semântico (bg-bg-primary-subtle)
              →  Utility Tailwind nativo (text-sm, rounded-xl, h-10)
              →  PERGUNTAR (se nada casar)
```

### Tabela rápida de mapeamento

#### Cores do Figma → Tokens
| Figma mostra | Usar no código |
|-------------|---------------|
| Verde (cor primária em CTA) | `bg-primary text-primary-foreground` |
| Verde claro (fundo sutil) | `bg-bg-primary-subtle text-fg-primary` |
| Cinza claro (secondary) | `bg-secondary text-secondary-foreground` |
| Branco com borda (outline) | `bg-background border-border text-foreground` |
| Vermelho (destructive) | `bg-destructive text-destructive-foreground` |
| Texto escuro | `text-foreground` |
| Texto cinza | `text-muted-foreground` |
| Borda padrão | `border-border` |

#### Tipografia → Tailwind nativo
| Figma | Tailwind |
|-------|---------|
| 12px Medium | `text-xs font-medium` |
| 13-14px Medium | `text-sm font-medium` |
| 14px Semibold | `text-sm font-semibold` |
| 16px Semibold | `text-base font-semibold` |

#### Dimensões → Tailwind nativo
| Figma | Tailwind |
|-------|---------|
| height 36px | `h-9` |
| height 40px | `h-10` |
| height 44px | `h-11` |
| height 48px | `h-12` |
| radius 8px | `rounded-lg` |
| radius 12px | `rounded-xl` |
| radius 16px | `rounded-2xl` |
| padding 12px | `px-3` |
| padding 16px | `px-4` |
| padding 20px | `px-5` |
| padding 24px | `px-6` |

---

## Fase 3: Estratégia de Implementação

### Rota A — Componente shadcn existe (MAIS COMUM)

> **O Figma mostra a aparência. O shadcn fornece a estrutura.**

**Passo 1 — Consultar docs do shadcn**
```bash
npx shadcn@latest docs [component-name]
```
Ler: variants disponíveis, props, exemplos de uso, sub-componentes.

**Passo 2 — Instalar (se não tiver)**
```bash
npx shadcn@latest add [component-name]
```

**Passo 3 — Verificar se o Prompt 1 já resolve**

Na maioria dos casos, o shadcn override do Prompt 1 (`globals.css`) já faz
o componente renderizar no tema certo. Por exemplo:
- O Button do shadcn usa `bg-primary` → que já foi sobrescrito para verde
- O Card usa `bg-card` → que já foi sobrescrito para branco/surface
- O Input usa `border-input` → que já foi sobrescrito para a borda do projeto

**Se o override do Prompt 1 já resolve: NÃO modifique o componente.**
Apenas documente: "Button shadcn funciona out-of-the-box com os tokens do Prompt 1."

**Passo 4 — Ajustar APENAS se o Figma mostrar algo que o shadcn + Prompt 1 não cobrem**

Exemplos de quando ajustar:
- O Figma mostra um radius diferente do padrão shadcn
- O Figma mostra heights de form que não casam com os sizes do shadcn
- O Figma tem uma variante que não existe no shadcn (ex: "soft", "accent")
- O Figma mostra ícone com posicionamento específico

**Como ajustar:** Editar o componente shadcn instalado em `src/components/ui/[component].tsx`.

Exemplo — adaptar Button para casar com o Figma:
```tsx
// src/components/ui/button.tsx
// Editado para refletir o design do Figma mantendo API shadcn completa

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap font-semibold",
    "rounded-xl",                    // ← Figma: radius 12px (era rounded-md)
    "transition-colors duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        // ✅ Tokens shadcn — valores vêm do Prompt 1 (verde, não preto)
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",

        // ✅ Variantes NOVAS se o Figma mostrar algo que shadcn não tem
        // soft: "bg-bg-primary-subtle text-fg-primary hover:bg-bg-primary-subtle/80",
      },
      size: {
        default: "h-10 px-4 text-sm",    // ← ajustar se Figma mostrar diferente
        sm: "h-9 px-3 text-sm",
        lg: "h-11 px-5 text-base",
        xl: "h-12 px-6 text-base",       // ← adicionar se Figma tiver tamanho extra
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",                    // ← ajustar para o tamanho padrão do Figma
    },
  }
)
```

**Regra:** Mantenha TODAS as variants e sizes que o shadcn já tem.
Adicione novas se o Figma precisar. Nunca remova.

---

### Rota B — Componente shadcn não existe (custom)

Quando o componente é totalmente custom (não tem equivalente no shadcn):

Estrutura:
```
src/components/custom/
└── ComponentName/
    ├── index.ts
    ├── component.tsx
    └── component.types.ts
```

Padrão com CVA:
```tsx
"use client"

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const componentVariants = cva(
  // Base (valores mapeados do Figma → tokens)
  "flex items-center gap-3 rounded-xl border p-4 transition-colors",
  {
    variants: {
      variant: {
        default: "bg-card border-border hover:bg-accent",
        active: "bg-bg-primary-subtle border-border-primary",
      },
      size: {
        sm: "h-10 p-3 gap-2",
        md: "h-12 p-4 gap-3",
        lg: "h-14 p-5 gap-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

interface ComponentNameProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {
  title: string
  description?: string
  icon?: React.ReactNode
}

export function ComponentName({
  title, description, icon, variant, size, className, ...props
}: ComponentNameProps) {
  return (
    <div className={cn(componentVariants({ variant, size }), className)} {...props}>
      {icon && (
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
          {icon}
        </div>
      )}
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-semibold text-foreground">{title}</span>
        {description && (
          <span className="text-xs text-muted-foreground">{description}</span>
        )}
      </div>
    </div>
  )
}
```

---

### Rota C — Composição de shadcn + custom

Quando o Figma mostra algo que é um **agrupamento de componentes shadcn**:

```tsx
// Exemplo: FilterBar do Figma = Input + Button + DropdownMenu
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

export function FilterBar({ onSearch, filters }: FilterBarProps) {
  return (
    <div className="flex items-center gap-3">
      <Input placeholder="Buscar..." className="max-w-sm" />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <FilterIcon data-icon="inline-start" />
            Filtros
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {filters.map(f => (
            <DropdownMenuItem key={f.id}>{f.label}</DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
```

---

## Fase 4: Estender além do Figma

O Figma mostra a **variação padrão**. O componente final deve ter:

### Estados (herdar do shadcn ou implementar)
| Estado | Como implementar |
|--------|-----------------|
| Default | Estilo base do CVA |
| Hover | `hover:bg-primary/90` (já vem no shadcn) |
| Focus | `focus-visible:ring-2 focus-visible:ring-ring` (já vem no shadcn) |
| Active | `active:scale-[0.98]` (se quiser feedback tátil) |
| Disabled | `disabled:opacity-50 disabled:pointer-events-none` (já vem no shadcn) |
| Loading | Compor com Spinner + `disabled` (shadcn pattern) |

### Tamanhos (inferir a partir do padrão do Figma)
Se o Figma mostra só 1 tamanho (ex: h-10 px-4):
```
sm → h-9 px-3 text-sm         (uma escala abaixo)
default → h-10 px-4 text-sm   (o que o Figma mostra)
lg → h-11 px-5 text-base      (uma escala acima)
xl → h-12 px-6 text-base      (duas escalas acima, se necessário)
icon → size-10                 (quadrado, só ícone)
```

### Variantes (inferir a partir das cores do projeto)
Se o Figma mostra só o botão verde (default):
```
default → bg-primary (verde — o que o Figma mostra)
secondary → bg-secondary (cinza — padrão shadcn)
outline → border + bg-background (branco com borda — padrão shadcn)
ghost → bg-transparent hover:bg-accent (sem fundo — padrão shadcn)
destructive → bg-destructive (vermelho — padrão shadcn)
link → text-primary underline (link — padrão shadcn)
```
**Manter todas as variants shadcn.** Adicionar novas apenas se o Figma exigir.

---

## Fase 5: Documentar Mapeamento

```markdown
## Componente: [Nome]
### Estratégia: [Rota A: shadcn adaptado | Rota B: custom | Rota C: composição]
### Base shadcn: [nome do componente shadcn ou "N/A"]

### Figma → Código
| Propriedade | Figma (raw) | Código (token) | Nota |
|------------|-------------|---------------|------|
| Background | #22C55E | `bg-primary` | Via Prompt 1 override |
| Text | #FFFFFF | `text-primary-foreground` | |
| Radius | 12px | `rounded-xl` | Tailwind nativo |
| Height | 40px | `h-10` | Tamanho default |
| Padding | 16px horizontal | `px-4` | |
| Font | 14px Semibold | `text-sm font-semibold` | |
| Icon size | 20px | `size-5` | [&_svg]:size-5 |

### O que veio do Figma vs o que veio do shadcn
| Aspecto | Fonte |
|---------|-------|
| Cor primária verde | Figma → Prompt 1 override |
| Radius 12px (rounded-xl) | Figma → ajuste no componente |
| Variants outline/ghost/secondary | shadcn (padrão) |
| Estados hover/focus/disabled | shadcn (padrão) |
| Sizes sm/md/lg | shadcn (escala inferida do Figma) |
| Props asChild, className | shadcn (padrão) |
| Acessibilidade (focus ring, ARIA) | shadcn (padrão) |

### Modificações no shadcn original
| O que mudou | De (shadcn default) | Para (Figma) |
|------------|-------------------|-------------|
| Radius | rounded-md | rounded-xl |
| Default size height | h-10 | h-11 |
| Font weight base | font-medium | font-semibold |
```

---

## Fase 6: Checklist

### Fidelidade ao Figma
- [ ] Cor primária corresponde ao Figma
- [ ] Radius corresponde ao Figma
- [ ] Tipografia (size + weight) corresponde ao Figma
- [ ] Altura do tamanho default corresponde ao Figma
- [ ] Ícone na posição correta

### Completude além do Figma
- [ ] Todas as variants shadcn mantidas (default, outline, ghost, secondary, destructive, link)
- [ ] Todos os sizes disponíveis (sm, default, lg, icon + extras se necessário)
- [ ] Estados hover, focus, active, disabled funcionando
- [ ] Dark mode funciona automaticamente (tokens respondem)

### Código
- [ ] Zero valores hardcoded (hex, px arbitrários)
- [ ] `cn()` para classes condicionais
- [ ] `gap-*` não `space-y-*`
- [ ] `size-*` quando w = h
- [ ] TypeScript interfaces corretas
- [ ] `ref` como prop (React 19, sem forwardRef)
- [ ] Icons com `data-icon` attribute (shadcn pattern)

### Acessibilidade
- [ ] Focus ring visível
- [ ] Touch target mínimo 44px
- [ ] ARIA attributes quando necessário
- [ ] Disabled state previne interação

---

## Tratamento de Discrepâncias

### O Figma mostra um estilo que shadcn não tem
```
Figma: botão com fundo verde claro e texto verde (estilo "soft/tonal")
shadcn: não tem variant "soft"
→ ADICIONAR variante nova ao shadcn:
  soft: "bg-bg-primary-subtle text-fg-primary hover:bg-bg-primary-subtle/80"
→ Manter todas as variants existentes
```

### O Figma mostra um radius diferente do shadcn default
```
Figma: radius 12px em todos os botões
shadcn default: rounded-md (6px)
→ Alterar o base do CVA para rounded-xl
→ Documentar: "Radius ajustado de rounded-md para rounded-xl conforme Figma"
```

### O Figma mostra uma cor que não tem token
```
Figma: cor #7C3AED (roxo) no botão
Tokens disponíveis: nenhum roxo
→ NÃO usar bg-[#7C3AED]
→ PERGUNTAR: "O Figma mostra um botão roxo que não tem token correspondente.
   Devo criar um token novo ou usar outro existente?"
```

### O Figma mostra algo simples que no shadcn é complexo
```
Figma: dropdown simples com lista de opções
shadcn: DropdownMenu tem Trigger, Content, Group, Item, Separator, etc.
→ Usar a estrutura completa do shadcn mesmo que o Figma mostre simples
→ O Figma mostra o visual, o shadcn define a arquitetura
```

---

## Regras

### Prioridade de decisão
1. **Existe no shadcn?** → Use shadcn. Adapte apenas o visual.
2. **É composição de shadcn?** → Componha. Ex: FilterBar = Input + Button + Dropdown.
3. **Não existe em nenhum lugar?** → Crie custom com CVA + tokens.

### O que adaptar do shadcn (visual do Figma)
- Radius, heights, font weight/size, spacing
- Cores só se o Prompt 1 não resolver (raro)
- Variantes novas que o Figma exige

### O que NUNCA modificar do shadcn (comportamento/API)
- Props existentes (variant, size, asChild, className)
- Estados (hover, focus, disabled, active)
- Acessibilidade (focus ring, ARIA)
- Composição interna (sub-componentes)
- Variants existentes (nunca remover, só adicionar)

### Zero arbitrary values
```
❌ bg-[#22C55E]  text-[14px]  rounded-[12px]  h-[46px]
✅ bg-primary    text-sm      rounded-xl      h-11
```

---

## Como Usar Este Prompt

```
Use a reader-skills-design.

Preciso adaptar o componente [NOME] a partir do Figma.
Equivalente shadcn: [Sim — shadcn Component | Não — custom]

O design system já foi criado (Prompt 1) com tokens em
src/themes/default/ e shadcn override em globals.css.

O Figma mostra apenas a variação padrão de uso (sem estados,
sem todos os tamanhos). Use o shadcn como base e adapte o visual
para corresponder ao Figma, mantendo toda a API e comportamento
do shadcn (variants, sizes, states, acessibilidade).

Figma: [URL do componente]
Screenshot em anexo para referência.

Siga o prompt-02-component-from-figma.md para o workflow.
```
