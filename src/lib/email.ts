import { InquiryFormInput } from "@/components/inquiry-form/schemas";
import nodemailer from "nodemailer";

export function getMailTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  const isConfigured = Boolean(
    host &&
    user &&
    pass &&
    host !== "your-smtp-host" &&
    user !== "your-smtp-user",
  );

  if (!isConfigured) {
    return {
      transporter: null,
      isConfigured: false,
    };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  return {
    transporter,
    isConfigured: true,
  };
}

export function generateAdminNotificationHtml(
  data: InquiryFormInput,
  inquiryId: string,
): string {
  const formatCurrency = (val: number) =>
    `KShs ${new Intl.NumberFormat("en-KE", { maximumFractionDigits: 0 }).format(val)}`;

  const eventLabelMap: Record<string, string> = {
    luxury_wedding: "Luxury Wedding & Nuptial Celebration",
    corporate_gala: "High-Impact Corporate Gala / Summit",
    private_soiree: "Exclusive VIP Private Soirée",
    brand_activation: "Immersive Brand Activation & Drop",
    charity_benefit: "Philanthropic Benefactor Gala",
  };

  const venueLabelMap: Record<string, string> = {
    undecided: "Undecided / Venue Sourcing Needed",
    indoor_ballroom: "Grand Architectural Ballroom",
    open_air_estate: "Open-Air Private Estate / Vineyard",
    destination: "International Destination / Resort",
    waterfront: "Waterfront / Luxury Yacht Charter",
  };

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Event Lead: ${data.fullName}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0c10; color: #e5e7eb; margin: 0; padding: 24px; }
    .container { max-width: 620px; margin: 0 auto; background-color: #12141a; border: 1px solid #232733; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6); }
    .header { background: linear-gradient(135deg, #181b24 0%, #0d0f14 100%); padding: 32px 28px; border-bottom: 1px solid #232733; }
    .badge { display: inline-block; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #d4af37; font-weight: 600; margin-bottom: 8px; }
    .title { font-size: 22px; font-weight: 700; color: #ffffff; margin: 0 0 6px 0; letter-spacing: -0.02em; }
    .subtitle { font-size: 13px; color: #9ca3af; margin: 0; }
    .content { padding: 28px; }
    .table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .table td { padding: 12px 14px; font-size: 13px; border-bottom: 1px solid #1e222d; }
    .table td.label { width: 35%; color: #9ca3af; font-weight: 500; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em; }
    .table td.value { color: #f3f4f6; font-weight: 600; }
    .highlight-card { background-color: #171b24; border-left: 3px solid #d4af37; padding: 16px; border-radius: 0 8px 8px 0; margin-bottom: 24px; }
    .highlight-title { font-size: 12px; font-weight: 700; text-transform: uppercase; color: #d4af37; margin: 0 0 6px 0; }
    .highlight-body { font-size: 14px; color: #e5e7eb; line-height: 1.6; margin: 0; white-space: pre-wrap; }
    .tag-list { display: flex; flex-wrap: wrap; gap: 6px; }
    .tag { background-color: #232733; color: #e5e7eb; padding: 4px 10px; border-radius: 4px; font-size: 12px; }
    .footer { padding: 20px 28px; background-color: #0d0f14; border-top: 1px solid #1e222d; font-size: 12px; color: #6b7280; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="badge">OdeEvents EXECUTIVE DISPATCH · INTAKE #${inquiryId.slice(0, 8)}</div>
      <h1 class="title">New Bespoke Event Inquiry</h1>
      <p class="subtitle">Received on ${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", timeZoneName: "short" })}</p>
    </div>
    <div class="content">
      <table class="table">
        <tr>
          <td class="label">Client Name</td>
          <td class="value">${data.fullName}</td>
        </tr>
        <tr>
          <td class="label">Direct Email</td>
          <td class="value"><a href="mailto:${data.email}" style="color: #60a5fa; text-decoration: none;">${data.email}</a></td>
        </tr>
        <tr>
          <td class="label">Direct Phone</td>
          <td class="value"><a href="tel:${data.phone}" style="color: #60a5fa; text-decoration: none;">${data.phone}</a></td>
        </tr>
        <tr>
          <td class="label">Event Classification</td>
          <td class="value">${eventLabelMap[data.eventType] || data.eventType}</td>
        </tr>
        <tr>
          <td class="label">Target Date / Window</td>
          <td class="value">${data.estimatedDate}</td>
        </tr>
        <tr>
          <td class="label">Guest Capacity</td>
          <td class="value">${data.guestCount.toLocaleString()} Attendees</td>
        </tr>
        <tr>
          <td class="label">Production Budget</td>
          <td class="value" style="color: #34d399;">${formatCurrency(data.budgetRange)}+</td>
        </tr>
        <tr>
          <td class="label">Venue Atmosphere</td>
          <td class="value">${venueLabelMap[data.venuePreference] || data.venuePreference}</td>
        </tr>
        <tr>
          <td class="label">Requested Capabilities</td>
          <td class="value">${data.servicesNeeded.join(", ")}</td>
        </tr>
      </table>

      <div class="highlight-card">
        <div class="highlight-title">Client Vision & Objectives</div>
        <p class="highlight-body">${data.visionText}</p>
      </div>
    </div>
    <div class="footer">
      OdeEvents Creative Productions · Event Intelligence Platform · Confirmed Lead
    </div>
  </div>
</body>
</html>
`;
}

export function generateClientConfirmationHtml(data: InquiryFormInput): string {
  const firstName = data.fullName.split(" ")[0] || data.fullName;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Curation Request with OdeEvents</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0a0b0e; color: #e5e7eb; margin: 0; padding: 24px; }
    .container { max-width: 580px; margin: 0 auto; background-color: #111319; border: 1px solid #222632; border-radius: 12px; overflow: hidden; }
    .hero { background: linear-gradient(180deg, #181b24 0%, #111319 100%); padding: 40px 32px; text-align: center; border-bottom: 1px solid #222632; }
    .logo { font-size: 24px; font-weight: 800; letter-spacing: 0.2em; color: #ffffff; margin-bottom: 12px; text-transform: uppercase; }
    .tagline { font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #d4af37; }
    .body-content { padding: 32px 28px; font-size: 14px; line-height: 1.7; color: #d1d5db; }
    .body-content p { margin: 0 0 16px 0; }
    .recap-box { background-color: #171a22; border: 1px solid #222632; border-radius: 8px; padding: 18px; margin: 24px 0; }
    .recap-title { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #9ca3af; margin-bottom: 10px; }
    .recap-item { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #20242f; font-size: 13px; }
    .recap-item:last-child { border-bottom: none; }
    .cta-btn { display: inline-block; background-color: #ffffff; color: #0a0b0e; padding: 12px 24px; border-radius: 6px; font-weight: 600; text-decoration: none; font-size: 13px; letter-spacing: 0.02em; margin-top: 8px; }
    .footer { padding: 24px; background-color: #0b0c10; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #1c202a; }
  </style>
</head>
<body>
  <div class="container">
    <div class="hero">
      <div class="logo">A U R A</div>
      <div class="tagline">Bespoke Event Architecture & Spatial Production</div>
    </div>
    <div class="body-content">
      <p>Dear ${firstName},</p>
      <p>Thank you for initiating your project inquiry with <strong>OdeEvents</strong>. We have received your preliminary event specifications and our Principal Creative Producer is currently reviewing your vision.</p>
      
      <div class="recap-box">
        <div class="recap-title">Registered Specifications</div>
        <div class="recap-item"><span>Target Timeline:</span> <strong style="color: #ffffff;">${data.estimatedDate}</strong></div>
        <div class="recap-item"><span>Estimated Scale:</span> <strong style="color: #ffffff;">${data.guestCount} Guests</strong></div>
        <div class="recap-item"><span>Production Scope:</span> <strong style="color: #ffffff;">${data.servicesNeeded.join(", ")}</strong></div>
      </div>

      <p><strong>What Happens Next:</strong></p>
      <p>1. Our creative directors will conduct a preliminary venue & feasibility analysis based on your target date and guest requirements.<br>
      2. A private consultation link will be dispatched to this email address within <strong>12 business hours</strong> to schedule our initial moodboard & scope presentation.</p>

      <p>If you have immediate supplemental assets or moodboard decks to share, simply reply directly to this message.</p>

      <p style="margin-top: 24px; color: #9ca3af; font-size: 13px;">Warm regards,<br><strong style="color: #ffffff;">The OdeEvents Executive Concierge Team</strong><br>New York · London · Paris · Dubai</p>
    </div>
    <div class="footer">
      © ${new Date().getFullYear()} OdeEvents Productions. All rights reserved.<br>
      Confidential client communication.
    </div>
  </div>
</body>
</html>
`;
}
