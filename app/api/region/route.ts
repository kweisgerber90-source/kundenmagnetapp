// app/api/region/route.ts

export const runtime = "edge";
export const preferredRegion = ["fra1"]; // Frankfurt

export async function GET() {
  return new Response(
    JSON.stringify({ region: "fra1", message: "Hello from Frankfurt" }),
    { headers: { "Content-Type": "application/json" } }
  );
}
