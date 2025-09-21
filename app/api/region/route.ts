// app/api/region/route.ts

// Указываем, что это Edge Runtime
export const runtime = "edge";

// Указываем предпочтительный регион (Франкфурт)
export const preferredRegion = ["fra1"];

export async function GET() {
  return new Response(
    JSON.stringify({ region: "fra1", message: "Hello from Frankfurt" }),
    { headers: { "Content-Type": "application/json" } }
  );
}
