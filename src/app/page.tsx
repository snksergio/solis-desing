import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-canvas">
      <div className="flex flex-col items-center gap-6">
        <div className="size-16 rounded-xl bg-primary flex items-center justify-center">
          <span className="text-2xl text-primary-foreground font-bold">S</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Sólis iGreen</h1>
        <p className="text-muted-foreground text-lg">
          Design System — Next.js + Tailwind v4 + shadcn/ui
        </p>
        <div className="flex gap-3">
          <Link href="/styleguide">
            <Button size="lg">Ver Styleguide</Button>
          </Link>
          <Button variant="outline" size="lg">
            Documentação
          </Button>
        </div>
      </div>
    </div>
  );
}
