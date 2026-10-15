import type { NextRequest } from "next/server";

export function resolveGeo(request: NextRequest): { country: string | null; region: string | null } {
  // Test overrides must never change the policy applied on the production site.
  const allowOverride = process.env.VERCEL_ENV
    ? process.env.VERCEL_ENV !== "production"
    : process.env.NODE_ENV !== "production";
  const override = allowOverride ? request.nextUrl.searchParams.get("wr-geo") : null;
  if (override) {
    const [country, region = null] = override.split("-", 2);
    return { country, region };
  }
  return {
    country: request.headers.get("x-vercel-ip-country"),
    region: request.headers.get("x-vercel-ip-country-region"),
  };
}
