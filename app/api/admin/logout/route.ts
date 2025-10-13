import { NextResponse } from "next/server";

const AUTH_COOKIE_NAME = "ipd_admin_auth";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set({
    name: AUTH_COOKIE_NAME,
    value: "",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
  });
  console.info("[logout] Admin logged out and cookie cleared");
  return res;
}
