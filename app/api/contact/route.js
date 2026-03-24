export async function POST(request) {
  try {
    const body = await request.json();
    // Placeholder: log or forward to email service later
    console.log('Contact form submission:', body);
    return Response.json({ success: true }, { status: 200 });
  } catch {
    return Response.json({ success: false }, { status: 500 });
  }
}
