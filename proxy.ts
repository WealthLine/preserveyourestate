import { NextRequest, NextResponse } from "next/server";
import { MODE_COOKIE, MODE_MAX_AGE, privacyModeForLocation } from "@/lib/consent";
import { resolveGeo } from "@/lib/geo";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const { country, region } = resolveGeo(request);
  response.cookies.set(MODE_COOKIE, privacyModeForLocation(country, region), {
    maxAge: MODE_MAX_AGE, path: "/", sameSite: "lax", secure: request.nextUrl.protocol === "https:",
  });
  return response;
}

export const config = { matcher: ["/((?!api|_next|.*\\..*).*)"] };
