import { NextResponse } from "next/server";

import { Resend } from "resend";

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch (err) {
    console.error('[api/send] failed to parse JSON body', err);
    return NextResponse.json({ success: false, error: 'Invalid JSON body' }, { status: 400 });
  }

  const { email, subject, message } = body;

  console.log('[api/send] POST body:', { email, subject, message });

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.FROM_EMAIL;

  if (!apiKey) {
    console.error('[api/send] Missing RESEND_API_KEY');
    return NextResponse.json({ success: false, error: 'Missing RESEND_API_KEY in environment' }, { status: 500 });
  }

  if (!fromEmail) {
    console.error('[api/send] Missing FROM_EMAIL');
    return NextResponse.json({ success: false, error: 'Missing FROM_EMAIL in environment' }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    // Log resend response (useful for debugging delivery problems)
    console.log('[api/send] resend response:', data);

    // If the Resend response contains an error object, treat it as a failure
    if (data && data.error) {
      console.error('[api/send] resend reported error:', data.error);
      const statusCode = (data.error && data.error.statusCode) || 500;
      return NextResponse.json({ success: false, error: data.error }, { status: statusCode });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    // Log full error for debugging in dev
    console.error('[api/send] send error:', error);
    const message = error && error.message ? error.message : String(error);
    const stack = error && error.stack ? error.stack : undefined;
    return NextResponse.json({ success: false, error: message, ...(process.env.NODE_ENV === 'development' && { stack }) }, { status: 500 });
  }
}
