"use client";

import { useCallback, useEffect, useState } from "react";
import { getBackendHealth } from "@/lib/api";
import type { HealthResponse } from "@/types";

export type HealthState = "loading" | "connected" | "unavailable";

export interface UseHealthResult {
  state: HealthState;
  data: HealthResponse | null;
  error: string | null;
  lastChecked: Date | null;
  checkHealth: () => Promise<void>;
}

export function useHealth(): UseHealthResult {
  const [state, setState] = useState<HealthState>("loading");
  const [data, setData] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);

  const checkHealth = useCallback(async () => {
    setState("loading");
    setError(null);
    try {
      const response = await getBackendHealth();
      setData(response);
      setState("connected");
      setError(null);
    } catch (err) {
      setData(null);
      setState("unavailable");
      setError(err instanceof Error ? err.message : "Backend is unreachable");
    } finally {
      setLastChecked(new Date());
    }
  }, []);

  useEffect(() => {
    let isCancelled = false;

    async function initialCheck() {
      try {
        const response = await getBackendHealth();
        if (!isCancelled) {
          setData(response);
          setState("connected");
          setError(null);
          setLastChecked(new Date());
        }
      } catch (err) {
        if (!isCancelled) {
          setData(null);
          setState("unavailable");
          setError(err instanceof Error ? err.message : "Backend is unreachable");
          setLastChecked(new Date());
        }
      }
    }

    void initialCheck();

    return () => {
      isCancelled = true;
    };
  }, []);

  return {
    state,
    data,
    error,
    lastChecked,
    checkHealth,
  };
}
