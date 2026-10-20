import { NextRequest, NextResponse } from "next/server";
import {
  getMailTransporter,
  generateAdminNotificationHtml,
  generateClientConfirmationHtml,
} from "@/lib/email";
import type { ContactApiResponse } from "@/types";
import { inquirySchema } from "@/components/inquiry-form/schemas";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const parseResult = inquirySchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json<ContactApiResponse>(
        {
          success: false,
          message: "Invalid submission data. Please check required fields.",
        },
        { status: 400 },
      );
    }

    const data = parseResult.data;
    const inquiryId = `AUR-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    const { transporter, isConfigured } = getMailTransporter();
    const adminRecipient =
      process.env.CONTACT_NOTIFICATION_EMAIL || "events@example.com";
    const senderEmail = process.env.SMTP_FROM_EMAIL || "concierge@example.com";

    if (isConfigured && transporter) {
      const adminMailOptions = {
        from: `"OdeEvents Inquiries" <${senderEmail}>`,
        to: adminRecipient,
        replyTo: data.email,
        subject: `[NEW EVENT INQUIRY #${inquiryId.slice(0, 8)}] ${data.fullName} · ${data.eventType.replace("_", " ").toUpperCase()}`,
        html: generateAdminNotificationHtml(data, inquiryId),
      };

      const clientMailOptions = {
        from: `"OdeEvents Concierge" <${senderEmail}>`,
        to: data.email,
        subject: `We have received your event inquiry with OdeEvents [Ref: ${inquiryId.slice(0, 8)}]`,
        html: generateClientConfirmationHtml(data),
      };

      await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(clientMailOptions),
      ]);

      return NextResponse.json<ContactApiResponse>(
        {
          success: true,
          message:
            "Your inquiry has been received. A Principal Producer will reach out within 12 hours.",
          inquiryId,
          mode: "live_smtp",
          timestamp,
        },
        { status: 200 },
      );
    } else {
      console.log("--- [OderEvents INQUIRY DISPATCH - PREVIEW MODE] ---");
      console.log(`Inquiry ID: ${inquiryId}`);
      console.log(`Client: ${data.fullName} <${data.email}>`);
      console.log(
        `Event: ${data.eventType} | Guests: ${data.guestCount} | Budget: KShs ${data.budgetRange.toLocaleString()}`,
      );
      console.log(
        `Date: ${data.estimatedDate} | Venue: ${data.venuePreference}`,
      );
      console.log(`Services: ${data.servicesNeeded.join(", ")}`);
      console.log(`Vision: ${data.visionText}`);
      console.log(
        "Note: To enable live email dispatch, configure SMTP_HOST, SMTP_USER, and SMTP_PASS in environment.",
      );
      console.log("------------------------------------------------");

      return NextResponse.json<ContactApiResponse>(
        {
          success: true,
          message:
            "Your inquiry has been successfully logged. Our concierge team is preparing your proposal.",
          inquiryId,
          mode: "preview_mock",
          timestamp,
        },
        { status: 200 },
      );
    }
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    return NextResponse.json<ContactApiResponse>(
      {
        success: false,
        message:
          "An internal error occurred while processing your request. Please try again or contact us directly.",
      },
      { status: 500 },
    );
  }
}
