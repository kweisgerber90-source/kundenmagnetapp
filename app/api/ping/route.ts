import { NextResponse } from "next/server";
import { vercelPreferredRegion } from "@/lib/region";

// Optional: still exports, but global vercel.json already sets FRA for all functions.
export const preferredRegion = vercelPreferredRegion;

export async function GET() {
  return NextResponse.json({
    ok: true,
    regionHint: preferredRegion,
    now: new Date().toISOString()
  });
}
