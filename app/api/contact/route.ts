import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import type { ApiResponse } from "@/types";

export async function POST(req: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await req.json();

    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ success: false, message: "Bot detected" }, { status: 400 });
    }

    const ip = req.headers.get("x-forwarded-for") ?? "unknown";

    // Validate with Zod
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validasi gagal",
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    const { name, email, subject, message } = validation.data;

    // Sanitize
    const sanitize = (str: string) =>
      str.replace(/<[^>]*>/g, "").replace(/[<>"']/g, "").trim();

    const safeData = {
      name: sanitize(name),
      email: sanitize(email),
      subject: sanitize(subject),
      message: sanitize(message),
    };

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL = process.env.CONTACT_EMAIL ?? "mgfauzan05@gmail.com";

    if (RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(RESEND_API_KEY);

      await resend.emails.send({
        from: "OpenHelp <onboarding@resend.dev>",   
        to: TO_EMAIL,
        replyTo: safeData.email,                   
        subject: `[OpenHelp] ${safeData.subject}`,
        html: `
          <div style="font-family: monospace; background: #050505; color: #E0E0E0; padding: 32px; border-left: 4px solid #FF00FF;">
            <h2 style="color: #00FFFF; margin-bottom: 24px;">📨 PESAN BARU — OPENHELP</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; color: #888;">DARI</td>
                <td style="padding: 8px; color: #FF00FF;">${safeData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; color: #888;">EMAIL</td>
                <td style="padding: 8px; color: #00FFFF;">${safeData.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; color: #888;">SUBJECT</td>
                <td style="padding: 8px; color: #F0ED0E;">${safeData.subject}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; border: 1px solid #333; background: #0D0019;">
              <p style="color: #888; margin-bottom: 8px;">PESAN:</p>
              <p style="white-space: pre-wrap; color: #E0E0E0;">${safeData.message}</p>
            </div>
            <p style="margin-top: 16px; color: #444; font-size: 12px;">
              IP: ${ip} | Time: ${new Date().toISOString()}
            </p>
          </div>
        `,
      });
    } else {
      console.log("[Contact Form] RESEND_API_KEY tidak ditemukan:", safeData);
    }

    return NextResponse.json({
      success: true,
      message: "Pesan berhasil dikirim! Kami akan reply dalam 1x24 jam.",
    });
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { success: false, message: "Server error. Coba lagi nanti." },
      { status: 500 }
    );
  }
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ message: "OpenHelp Contact API v1.0" });
}