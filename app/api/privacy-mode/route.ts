import { NextRequest, NextResponse } from "next/server";
import { MODE_COOKIE, MODE_MAX_AGE, privacyModeForLocation } from "@/lib/consent";
import { resolveGeo } from "@/lib/geo";

export const dynamic = "force-dynamic";

// Recover the current location default when a cached page has no mode cookie.
export function GET(request: NextRequest) {
  const { country, region } = resolveGeo(request);
  const mode = privacyModeForLocation(country, region);
  const response = NextResponse.json({ mode }, { headers: { "cache-control": "no-store" } });
  response.cookies.set(MODE_COOKIE, mode, {
    maxAge: MODE_MAX_AGE, path: "/", sameSite: "lax", secure: request.nextUrl.protocol === "https:",
  });
  return response;
}
