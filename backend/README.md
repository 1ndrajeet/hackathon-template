# Server Backend — FastAPI

A lightweight, high-performance FastAPI backend managed with `uv`.

## Tech Stack

- **Framework:** FastAPI
- **Server:** Uvicorn
- **Configuration:** pydantic-settings
- **Data Validation:** Pydantic v2
- **Package Management:** uv
- **Linter & Formatter:** Ruff
- **Testing:** pytest & httpx

## Quick Start

### 1. Prerequisites

- Python 3.12+
- `uv` package manager (`curl -LsSf https://astral.sh/uv/install.sh | sh`)

### 2. Environment Setup

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Default variables:
- `APP_ENV`: Environment identifier (e.g. `development`, `production`).
- `CORS_ORIGINS`: Comma-separated list of allowed browser origins (default: `http://localhost:3000`).

### 3. Install Dependencies

Install dependencies into the local virtual environment:

```bash
uv sync
```

### 4. Run Development Server

Start the Uvicorn server with auto-reload:

```bash
uv run uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at [http://localhost:8000](http://localhost:8000).

## API Documentation

FastAPI automatically generates interactive OpenAPI documentation:
- **Swagger UI:** [http://localhost:8000/docs](http://localhost:8000/docs)
- **ReDoc:** [http://localhost:8000/redoc](http://localhost:8000/redoc)

## Core Endpoints

| Method | Path | Description |
| :--- | :--- | :--- |
| `GET` | `/` | API welcome metadata, health URL, and documentation links |
| `GET` | `/health` | Health check endpoint returning status, app name, and UTC timestamp |

## Quality & Testing

### Run Tests

```bash
uv run pytest
```

### Linting

```bash
uv run ruff check .
```

### Formatting

```bash
# Check formatting
uv run ruff format --check .

# Auto-format
uv run ruff format .
```

## Folder Structure

```text
server/
├── routers/           # Feature-specific router modules
│   └── __init__.py
├── tests/             # Pytest test suite
│   ├── __init__.py
│   └── test_main.py   # Root and health endpoint tests
├── config.py          # Environment settings with pydantic-settings
├── main.py            # FastAPI app initialization and route registration
├── pyproject.toml     # Project metadata, dependencies, and Ruff config
├── schemas.py         # Shared Pydantic response models
├── utils.py           # Shared utilities (e.g. UTC timestamp generator)
├── .env.example       # Example environment variables
└── README.md          # Server documentation
```
