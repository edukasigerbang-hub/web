"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/Button";

/** Tombol keluar (logout) di dashboard — pakai Supabase auth.signOut(). */
export function LogoutButton() {
  const { logout, loading } = useAuth();
  const router = useRouter();

  return (
    <Button
      href="/login"
      variant="secondary"
      size="sm"
      icon="arrow"
      onClick={async (e) => {
        e.preventDefault();
        await logout();
        router.push("/login");
      }}
    >
      {loading ? "…" : "Keluar"}
    </Button>
  );
}