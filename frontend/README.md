# Web Frontend — Next.js

A clean, production-minded Next.js frontend built with App Router, TypeScript (strict mode), Tailwind CSS, and shadcn/ui components.

## Tech Stack

- **Framework:** Next.js (App Router, Server Components by default)
- **Language:** TypeScript with strict mode
- **Styling:** Tailwind CSS & PostCSS
- **UI Components:** shadcn/ui (`src/components/ui/`)
- **Icons:** lucide-react
- **Package Manager:** pnpm
- **Code Quality:** ESLint & Prettier with Tailwind class sorting

## Quick Start

### 1. Prerequisites

- Node.js 20+ (recommended: Node 22+)
- pnpm 9+ or 10+ (`corepack enable pnpm` or `npm install -g pnpm`)

### 2. Environment Setup

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Default variables:

- `NEXT_PUBLIC_API_URL`: Backend URL (defaults to `http://localhost:8000`).

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Run Development Server

```bash
pnpm dev
```

The frontend will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command             | Description                                            |
| :------------------ | :----------------------------------------------------- |
| `pnpm dev`          | Start development server on port 3000                  |
| `pnpm build`        | Compile optimized production build                     |
| `pnpm start`        | Serve production build locally                         |
| `pnpm lint`         | Run ESLint across TypeScript and TSX files             |
| `pnpm typecheck`    | Run TypeScript compiler type checking (`tsc --noEmit`) |
| `pnpm format`       | Auto-format codebase using Prettier                    |
| `pnpm format:check` | Verify formatting without modifying files              |

## Folder Structure

```text
web/
├── public/                # Static assets (images, icons)
├── src/
│   ├── app/               # Next.js App Router pages and global layouts
│   │   ├── globals.css    # Tailwind styles and theme CSS variables
│   │   ├── layout.tsx     # Root HTML structure and font configuration
│   │   ├── page.tsx       # Minimal landing page with health status
│   │   └── favicon.ico    # Favicon asset
│   ├── components/        # Reusable shared components
│   │   ├── ui/            # shadcn/ui generated components (button, card, badge)
│   │   └── health-indicator.tsx # Live backend health checker
│   ├── hooks/             # Custom React hooks (e.g. useHealth)
│   ├── lib/               # Shared utilities
│   │   ├── api.ts         # Typed API client with baseUrl configuration
│   │   └── utils.ts       # Class merging helper (cn)
│   └── types/             # Shared TypeScript models and interfaces
├── .env.example           # Example environment template
├── .prettierrc.json       # Prettier configuration with Tailwind plugin
├── .prettierignore        # Exclusions for Prettier
├── components.json        # shadcn/ui configuration
├── eslint.config.mjs      # Flat ESLint configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration
└── tsconfig.json          # TypeScript strict configuration with `@/*` path alias
```
