export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, service, message } = body

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 })
    }

    // TODO: Connect to DB, send email, or AI CRM system
    console.log("Contact form submitted:", body)

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (err) {
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 })
  }
}
