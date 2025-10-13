import { NextRequest, NextResponse } from "next/server";

const AUTH_COOKIE_NAME = "ipd_admin_auth";

async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const password = (body?.password ?? "").toString();
    const next = (body?.next ?? "/dashboard").toString();

    const adminPassword = process.env.ADMIN_DASHBOARD_PASSWORD;
    const cookieSalt = process.env.ADMIN_COOKIE_SALT || "";

    if (!adminPassword) {
      console.error("[login] Missing ADMIN_DASHBOARD_PASSWORD env");
      return NextResponse.json({ message: "Server not configured" }, { status: 500 });
    }

    if (!password || password !== adminPassword) {
      console.warn("[login] Invalid password attempt");
      return NextResponse.json({ message: "Invalid password" }, { status: 401 });
    }

    // Compute token and set as HTTP-only cookie
    const token = await sha256Hex(`${adminPassword}:${cookieSalt}`);

    const response = NextResponse.json({ ok: true }, { status: 200 });
    response.cookies.set({
      name: AUTH_COOKIE_NAME,
      value: token,
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    try {
      // Basic allowlist: only redirect to /dashboard paths
      const url = new URL(next, request.url);
      if (url.pathname.startsWith("/dashboard")) {
        response.headers.set("X-Redirect-After-Login", url.pathname + url.search);
      } else {
        response.headers.set("X-Redirect-After-Login", "/dashboard");
      }
    } catch {
      response.headers.set("X-Redirect-After-Login", "/dashboard");
    }

    console.info("[login] Admin login success");
    return response;
  } catch (error) {
    console.error("[login] Unexpected error:", error);
    return NextResponse.json({ message: "Unexpected error" }, { status: 500 });
  }
}
