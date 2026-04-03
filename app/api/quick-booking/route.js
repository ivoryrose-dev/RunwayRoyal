import { Resend } from 'resend';

const toEmail = process.env.QUICK_BOOKING_TO_EMAIL || 'info@runwaytravel.com';
const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

function buildEmailBody(payload) {
  const type = payload.tab === 'arrival' ? 'Arrival' : 'Departure';
  const lines = [
    `Quick Booking Request (${type})`,
    '---',
    `Guest Name: ${payload.guestName || '-'}`,
    `Email: ${payload.email || '-'}`,
    `Phone Number: ${payload.phone || '-'}`,
    `Travel Sector: ${payload.travelSector || '-'}`,
    `Departure Airport: ${payload.departureAirport || '-'}`,
    `Arrival Airport: ${payload.arrivalAirport || '-'}`,
    `Arrival Date: ${payload.arrivalDate || '-'}`,
    `Departure Date: ${payload.departureDate || '-'}`,
    `Flight (Hour): ${payload.flightHour || '-'}`,
    `Flight (Minute): ${payload.flightMinute || '-'}`,
    `Flight No.: ${payload.flightNo || '-'}`,
    `Adult: ${payload.adult || '1'}`,
  ];
  return lines.join('\n');
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      tab,
      travelSector,
      departureAirport,
      arrivalAirport,
      arrivalDate,
      departureDate,
      flightHour,
      flightMinute,
      flightNo,
      guestName,
      email,
      phone,
      adult,
    } = body;

    const required =
      tab &&
      travelSector &&
      departureAirport &&
      arrivalAirport &&
      flightNo &&
      guestName &&
      email &&
      phone &&
      (tab === 'arrival' ? arrivalDate : departureDate);
    if (!required) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const emailBody = buildEmailBody(body);

    if (!process.env.RESEND_API_KEY) {
      console.log('Quick booking (email not sent – no RESEND_API_KEY):', emailBody);
      return Response.json({ success: true }, { status: 200 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `RunwayTravel Quick Booking Request (${tab === 'arrival' ? 'Arrival' : 'Departure'})`,
      text: emailBody,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Quick booking API error:', err);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
