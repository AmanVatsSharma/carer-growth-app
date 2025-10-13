import { NextRequest, NextResponse } from "next/server";

// Protect all /dashboard routes using a simple password gate backed by env vars.
// The client receives an HTTP-only cookie after successful login via /api/admin/login.
// In middleware (Edge runtime), we validate that cookie before allowing access.

const AUTH_COOKIE_NAME = "ipd_admin_auth";
const LOGIN_PATH = "/admin/login";

async function sha256Hex(input: string): Promise<string> {
  // Web Crypto API for Edge runtime (middleware)
  const data = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Skip if not dashboard; matcher below should already ensure this, but keep defense-in-depth.
  if (!pathname.startsWith("/dashboard")) {
    return NextResponse.next();
  }

  const adminPassword = process.env.ADMIN_DASHBOARD_PASSWORD;
  const cookieSalt = process.env.ADMIN_COOKIE_SALT || "";

  // If config missing, redirect to login with reason to avoid accidental public exposure
  if (!adminPassword) {
    console.error("[middleware] Missing ADMIN_DASHBOARD_PASSWORD. Blocking dashboard access.");
    const url = new URL(LOGIN_PATH, request.url);
    url.searchParams.set("next", pathname + search);
    url.searchParams.set("reason", "config");
    return NextResponse.redirect(url);
  }

  try {
    const providedToken = request.cookies.get(AUTH_COOKIE_NAME)?.value || "";
    const expectedToken = await sha256Hex(`${adminPassword}:${cookieSalt}`);

    if (providedToken && providedToken === expectedToken) {
      console.debug("[middleware] Auth cookie valid. Allowing access to", pathname);
      return NextResponse.next();
    }

    // Not authenticated; redirect to login while preserving next
    const loginUrl = new URL(LOGIN_PATH, request.url);
    loginUrl.searchParams.set("next", pathname + search);
    console.info("[middleware] Missing/invalid auth cookie. Redirecting to", loginUrl.toString());
    return NextResponse.redirect(loginUrl);
  } catch (error) {
    console.error("[middleware] Error during auth check:", error);
    const loginUrl = new URL(LOGIN_PATH, request.url);
    loginUrl.searchParams.set("next", pathname + search);
    loginUrl.searchParams.set("reason", "error");
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
