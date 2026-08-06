// Netlify Function (v2). Handles POST /api/contact and sends the enquiry
// through Resend. Requires the RESEND_API_KEY environment variable, set in
// Netlify under Site configuration > Environment variables.
//
// FROM must be an address on a domain verified in Resend. 1402celsius.com must
// therefore be added and verified in Resend (Domains > Add Domain, then publish
// the DKIM and SPF records it gives you on the 1402celsius.com DNS). Until that
// verification is green, Resend rejects the send and the form returns a 502.

const FROM = '1402 Celsius <web@1402celsius.com>';
const TO = ['info@1402celsius.com'];

const clean = (s) => String(s == null ? '' : s).slice(0, 4000).trim();
const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(s || ''));
const json = (obj, status) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export default async (req) => {
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  let b = {};
  try { b = await req.json(); } catch { return json({ error: 'Bad request.' }, 400); }

  // Honeypot: bots fill hidden fields. Return success so they stop retrying.
  if (b.website) return json({ ok: true }, 200);

  const firstName = clean(b.firstName);
  const lastName = clean(b.lastName);
  const email = clean(b.email);
  const company = clean(b.company);
  const area = clean(b.areaOfInterest);
  const message = clean(b.message);

  if (!firstName || !lastName || !area) return json({ error: 'Missing required fields.' }, 400);
  if (!isEmail(email)) return json({ error: 'That email address does not look valid.' }, 400);
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return json({ error: 'Mail is not configured.' }, 500);
  }

  const name = `${firstName} ${lastName}`;
  const text = [
    `Name:     ${name}`,
    `Email:    ${email}`,
    `Company:  ${company || '(not given)'}`,
    `Interest: ${area}`,
    '',
    'Message:',
    message || '(none)',
    '',
    '---',
    'Sent from the contact form at 1402celsius.com',
  ].join('\n');

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: TO,
        reply_to: email,
        subject: `Enquiry — ${name}${company ? ` · ${company}` : ''}`,
        text,
      }),
    });
    if (!r.ok) {
      console.error('Resend error', r.status, await r.text());
      return json({ error: 'Could not send the message.' }, 502);
    }
    return json({ ok: true }, 200);
  } catch (err) {
    console.error('Send failed', err);
    return json({ error: 'Could not send the message.' }, 502);
  }
};
