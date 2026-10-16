import { HealthIndicator } from "@/components/health-indicator";
import { Terminal, ExternalLink, BookOpen, Layers } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-12 md:p-24">
      <div className="w-full max-w-4xl space-y-12">
        {/* Header Section */}
        <section className="space-y-4 text-center sm:text-left">
          <div className="bg-muted/50 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
            <Layers className="h-3.5 w-3.5" />
            <span>Hackathon Starter Kit</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Build fast. Ship faster.
          </h1>
          <p className="text-muted-foreground max-w-2xl text-base sm:text-lg">
            A production-minded foundation pairing a Next.js App Router frontend with a FastAPI
            backend. Ready for rapid development without configuration overhead.
          </p>
        </section>

        {/* Integration Status Section */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
              Service Health
            </h2>
            <p className="text-muted-foreground text-xs">
              Live status check to verify frontend-to-backend communication.
            </p>
          </div>
          <HealthIndicator />
        </section>

        {/* Quick Links Section */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href="http://localhost:8000/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card hover:border-foreground/20 hover:bg-muted/40 rounded-lg border p-4 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-medium">
                <BookOpen className="text-muted-foreground group-hover:text-foreground h-4 w-4" />
                <span>FastAPI Swagger Docs</span>
              </div>
              <ExternalLink className="text-muted-foreground h-3.5 w-3.5" />
            </div>
            <p className="text-muted-foreground mt-2 text-xs">
              Interactive OpenAPI documentation and API testing console at{" "}
              <code className="bg-muted rounded px-1 py-0.5 font-mono">/docs</code>.
            </p>
          </a>

          <div className="bg-card rounded-lg border p-4">
            <div className="flex items-center gap-2 font-medium">
              <Terminal className="text-muted-foreground h-4 w-4" />
              <span>Quick Commands</span>
            </div>
            <div className="text-muted-foreground mt-2 space-y-1 font-mono text-xs">
              <p>
                <code className="text-foreground">make dev</code> — run both services
              </p>
              <p>
                <code className="text-foreground">make check</code> — run all checks
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-muted-foreground w-full max-w-4xl pt-12 text-center text-xs sm:text-left">
        <p>Hackathon Starter Template &bull; Next.js App Router + FastAPI</p>
      </footer>
    </main>
  );
}
