import nodemailer from "nodemailer";
import {
  buildLeadEmailHtml,
  buildLeadEmailSubject,
  type LeadEmailData,
} from "./leadEmailTemplate";

const DEFAULT_RECIPIENT = "favara@fcassociati.it";

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return {
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  };
}

export async function sendLeadEmail(data: LeadEmailData): Promise<void> {
  const smtpConfig = getSmtpConfig();

  if (!smtpConfig) {
    throw new Error("SMTP configuration is missing");
  }

  const transporter = nodemailer.createTransport(smtpConfig);
  const to = process.env.LEAD_RECIPIENT_EMAIL || DEFAULT_RECIPIENT;
  const from =
    process.env.SMTP_FROM || `FacileRisarcimento <${smtpConfig.auth.user}>`;

  await transporter.sendMail({
    from,
    to,
    subject: buildLeadEmailSubject(data),
    html: buildLeadEmailHtml(data),
    text: [
      "Nuovo lead da FacileRisarcimento",
      "",
      `Nome: ${data.name || "—"}`,
      `Telefono: ${data.phone}`,
      `Lingua parlata: ${data.language || "—"}`,
      `Tipo di caso: ${data.caseType || "—"}`,
      `Lingua sito: ${data.locale}`,
      `Data: ${data.submittedAt}`,
    ].join("\n"),
  });
}
