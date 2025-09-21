export const config = {
  runtime: 'edge',
  regions: ['fra1'], // Frankfurt
}

export async function GET() {
  return new Response(
    JSON.stringify({ region: 'fra1', message: 'Hello from Frankfurt' }),
    { headers: { 'Content-Type': 'application/json' } }
  )
}
