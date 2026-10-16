.PHONY: help install dev dev-web dev-server lint format format-check typecheck test check build clean

SHELL := /bin/bash

help:
	@echo "Available commands:"
	@echo "  make install       Install frontend and backend dependencies"
	@echo "  make dev           Start both frontend and backend concurrently"
	@echo "  make dev-web       Start Next.js frontend only"
	@echo "  make dev-server    Start FastAPI backend only"
	@echo "  make lint          Run ESLint (web) and Ruff (server)"
	@echo "  make format        Format web and server source code"
	@echo "  make format-check  Check formatting without modifying files"
	@echo "  make typecheck     Run TypeScript checks in web"
	@echo "  make test          Run backend pytest suite"
	@echo "  make check         Run linting, typechecking, tests, and format check"
	@echo "  make build         Build Next.js production bundle"
	@echo "  make clean         Clean build artifacts and caches"

install:
	@echo "==> Installing backend dependencies with uv..."
	cd server && uv sync
	@echo "==> Installing frontend dependencies with pnpm..."
	cd web && pnpm install

dev:
	@echo "Starting Next.js frontend (http://localhost:3000) and FastAPI backend (http://localhost:8000)..."
	@bash -c '\
		trap "trap - SIGTERM && kill 0" SIGINT SIGTERM EXIT; \
		(cd server && uv run uvicorn main:app --reload --host 0.0.0.0 --port 8000) & \
		(cd web && pnpm dev) & \
		wait'

dev-web:
	cd web && pnpm dev

dev-server:
	cd server && uv run uvicorn main:app --reload --host 0.0.0.0 --port 8000

lint:
	@echo "==> Linting frontend..."
	cd web && pnpm run lint
	@echo "==> Linting backend..."
	cd server && uv run ruff check .

format:
	@echo "==> Formatting frontend..."
	cd web && pnpm run format
	@echo "==> Formatting backend..."
	cd server && uv run ruff format .

format-check:
	@echo "==> Checking frontend formatting..."
	cd web && pnpm run format:check
	@echo "==> Checking backend formatting..."
	cd server && uv run ruff format --check .

typecheck:
	@echo "==> Checking frontend types..."
	cd web && pnpm run typecheck

test:
	@echo "==> Running backend tests..."
	cd server && uv run pytest

check: lint format-check typecheck test
	@echo ""
	@echo "✓ All repository quality checks passed successfully!"

build:
	@echo "==> Building frontend production bundle..."
	cd web && pnpm run build

clean:
	@echo "==> Cleaning cache and build artifacts..."
	rm -rf web/.next web/out web/dist server/.pytest_cache server/.ruff_cache
