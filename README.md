# Hackathon Starter Template

A production-minded, lightweight starter repository pairing a **Next.js App Router** frontend with a **FastAPI** backend. Designed to let hackathon teams jump straight into building features without spending precious hours configuring build tools, linters, formatters, API clients, or environment setups.

---

## Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | [Next.js](https://nextjs.org/) (App Router, Server Components), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) (strict mode), [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), [lucide-react](https://lucide.dev/), [pnpm](https://pnpm.io/) |
| **Backend** | [FastAPI](https://fastapi.tiangolo.com/), [Python 3.12+](https://www.python.org/), [Uvicorn](https://www.uvicorn.org/), [Pydantic v2](https://docs.pydantic.dev/), [pydantic-settings](https://docs.pydantic.dev/latest/concepts/pydantic_settings/), [uv](https://docs.astral.sh/uv/) |
| **Tooling** | [Ruff](https://docs.astral.sh/ruff/) (Python lint & format), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) (with Tailwind class sorting), [pytest](https://docs.pytest.org/), [EditorConfig](https://editorconfig.org/), [pre-commit](https://pre-commit.com/) |

---

## Repository Structure

```text
hackathon-starter/
├── web/                           # Next.js frontend application
│   ├── public/                    # Static public assets
│   ├── src/
│   │   ├── app/                   # App Router pages and global layouts
│   │   │   ├── globals.css        # Tailwind theme and CSS variables
│   │   │   ├── layout.tsx         # Root layout with fonts & metadata
│   │   │   ├── page.tsx           # Landing page with health indicator
│   │   │   └── favicon.ico        # Favicon icon
│   │   ├── components/            # Reusable React components
│   │   │   ├── ui/                # Generated shadcn/ui components (button, card, badge)
│   │   │   └── health-indicator.tsx # Live backend connectivity widget
│   │   ├── hooks/                 # Custom React hooks (useHealth)
│   │   ├── lib/                   # Utility libraries
│   │   │   ├── api.ts             # Typed HTTP client & error handler
│   │   │   └── utils.ts           # Class merging helper (cn)
│   │   └── types/                 # Shared TypeScript interfaces
│   ├── .env.example               # Example frontend environment variables
│   ├── .prettierrc.json           # Frontend Prettier configuration
│   ├── .prettierignore            # Frontend Prettier ignores
│   ├── components.json            # shadcn/ui configuration
│   ├── eslint.config.mjs          # Flat ESLint configuration
│   ├── next.config.ts             # Next.js configuration
│   ├── package.json               # Frontend dependencies and npm scripts
│   ├── postcss.config.mjs         # PostCSS configuration
│   ├── tsconfig.json              # TypeScript strict configuration
│   └── README.md                  # Frontend documentation
├── server/                        # FastAPI backend service
│   ├── routers/                   # Modular feature routers
│   │   └── __init__.py
│   ├── tests/                     # Pytest suite
│   │   ├── __init__.py
│   │   └── test_main.py           # Endpoint integration tests
│   ├── main.py                    # FastAPI application & route registration
│   ├── config.py                  # Pydantic Settings & CORS configuration
│   ├── schemas.py                 # Shared request/response Pydantic models
│   ├── utils.py                   # Shared helper functions (e.g. UTC timestamps)
│   ├── pyproject.toml             # Python dependencies, Ruff, and pytest configs
│   ├── .env.example               # Example backend environment variables
│   └── README.md                  # Backend documentation
├── resources/                     # Non-application assets and hackathon artifacts
│   ├── docs/                      # Challenge briefs, problem statements, PDFs
│   ├── datasets/                  # Sample CSVs, JSON fixtures, data dumps
│   ├── references/                # Cheatsheets, API docs, architecture sketches
│   └── README.md                  # Guide for the resources directory
├── .editorconfig                  # Consistent cross-editor whitespace settings
├── .gitignore                     # Git exclusions for dependencies, env, and caches
├── .pre-commit-config.yaml        # Git hooks configuration (whitespace, YAML, Ruff)
├── .prettierrc.json               # Root Prettier formatting configuration
├── .prettierignore                # Root Prettier ignore rules
├── Makefile                       # Development task automation commands
└── README.md                      # Project documentation (this file)
```

---

## Prerequisites

Ensure the following tools are installed on your machine:

1. **Node.js 20+** (Node 22 LTS recommended) — `node -v`
2. **pnpm 9+ or 10+** — `pnpm -v` (Install via `npm install -g pnpm` or `corepack enable pnpm`)
3. **Python 3.12+** — `python3 --version`
4. **uv** (Fast Python package manager) — `uv --version` (Install via `curl -LsSf https://astral.sh/uv/install.sh | sh`)
5. **Make** (standard on macOS and Linux) — `make --version`

---

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Configure Environment Variables

Create local environment files from the provided examples:

```bash
# Frontend configuration
cp web/.env.example web/.env.local

# Backend configuration
cp server/.env.example server/.env
```

Default settings:
- Frontend: `NEXT_PUBLIC_API_URL=http://localhost:8000`
- Backend: `APP_ENV=development`, `CORS_ORIGINS=http://localhost:3000`

### 3. Install All Dependencies

Install dependencies for both frontend and backend in one command:

```bash
make install
```

*(Alternatively: `cd server && uv sync` and `cd web && pnpm install`)*

---

## Running the Application

### Option A: Run Both Services Concurrently (Recommended)

Start both the Next.js frontend and FastAPI backend together:

```bash
make dev
```

- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Backend:** [http://localhost:8000](http://localhost:8000)
- **FastAPI Interactive Docs (Swagger):** [http://localhost:8000/docs](http://localhost:8000/docs)
- **Alternative Docs (ReDoc):** [http://localhost:8000/redoc](http://localhost:8000/redoc)

Press `Ctrl+C` to cleanly terminate both services simultaneously.

### Option B: Run Services Individually

In separate terminal windows:

```bash
# Terminal 1: Backend
make dev-server

# Terminal 2: Frontend
make dev-web
```

---

## Development Commands

All tasks can be executed from the repository root via `make`:

| Command | Action |
| :--- | :--- |
| `make install` | Install all dependencies (`uv sync` + `pnpm install`) |
| `make dev` | Start frontend and backend concurrently |
| `make dev-web` | Start Next.js development server |
| `make dev-server` | Start FastAPI with Uvicorn auto-reload |
| `make check` | Run all linting, formatting checks, typechecks, and tests |
| `make lint` | Run ESLint (web) and Ruff (server) |
| `make format` | Automatically format all code (Prettier + Ruff) |
| `make format-check` | Check code formatting without applying modifications |
| `make typecheck` | Run TypeScript strict typecheck in `web/` |
| `make test` | Run backend test suite via `pytest` |
| `make build` | Create optimized production bundle for Next.js |
| `make clean` | Remove cache files, test outputs, and build artifacts |

---

## API Endpoints & Contract

The FastAPI backend provides structured JSON responses:

### 1. `GET /`
Returns service discovery metadata.

**Response:**
```json
{
  "message": "Welcome to Hackathon API",
  "docs_url": "/docs",
  "health_url": "/health"
}
```

### 2. `GET /health`
Returns live operational health status.

**Response:**
```json
{
  "status": "ok",
  "app": "Hackathon API",
  "environment": "development",
  "timestamp": "2026-10-16T05:00:00.000000+00:00",
  "version": "0.1.0"
}
```

---

## Frontend-Backend Communication

Frontend API requests are handled by `web/src/lib/api.ts`:
- Reads `NEXT_PUBLIC_API_URL` (falls back to `http://localhost:8000`).
- Provides `apiFetch<T>(endpoint, options)` with automatic header management, type safety, and JSON parsing.
- Handles empty responses (`204 No Content`) and formats structured error messages from non-2xx responses.
- Catches network failures gracefully so the UI never crashes if the backend is down or restarting.

---

## Code Quality & Pre-commit

### Pre-commit Hooks (Optional)

Install pre-commit hooks to automatically check formatting and linting before committing:

```bash
uv run pre-commit install
```

Run hooks against all files manually:

```bash
uv run pre-commit run --all-files
```

---

## Hackathon Resources Folder

Use the root `resources/` folder for non-code assets:
- `resources/docs/`: Challenge descriptions, PDF requirements, judging rubrics, pitch outlines.
- `resources/datasets/`: Sample CSV files, JSON payloads, test data.
- `resources/references/`: Diagrams, competitor analysis, architecture references.

*Note: Never commit secret API keys or large private datasets (>50MB).*

---

## Deployment Notes

Both services are decoupled and independently deployable:

- **Frontend (Vercel / Netlify / Cloudflare Pages):**
  - Root directory: `web`
  - Build command: `pnpm build`
  - Output directory: `.next`
  - Environment variable: `NEXT_PUBLIC_API_URL=<production-backend-url>`
- **Backend (Render / Railway / Fly.io / Koyeb / AWS / GCP):**
  - Root directory: `server`
  - Start command: `uv run uvicorn main:app --host 0.0.0.0 --port $PORT`
  - Environment variables: `APP_ENV=production`, `CORS_ORIGINS=https://<your-frontend-domain>`
