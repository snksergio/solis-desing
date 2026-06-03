"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const variants = [
  "default",
  "outline",
  "secondary",
  "ghost",
  "destructive",
  "link",
] as const;

const sizes = ["xs", "sm", "default", "lg"] as const;
const iconSizes = ["icon-xs", "icon-sm", "icon", "icon-lg"] as const;

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="rounded-xl border border-border bg-card p-6">
        {children}
      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export default function ButtonsPage() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur px-6 py-4">
          <div className="flex items-center justify-between max-w-5xl mx-auto">
            <div>
              <h1 className="text-xl font-bold tracking-tight">
                Button — Todas as variações
              </h1>
              <p className="text-sm text-muted-foreground">
                Figma node 262:450 | 6 variants × 8 sizes × 3 states
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setDark(!dark)}
              >
                {dark ? "Light" : "Dark"}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
                Voltar
              </Button>
            </div>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-12">
          {/* ── 1. Variants ── */}
          <Section
            title="Variants"
            description="Cada variante com seu estilo visual. Primary e Destructive: filled com glass effect. Outline: borda + shadow."
          >
            <div className="flex flex-col gap-6">
              {variants.map((variant) => (
                <div key={variant} className="flex items-center gap-4">
                  <span className="w-28 text-xs font-mono text-muted-foreground shrink-0">
                    {variant}
                  </span>
                  <Button variant={variant}>
                    <DownloadIcon />
                    Realizar ativação
                  </Button>
                </div>
              ))}
            </div>
          </Section>

          {/* ── 2. Sizes ── */}
          <Section
            title="Sizes"
            description="xs (28px) → sm (32px) → default (40px, Figma) → lg (44px)"
          >
            <div className="flex flex-col gap-6">
              {sizes.map((size) => (
                <div key={size} className="flex items-center gap-4">
                  <span className="w-28 text-xs font-mono text-muted-foreground shrink-0">
                    {size}
                  </span>
                  <div className="flex items-center gap-3">
                    <Button size={size}>
                      <DownloadIcon />
                      Botão {size}
                    </Button>
                    <Button variant="outline" size={size}>
                      Outline {size}
                    </Button>
                    <Button variant="destructive" size={size}>
                      Destructive {size}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ── 3. Icon Only ── */}
          <Section
            title="Icon Only"
            description="Botões quadrados para ações com ícone. icon-xs (28px) → icon-sm (32px) → icon (40px) → icon-lg (44px)"
          >
            <div className="flex flex-col gap-6">
              {iconSizes.map((size) => (
                <div key={size} className="flex items-center gap-4">
                  <span className="w-28 text-xs font-mono text-muted-foreground shrink-0">
                    {size}
                  </span>
                  <div className="flex items-center gap-3">
                    <Button size={size}>
                      <DownloadIcon />
                    </Button>
                    <Button variant="outline" size={size}>
                      <SettingsIcon />
                    </Button>
                    <Button variant="secondary" size={size}>
                      <PlusIcon />
                    </Button>
                    <Button variant="ghost" size={size}>
                      <SettingsIcon />
                    </Button>
                    <Button variant="destructive" size={size}>
                      <TrashIcon />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ── 4. States ── */}
          <Section
            title="States"
            description="Enabled, Disabled. Hover e Focus visíveis ao interagir."
          >
            <div className="flex flex-col gap-6">
              {variants.map((variant) => (
                <div key={variant} className="flex items-center gap-4">
                  <span className="w-28 text-xs font-mono text-muted-foreground shrink-0">
                    {variant}
                  </span>
                  <div className="flex items-center gap-3">
                    <Button variant={variant}>Enabled</Button>
                    <Button variant={variant} disabled>
                      Disabled
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ── 5. With Icons ── */}
          <Section
            title="Com ícones"
            description="Ícone à esquerda, à direita, ou ambos. Tamanho do ícone: 18px (Figma)."
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="w-28 text-xs font-mono text-muted-foreground shrink-0">
                  icon left
                </span>
                <Button>
                  <DownloadIcon />
                  Baixar relatório
                </Button>
                <Button variant="outline">
                  <PlusIcon />
                  Novo registro
                </Button>
                <Button variant="destructive">
                  <TrashIcon />
                  Excluir
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-28 text-xs font-mono text-muted-foreground shrink-0">
                  icon right
                </span>
                <Button>
                  Exportar
                  <DownloadIcon />
                </Button>
                <Button variant="outline">
                  Opções
                  <ChevronDownIcon />
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-28 text-xs font-mono text-muted-foreground shrink-0">
                  both sides
                </span>
                <Button>
                  <DownloadIcon />
                  Realizar ativação de UCs
                  <ChevronDownIcon />
                </Button>
                <Button variant="destructive">
                  <TrashIcon />
                  Excluir selecionados
                  <ChevronDownIcon />
                </Button>
              </div>
            </div>
          </Section>

          {/* ── 6. Figma Reference ── */}
          <Section
            title="Referência Figma"
            description="Variações exatas do Figma: 3 cores × 3 modos (text+icon, icon only, text+icon+dropdown)"
          >
            <div className="flex flex-col gap-6">
              {/* Row 1: Text + Icon */}
              <div className="flex items-center gap-4">
                <span className="w-28 text-xs font-mono text-muted-foreground shrink-0">
                  text + icon
                </span>
                <Button>
                  <DownloadIcon />
                  Realizar ativação de UCs
                </Button>
                <Button variant="outline">
                  <DownloadIcon />
                  Realizar ativação de UCs
                </Button>
                <Button variant="destructive">
                  <DownloadIcon />
                  Realizar ativação de UCs
                </Button>
              </div>

              {/* Row 2: Icon Only */}
              <div className="flex items-center gap-4">
                <span className="w-28 text-xs font-mono text-muted-foreground shrink-0">
                  icon only
                </span>
                <Button size="icon">
                  <DownloadIcon />
                </Button>
                <Button variant="outline" size="icon">
                  <DownloadIcon />
                </Button>
                <Button variant="destructive" size="icon">
                  <DownloadIcon />
                </Button>
              </div>

              {/* Row 3: With Dropdown */}
              <div className="flex items-center gap-4">
                <span className="w-28 text-xs font-mono text-muted-foreground shrink-0">
                  dropdown
                </span>
                <Button>
                  Realizar ativação de UCs
                  <ChevronDownIcon />
                </Button>
                <Button variant="outline">
                  Realizar ativação de UCs
                  <ChevronDownIcon />
                </Button>
                <Button variant="destructive">
                  Realizar ativação de UCs
                  <ChevronDownIcon />
                </Button>
              </div>
            </div>
          </Section>

          {/* ── 7. Real-world examples ── */}
          <Section
            title="Exemplos reais (telas do Figma)"
            description="Botões como aparecem nas telas do Sólis iGreen."
          >
            <div className="flex flex-col gap-6">
              {/* Header CTA */}
              <div className="flex items-center gap-4">
                <span className="w-28 text-xs font-mono text-muted-foreground shrink-0">
                  header CTA
                </span>
                <Button>Baixar relatório de faturas</Button>
                <Button>Colocar em verificação</Button>
              </div>

              {/* Dialog actions */}
              <div className="flex items-center gap-4">
                <span className="w-28 text-xs font-mono text-muted-foreground shrink-0">
                  dialog
                </span>
                <div className="flex gap-2 rounded-lg border border-border bg-muted/30 p-4">
                  <Button variant="outline">Cancelar</Button>
                  <Button variant="destructive">Confirmar</Button>
                </div>
                <div className="flex gap-2 rounded-lg border border-border bg-muted/30 p-4">
                  <Button variant="outline">Cancelar</Button>
                  <Button>Salvar Alterações</Button>
                </div>
              </div>

              {/* Form actions */}
              <div className="flex items-center gap-4">
                <span className="w-28 text-xs font-mono text-muted-foreground shrink-0">
                  form
                </span>
                <Button>Aplicar e Salvar alterações</Button>
              </div>

              {/* Table toolbar */}
              <div className="flex items-center gap-4">
                <span className="w-28 text-xs font-mono text-muted-foreground shrink-0">
                  toolbar
                </span>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon-sm">
                    <SettingsIcon />
                  </Button>
                  <Button variant="outline" size="sm">
                    <DownloadIcon />
                    Exportar
                    <ChevronDownIcon />
                  </Button>
                </div>
              </div>

              {/* Messaging */}
              <div className="flex items-center gap-4">
                <span className="w-28 text-xs font-mono text-muted-foreground shrink-0">
                  messaging
                </span>
                <Button>
                  Enviar mensagem
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                    <path d="m21.854 2.147-10.94 10.939" />
                  </svg>
                </Button>
              </div>
            </div>
          </Section>

          {/* ── 8. Full Matrix ── */}
          <Section
            title="Matriz completa"
            description="Todas as combinações variant × size."
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left text-xs font-mono text-muted-foreground p-2 w-28">
                      variant / size
                    </th>
                    {sizes.map((s) => (
                      <th
                        key={s}
                        className="text-left text-xs font-mono text-muted-foreground p-2"
                      >
                        {s}
                      </th>
                    ))}
                    <th className="text-left text-xs font-mono text-muted-foreground p-2">
                      icon
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {variants.map((variant) => (
                    <tr key={variant} className="border-t border-border">
                      <td className="text-xs font-mono text-muted-foreground p-2 align-middle">
                        {variant}
                      </td>
                      {sizes.map((size) => (
                        <td key={size} className="p-2 align-middle">
                          <Button variant={variant} size={size}>
                            Label
                          </Button>
                        </td>
                      ))}
                      <td className="p-2 align-middle">
                        {variant !== "link" && (
                          <Button variant={variant} size="icon">
                            <PlusIcon />
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        </main>
      </div>
    </div>
  );
}
