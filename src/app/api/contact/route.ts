import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Extract non-hidden fields
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (!key.startsWith("_")) {
        data[key] = value.toString();
      }
    });

    const {
      name,
      email,
      phone,
      company,
      service,
      plan,
      projectType,
      budget,
      message,
    } = data;

    // A fallback subject line if not provided
    const subjectLine = "New Lead Submission - Globify.in";

    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Lead Submission</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          ${name ? `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td></tr>` : ""}
          ${email ? `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td></tr>` : ""}
          ${phone ? `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${phone}</td></tr>` : ""}
          ${company ? `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Company:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${company}</td></tr>` : ""}
          ${service ? `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Service:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${service}</td></tr>` : ""}
          ${plan ? `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Plan/Package:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${plan}</td></tr>` : ""}
          ${projectType ? `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Project Type:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${projectType}</td></tr>` : ""}
          ${budget ? `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Budget:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${budget}</td></tr>` : ""}
        </table>
        
        <h3 style="margin-top: 30px; color: #333;">Message:</h3>
        <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message || "No message provided."}</p>
      </div>
    `;

    const { data: responseData, error } = await resend.emails.send({
      from: "Globify Leads <noreply@globify.in>",
      to: "sales@globify.in",
      subject: subjectLine,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, responseData });
  } catch (error) {
    console.error("Internal Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
