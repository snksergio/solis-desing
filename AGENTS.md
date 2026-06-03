<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Design System — Sólis iGreen

Este projeto segue um design system documentado em [`DESIGN.md`](./DESIGN.md).
**Sempre leia o `DESIGN.md` antes de gerar, refatorar ou estilizar qualquer UI.**

Regras inegociáveis:
- **Zero valores hardcoded.** Nunca use hex/px arbitrário (`bg-[#22C55E]`, `rounded-[12px]`).
  Use só token semântico (`bg-primary`, `text-muted-foreground`) ou utilitário Tailwind
  (`text-sm`, `rounded-lg`). A cor de ação é o verde `bg-primary` — o preto do shadcn foi
  sobrescrito de propósito.
- **Pipeline de tokens em 3 camadas:** primitivo OKLCH (`themes/default/primitives.css`) →
  semântico (`semantic.css` / `dark.css`) → utilitário Tailwind (`@theme inline` em
  `globals.css`). Nunca use primitivo direto em componente; consuma o semântico.
- **Raio:** use os valores EFETIVOS do `@theme inline` (`rounded-lg`=10px padrão,
  `rounded-xl`=14px cards), não os primitivos `--radius-*` (que estão sobrescritos).
- **Árvore de decisão de componente** (Rota A/B/C) e anatomia/decision-logic de cada átomo
  estão no `DESIGN.md` §4 e em `/styleguide`.
- **Token faltando?** Não improvise: proponha o token, explique o papel semântico e
  pergunte antes de adicionar.

Export DTCG dos tokens em [`tokens.json`](./tokens.json) (handoff / Figma Tokens).
`DESIGN.md` foi extraído do código via skill `/design-md extract-code` (modalidade C).
