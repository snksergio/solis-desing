"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent, TabBadge } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function TabsPage() {
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur px-6 py-4">
          <div className="flex items-center justify-between max-w-5xl mx-auto">
            <div>
              <h1 className="text-xl font-bold tracking-tight">
                Tabs — Todas as variações
              </h1>
              <p className="text-sm text-muted-foreground">
                Figma node 388:6682 | Default (pill) + Line variant
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setDark(!dark)}>
                {dark ? "Light" : "Dark"}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
                Voltar
              </Button>
            </div>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-12">

          {/* Default variant (Figma) */}
          <section className="flex flex-col gap-4">
            <div>
              <h2 className="text-lg font-semibold">Default (pill)</h2>
              <p className="text-sm text-muted-foreground">
                Figma: bg #f6f6f6, active = white card + shadow + semibold
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <Tabs defaultValue="listagem">
                <TabsList>
                  <TabsTrigger value="listagem">Listagem</TabsTrigger>
                  <TabsTrigger value="historico">Histórico de ações</TabsTrigger>
                </TabsList>
                <TabsContent value="listagem" className="mt-4">
                  <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
                    Conteúdo da aba Listagem
                  </div>
                </TabsContent>
                <TabsContent value="historico" className="mt-4">
                  <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
                    Conteúdo da aba Histórico de ações
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* With badges */}
          <section className="flex flex-col gap-4">
            <div>
              <h2 className="text-lg font-semibold">Com badges</h2>
              <p className="text-sm text-muted-foreground">
                Figma: badge vermelho 16px com contador (TabBadge)
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <Tabs defaultValue="historico">
                <TabsList>
                  <TabsTrigger value="historico">
                    Histórico de ações
                    <TabBadge count={1} />
                  </TabsTrigger>
                  <TabsTrigger value="pendentes">
                    Pendentes
                    <TabBadge count={5} />
                  </TabsTrigger>
                  <TabsTrigger value="concluidos">Concluídos</TabsTrigger>
                </TabsList>
                <TabsContent value="historico" className="mt-4">
                  <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
                    Histórico com 1 nova ação
                  </div>
                </TabsContent>
                <TabsContent value="pendentes" className="mt-4">
                  <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
                    5 itens pendentes
                  </div>
                </TabsContent>
                <TabsContent value="concluidos" className="mt-4">
                  <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
                    Itens concluídos
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Multiple tabs */}
          <section className="flex flex-col gap-4">
            <div>
              <h2 className="text-lg font-semibold">Múltiplas abas</h2>
              <p className="text-sm text-muted-foreground">
                Exemplo real: telas de detalhamento do Figma
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <Tabs defaultValue="detalhamento">
                <TabsList>
                  <TabsTrigger value="detalhamento">Detalhamento</TabsTrigger>
                  <TabsTrigger value="instalacoes">Instalações</TabsTrigger>
                  <TabsTrigger value="logs">Logs</TabsTrigger>
                  <TabsTrigger value="arquivos">Arquivos</TabsTrigger>
                  <TabsTrigger value="comentarios">Comentários</TabsTrigger>
                  <TabsTrigger value="extratos">Extratos</TabsTrigger>
                </TabsList>
                <TabsContent value="detalhamento" className="mt-4">
                  <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
                    CNPJ, Razão Social, Dados de Contato, Endereço...
                  </div>
                </TabsContent>
                <TabsContent value="instalacoes" className="mt-4">
                  <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
                    Prazo de Vigência, Data de Início, Status...
                  </div>
                </TabsContent>
                <TabsContent value="logs" className="mt-4">
                  <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
                    Ação, Data Hora, Campo, Valor Antigo, Valor Novo...
                  </div>
                </TabsContent>
                <TabsContent value="arquivos" className="mt-4">
                  <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
                    Upload de arquivos, PDF, JPG, PNG
                  </div>
                </TabsContent>
                <TabsContent value="comentarios" className="mt-4">
                  <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
                    Comentários do contrato
                  </div>
                </TabsContent>
                <TabsContent value="extratos" className="mt-4">
                  <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
                    Extratos de compensação
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Line variant */}
          <section className="flex flex-col gap-4">
            <div>
              <h2 className="text-lg font-semibold">Line variant</h2>
              <p className="text-sm text-muted-foreground">
                Variante alternativa com underline (shadcn padrão, mantida)
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <Tabs defaultValue="faturas">
                <TabsList variant="line">
                  <TabsTrigger value="faturas">Faturas</TabsTrigger>
                  <TabsTrigger value="tarifas">Tarifas</TabsTrigger>
                  <TabsTrigger value="extrato">Extrato</TabsTrigger>
                </TabsList>
                <TabsContent value="faturas" className="mt-4">
                  <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
                    Lista de faturas
                  </div>
                </TabsContent>
                <TabsContent value="tarifas" className="mt-4">
                  <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
                    Tarifas configuradas
                  </div>
                </TabsContent>
                <TabsContent value="extrato" className="mt-4">
                  <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
                    Extrato mensal
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Disabled */}
          <section className="flex flex-col gap-4">
            <div>
              <h2 className="text-lg font-semibold">Disabled</h2>
              <p className="text-sm text-muted-foreground">
                Tab desabilitada (herdado do shadcn)
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <Tabs defaultValue="ativo">
                <TabsList>
                  <TabsTrigger value="ativo">Ativo</TabsTrigger>
                  <TabsTrigger value="bloqueado" disabled>Bloqueado</TabsTrigger>
                  <TabsTrigger value="outro">Outro</TabsTrigger>
                </TabsList>
                <TabsContent value="ativo" className="mt-4">
                  <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
                    Conteúdo ativo
                  </div>
                </TabsContent>
                <TabsContent value="outro" className="mt-4">
                  <div className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
                    Outro conteúdo
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Mapping doc */}
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
                      ["TabsList bg", "#f6f6f6", "bg-neutral-100"],
                      ["TabsList size", "h 40px, p 4px, r 10px", "h-10 p-1 rounded-lg"],
                      ["TabsList gap", "2px", "gap-0.5"],
                      ["Tab active bg", "white + shadow", "bg-card shadow-sm"],
                      ["Tab active text", "#060a13 SemiBold 14px", "text-foreground font-semibold text-sm"],
                      ["Tab inactive text", "#777c82 Medium 14px", "text-muted-foreground font-medium"],
                      ["Tab size", "h 32px, px 16px, r 8px", "h-8 px-4 rounded-md"],
                      ["Tracking", "-0.5px", "tracking-tight"],
                      ["Badge", "#dd4a58 16px circle", "bg-critical-600 size-4 rounded-full"],
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
{`import { Tabs, TabsList, TabsTrigger, TabsContent, TabBadge } from "@/components/ui/tabs"

<Tabs defaultValue="listagem">
  <TabsList>
    <TabsTrigger value="listagem">Listagem</TabsTrigger>
    <TabsTrigger value="historico">
      Histórico de ações
      <TabBadge count={3} />
    </TabsTrigger>
  </TabsList>
  <TabsContent value="listagem">...</TabsContent>
  <TabsContent value="historico">...</TabsContent>
</Tabs>

{/* Line variant */}
<Tabs defaultValue="faturas">
  <TabsList variant="line">
    <TabsTrigger value="faturas">Faturas</TabsTrigger>
    <TabsTrigger value="tarifas">Tarifas</TabsTrigger>
  </TabsList>
  ...
</Tabs>`}
              </pre>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
