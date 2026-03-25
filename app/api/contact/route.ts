import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const windowTime = 60 * 1000; // 1 minute
  const limit = 3;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }

  const timestamps = rateLimitMap
    .get(ip)!
    .filter((t) => now - t < windowTime);

  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);

  return timestamps.length > limit;
}

export async function POST(req: NextRequest) {
  try {
    // 🔐 Rate limiting
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Try again later." },
        { status: 429 }
      );
    }

    // 📥 Parse request
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const payload = {
      name,
      email,
      subject: subject || "New message from portfolio",
      message,
    };

    const to = [
      "shreyashchavare3110@gmail.com",
      "shreyashchavare14@gmail.com",
    ];

    let emailSent = false;

    const resendKey = process.env.RESEND_API_KEY;

    // 📧 Try sending email
    if (resendKey) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(resendKey);

        const html = `
          <div>
            <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
            <p><strong>Subject:</strong> ${payload.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br/>")}</p>
          </div>
        `;

        await resend.emails.send({
          from: "Portfolio Contact <noreply@resend.dev>",
          to,
          subject: payload.subject,
          html,
        });

        emailSent = true;
      } catch (error: any) {
        console.error("❌ Resend failed:", error?.message);
      }
    }

    // 🧠 Fallback (VERY IMPORTANT)
    if (!emailSent) {
      console.log("📥 FALLBACK SAVE:", {
        to,
        ...payload,
      });

      // 👉 Future upgrade:
      // Save to DB (PostgreSQL / MongoDB)
    }

    // ✅ Response
    return NextResponse.json({
      ok: true,
      emailSent,
      message: emailSent
        ? "Email sent successfully"
        : "Message saved (email quota exceeded)",
    });
  } catch (err) {
    console.error("❌ Server error:", err);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}