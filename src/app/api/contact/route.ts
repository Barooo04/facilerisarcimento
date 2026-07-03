import { NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/email/sendLeadEmail";

type ContactPayload = {
  name?: string;
  phone?: string;
  language?: string;
  caseType?: string;
  locale?: string;
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
  }

  const phone = payload.phone?.trim() ?? "";

  if (!phone) {
    return NextResponse.json({ error: "phone_required" }, { status: 400 });
  }

  const leadData = {
    name: payload.name?.trim() ?? "",
    phone,
    language: payload.language?.trim() ?? "",
    caseType: payload.caseType?.trim() ?? "",
    locale: payload.locale?.trim() || "it",
    submittedAt: new Intl.DateTimeFormat("it-IT", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Europe/Rome",
    }).format(new Date()),
  };

  try {
    await sendLeadEmail(leadData);
  } catch (error) {
    console.error("Lead email failed:", error);
    return NextResponse.json({ error: "email_failed" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
