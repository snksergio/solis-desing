# Prompt 3: Regras de Arquitetura de Componentes Custom

> Anexar junto com o `prompt-02-component-from-figma.md` quando criar
> componentes custom (Rota B). Para componentes shadcn (Rota A), este
> prompt NÃO se aplica — use o shadcn como está.

---

## Princípio Fundamental: Componentes Burros

Componentes custom são **presentacionais**. Não possuem lógica de negócio,
não fazem fetch de dados, não gerenciam estado global. Recebem props,
renderizam UI, disparam callbacks.

```
✅ O componente RECEBE dados e RENDERIZA
✅ O componente DISPARA callbacks (onClick, onChange, onSelect)
❌ O componente NÃO faz fetch/API calls
❌ O componente NÃO gerencia estado de aplicação
❌ O componente NÃO importa stores/contexts de negócio
```

---

## Separation of Concerns (Obrigatório)

Cada componente custom tem **3 arquivos obrigatórios** + 2 opcionais:

```
src/components/custom/
└── ComponentName/
    ├── index.ts                    # Barrel export (OBRIGATÓRIO)
    ├── ComponentName.tsx           # View — renderiza UI (OBRIGATÓRIO)
    ├── ComponentName.styles.ts     # Estilos — CVA + classes (OBRIGATÓRIO)
    ├── ComponentName.types.ts      # Types — interfaces + tipos (OBRIGATÓRIO)
    ├── ComponentName.hooks.ts      # Hooks internos do componente (OPCIONAL)
    └── ComponentName.utils.ts      # Helpers puros (OPCIONAL)
```

### Regra de ouro: cada arquivo tem UMA responsabilidade

| Arquivo | Contém | NÃO contém |
|---------|--------|------------|
| `.tsx` | JSX, composição, cn(), refs | Strings de classes longas, lógica de negócio |
| `.styles.ts` | CVA variants, objetos de estilo | JSX, hooks, lógica |
| `.types.ts` | Interfaces, types, enums | Implementação, valores |
| `.hooks.ts` | useState, useCallback internos | Fetch, stores, contextos globais |
| `.utils.ts` | Funções puras (format, validate) | Side effects, DOM manipulation |
| `index.ts` | Re-exports | Lógica, implementação |

---

## Arquivo 1: `ComponentName.types.ts`

Define TODAS as interfaces. Exporta apenas tipos, nunca valores.

```tsx
import type { ReactNode, HTMLAttributes } from "react"

/**
 * Props do ComponentName
 *
 * @example
 * <ComponentName
 *   title="Instalações"
 *   icon={<HomeIcon />}
 *   active
 * />
 */
export interface ComponentNameProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Texto principal */
  title: string
  /** Descrição opcional */
  description?: string
  /** Ícone (ReactNode — aceita qualquer ícone) */
  icon?: ReactNode
  /** Variante visual */
  variant?: "default" | "outlined" | "filled"
  /** Estado ativo */
  active?: boolean
  /** Tamanho */
  size?: "sm" | "md" | "lg"
  /** Classes adicionais via cn() */
  className?: string
  /** Filhos */
  children?: ReactNode
}

/**
 * Props de sub-componente (se houver)
 */
export interface ComponentNameItemProps {
  /** Label do item */
  label: string
  /** Valor único para identificação */
  value: string
  /** Ícone do item */
  icon?: ReactNode
  /** Se está selecionado */
  selected?: boolean
  /** Callback de seleção */
  onSelect?: (value: string) => void
}
```

**Regras:**
- JSDoc em **cada prop**
- Extender de `HTMLAttributes` para herdar props nativas (onClick, id, etc.)
- `className` sempre presente para extensibilidade
- Nunca exportar valores, apenas `type` e `interface`

---

## Arquivo 2: `ComponentName.styles.ts`

Centraliza **TODOS** os estilos. O `.tsx` não deve ter strings de classe longas.

```tsx
import { cva } from "class-variance-authority"

/**
 * Estilos do ComponentName
 *
 * Regras:
 * - ZERO valores hardcoded (bg-[#xxx], text-[14px], rounded-[12px])
 * - Tokens shadcn para cores: bg-primary, text-muted-foreground, border-border
 * - Tokens semânticos para nuances: bg-bg-primary-subtle, text-fg-default
 * - Tailwind nativo para layout: gap-4, p-3, rounded-xl, text-sm
 */

// ── Container principal ──
export const containerVariants = cva(
  // Base (sempre aplicado)
  [
    "flex items-center gap-3",
    "rounded-xl border p-4",
    "transition-colors duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-card border-border hover:bg-accent",
        outlined: "bg-transparent border-border hover:bg-muted",
        filled: "bg-primary border-transparent text-primary-foreground",
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

// ── Estilos estáticos (sem variantes) ──
export const styles = {
  iconWrapper: {
    base: "flex shrink-0 items-center justify-center rounded-lg bg-muted",
    sizes: {
      sm: "size-8",
      md: "size-10",
      lg: "size-12",
    },
    active: "bg-bg-primary-subtle text-fg-primary",
  },

  content: {
    wrapper: "flex flex-col gap-0.5 min-w-0",
    title: "text-sm font-semibold text-foreground truncate",
    description: "text-xs text-muted-foreground truncate",
    titleActive: "text-fg-primary",
  },

  indicator: {
    base: "shrink-0 transition-transform duration-200",
    active: "text-fg-primary",
    inactive: "text-muted-foreground",
  },
} as const
```

**Regras:**
- CVA para tudo que tem `variants` (container, botões, etc.)
- Objeto `styles` para estilos estáticos (ícone, texto, etc.)
- `as const` no objeto de estilos para type safety
- Comentar seções por área do componente
- **Nenhum JSX, nenhum hook, nenhuma lógica**

---

## Arquivo 3: `ComponentName.tsx`

View pura. Compõe classes com `cn()`, renderiza JSX, delega callbacks.

```tsx
"use client"

import { cn } from "@/lib/utils"
import type { ComponentNameProps } from "./ComponentName.types"
import { containerVariants, styles } from "./ComponentName.styles"

export function ComponentName({
  title,
  description,
  icon,
  variant = "default",
  active = false,
  size = "md",
  className,
  children,
  ...props
}: ComponentNameProps) {
  return (
    <div
      className={cn(
        containerVariants({ variant, size }),
        active && "border-border-primary bg-bg-primary-subtle",
        className
      )}
      {...props}
    >
      {/* Ícone */}
      {icon && (
        <div
          className={cn(
            styles.iconWrapper.base,
            styles.iconWrapper.sizes[size],
            active && styles.iconWrapper.active
          )}
        >
          {icon}
        </div>
      )}

      {/* Conteúdo */}
      <div className={styles.content.wrapper}>
        <span className={cn(
          styles.content.title,
          active && styles.content.titleActive
        )}>
          {title}
        </span>
        {description && (
          <span className={styles.content.description}>
            {description}
          </span>
        )}
      </div>

      {children}
    </div>
  )
}

ComponentName.displayName = "ComponentName"
```

**Regras do .tsx:**
- **ZERO strings de classe longas inline** — tudo vem do `.styles.ts`
- `cn()` para composição condicional
- Props desestruturadas com defaults
- `...props` spread para herdar atributos nativos
- `displayName` definido
- Sem `useState`, `useEffect` diretamente — se precisar, move pro `.hooks.ts`
- Sem lógica de negócio — apenas renderização e composição

**O que é permitido no .tsx:**
```tsx
✅ cn(styles.x, active && styles.y, className)  // composição de classes
✅ {icon && <div>...</div>}                       // renderização condicional
✅ {items.map(item => <Item key={item.id} />)}    // iteração de lista
✅ onClick={onSelect}                              // delegação de callback

❌ const data = await fetch(...)                   // fetch no componente
❌ const [items, setItems] = useState([])           // estado de dados
❌ useEffect(() => { loadData() }, [])              // side effects de dados
❌ if (user.role === "admin") ...                   // lógica de negócio
```

**O que é permitido em termos de estado:**
```tsx
✅ useState para UI interna (isOpen, isHovered)     // estado de apresentação
✅ useRef para DOM refs                             // referências DOM
❌ useState para dados de negócio                   // sobe pro pai/hook
❌ useContext de stores globais                      // injeta via props
```

---

## Arquivo 4: `index.ts`

Barrel export limpo. Só re-exports.

```tsx
export { ComponentName } from "./ComponentName"
export type { ComponentNameProps } from "./ComponentName.types"

// Sub-componentes (se houver)
export { ComponentNameItem } from "./ComponentName"
export type { ComponentNameItemProps } from "./ComponentName.types"
```

---

## Arquivo 5: `ComponentName.hooks.ts` (Opcional)

Para estado de **UI interna** do componente. Nunca para lógica de negócio.

```tsx
import { useState, useCallback } from "react"

/**
 * Hook para gerenciar estado de expansão/collapse
 * Uso interno do ComponentName — não exportar publicamente
 */
export function useCollapsible(defaultOpen = false) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const toggle = useCallback(() => setIsOpen(prev => !prev), [])
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return { isOpen, toggle, open, close }
}
```

**Permitido em hooks:**
```
✅ Estado de UI: isOpen, isExpanded, activeIndex, searchQuery
✅ Refs: useRef para scroll, focus management
✅ Callbacks puros: toggle, select, filter local
❌ API calls, fetch, mutations
❌ Context de negócio (useAuth, useStore)
❌ Router navigation
```

---

## Arquivo 6: `ComponentName.utils.ts` (Opcional)

Funções puras sem side effects.

```tsx
/**
 * Trunca texto com ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text
}

/**
 * Gera iniciais do nome para avatar
 */
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}
```

---

## Componentes Compostos (com sub-componentes)

Para componentes complexos como Sidebar, use composição:

```
src/components/custom/
└── Sidebar/
    ├── index.ts
    ├── Sidebar.tsx              # Container principal
    ├── Sidebar.styles.ts        # Estilos do container
    ├── Sidebar.types.ts         # Types do container + sub-componentes
    ├── Sidebar.hooks.ts         # useCollapsible, useSidebarState
    ├── SidebarCategory.tsx      # Sub-componente: item de categoria
    ├── SidebarMenuItem.tsx      # Sub-componente: item de sub-menu
    ├── SidebarHeader.tsx        # Sub-componente: header com logo
    └── SidebarFooter.tsx        # Sub-componente: footer com user
```

**Regras para sub-componentes:**
- Types de todos ficam em `Sidebar.types.ts` (arquivo único de types)
- Estilos compartilhados ficam em `Sidebar.styles.ts`
- Sub-componentes podem ter estilos inline simples se forem pequenos
- Se um sub-componente crescer demais, crie `SidebarCategory.styles.ts`
- Todos exportados via `index.ts`

```tsx
// index.ts
export { Sidebar } from "./Sidebar"
export { SidebarCategory } from "./SidebarCategory"
export { SidebarMenuItem } from "./SidebarMenuItem"
export type {
  SidebarProps,
  SidebarCategoryProps,
  SidebarMenuItemProps,
} from "./Sidebar.types"
```

---

## Checklist de Arquitetura

### Separação de Concerns
- [ ] `.tsx` não tem strings de classe longas (>3 classes inline)
- [ ] `.tsx` não tem lógica de negócio
- [ ] `.tsx` não faz fetch/API calls
- [ ] `.styles.ts` não tem JSX nem hooks
- [ ] `.types.ts` não tem implementação
- [ ] `.hooks.ts` não tem lógica de negócio (só UI state)

### Estrutura
- [ ] Pasta com nome do componente em PascalCase
- [ ] Todos os 3 arquivos obrigatórios presentes
- [ ] Barrel export em index.ts
- [ ] DisplayName definido

### Componente "Burro"
- [ ] Recebe dados via props
- [ ] Renderiza UI
- [ ] Dispara callbacks (não executa ações)
- [ ] Sem useState para dados de negócio
- [ ] Sem useEffect para fetch
- [ ] Sem import de stores/contexts globais

### Estilos
- [ ] CVA para tudo com variants
- [ ] Objeto `styles` para estáticos
- [ ] `as const` no objeto de estilos
- [ ] cn() para composição no .tsx
- [ ] Zero valores hardcoded

---

## Como Usar

Anexe este documento junto com o `prompt-02-component-from-figma.md`:

```
Use a reader-skills-design.

Preciso criar o componente [NOME] a partir do Figma.
Equivalente shadcn: NÃO — componente custom.

[... resto do prompt 2 ...]

IMPORTANTE: Siga as regras de arquitetura do
prompt-03-component-architecture.md em anexo.
O componente deve ser "burro" (presentacional) com
separação de concerns:
- .tsx → apenas view/render
- .styles.ts → todos os estilos (CVA + objetos)
- .types.ts → todas as interfaces
- .hooks.ts → apenas estado de UI (se necessário)
```
