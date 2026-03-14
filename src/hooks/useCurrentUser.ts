"use client";

import { useEffect, useState } from "react";

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
};

export function useCurrentUser(): UseCurrentUserState {
  const [state, setState] = useState<UseCurrentUserState>({
    user: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchUser() {
      try {
        const res = await fetch("/api/auth/me", {
          credentials: "include",
        });

        if (!res.ok) {
          if (!isMounted) return;
          setState({
            user: null,
            loading: false,
            error: res.status === 401 ? "Not authenticated" : "Failed to load user.",
          });
          return;
        }

        const data = await res.json();

        if (!isMounted) return;
        setState({
          user: data.user as CurrentUser,
          loading: false,
          error: null,
        });
      } catch (err) {
        if (!isMounted) return;
        setState({
          user: null,
          loading: false,
          error: "Failed to load user.",
        });
      }
    }

    fetchUser();

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
}

