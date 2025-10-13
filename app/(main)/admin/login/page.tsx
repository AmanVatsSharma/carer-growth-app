"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const nextUrl = useMemo(() => {
    const next = searchParams.get("next");
    if (next && next.startsWith("/dashboard")) return next; // only allow dashboard paths
    return "/dashboard";
  }, [searchParams]);

  useEffect(() => {
    const reason = searchParams.get("reason");
    if (reason === "config") {
      console.error("Admin password not configured. Please set env variables.");
      setErrorMessage("Admin configuration missing. Contact system administrator.");
    }
    if (reason === "error") {
      setErrorMessage("Unexpected error. Please try again.");
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, next: nextUrl }),
      });

      if (res.ok) {
        console.log("Login success. Redirecting to", nextUrl);
        router.replace(nextUrl);
      } else {
        const data = await res.json().catch(() => ({ message: "Login failed" }));
        console.warn("Login failed:", data);
        setErrorMessage(data?.message || "Invalid password");
      }
    } catch (err) {
      console.error("Login error:", err);
      setErrorMessage("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Admin Login</CardTitle>
          <CardDescription>Enter the admin password to access the dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="password">Password</label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>
            {errorMessage ? (
              <p className="text-sm text-red-500">{errorMessage}</p>
            ) : null}
            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
