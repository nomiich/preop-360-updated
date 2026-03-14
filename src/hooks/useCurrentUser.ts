"use client";

import { useCallback, useEffect, useState } from "react";

type CurrentUser = {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  avatarUrl: string | null;
  isAdmin: boolean;
};

type UseCurrentUserState = {
  user: CurrentUser | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
};

function normalizeUser(raw: Record<string, unknown> | null): CurrentUser | null {
  if (!raw) return null;
  return {
    id: raw.id as string,
    email: (raw.email ?? "") as string,
    firstName: (raw.firstName ?? raw.first_name ?? null) as string | null,
    lastName: (raw.lastName ?? raw.last_name ?? null) as string | null,
    avatarUrl: (raw.avatarUrl ?? raw.avatar_url ?? null) as string | null,
    isAdmin: Boolean(raw.isAdmin ?? raw.is_admin),
  };
}

export function useCurrentUser(): UseCurrentUserState {
  const [state, setState] = useState<Omit<UseCurrentUserState, "refetch">>({
    user: null,
    loading: true,
    error: null,
  });

  const fetchUser = useCallback(async () => {
    setState((s) => ({ ...s, loading: true, error: null }));
    try {
      const res = await fetch("/api/auth/me", {
        credentials: "include",
      });

      if (!res.ok) {
        setState({
          user: null,
          loading: false,
          error: res.status === 401 ? "Not authenticated" : "Failed to load user.",
        });
        return;
      }

      const data = await res.json();
      const user = normalizeUser(data.user ?? null);

      setState({
        user,
        loading: false,
        error: null,
      });
    } catch {
      setState({
        user: null,
        loading: false,
        error: "Failed to load user.",
      });
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return { ...state, refetch: fetchUser };
}

