export type LeadEmailData = {
  name: string;
  phone: string;
  language: string;
  caseType: string;
  locale: string;
  submittedAt: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function fieldRow(label: string, value: string): string {
  const displayValue = value.trim() || "—";

  return `
    <tr>
      <td style="padding:14px 18px;background-color:#F8F9FA;border-bottom:1px solid #E8ECF1;width:38%;font-size:13px;font-weight:700;color:#1A365D;vertical-align:top;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:14px 18px;border-bottom:1px solid #E8ECF1;font-size:14px;color:#333333;vertical-align:top;">
        ${escapeHtml(displayValue)}
      </td>
    </tr>
  `;
}

export function buildLeadEmailHtml(data: LeadEmailData): string {
  const safeName = data.name.trim() || "Lead senza nome";

  return `
<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nuovo lead FacileRisarcimento</title>
  </head>
  <body style="margin:0;padding:0;background-color:#EEF2F7;font-family:Arial,Helvetica,sans-serif;color:#333333;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#EEF2F7;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background-color:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 12px 40px rgba(26,54,93,0.12);">
            <tr>
              <td style="background-color:#1A365D;padding:28px 32px;">
                <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#FFB066;">
                  Nuovo contatto
                </p>
                <h1 style="margin:0;font-size:28px;line-height:1.2;color:#ffffff;">
                  Richiesta assistenza
                </h1>
                <p style="margin:12px 0 0;font-size:15px;line-height:1.5;color:#BFDBFE;">
                  Un nuovo lead ha compilato il modulo su FacileRisarcimento.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:24px 32px 8px;">
                <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#4B5563;">
                  Ecco i dati ricevuti da <strong style="color:#1A365D;">${escapeHtml(safeName)}</strong>.
                  Puoi richiamare direttamente il numero indicato.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:0 32px 24px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #E8ECF1;border-radius:16px;overflow:hidden;">
                  ${fieldRow("Nome e cognome", data.name)}
                  ${fieldRow("Telefono", data.phone)}
                  ${fieldRow("Lingua parlata", data.language)}
                  ${fieldRow("Tipo di caso", data.caseType)}
                  ${fieldRow("Lingua sito", data.locale.toUpperCase())}
                  ${fieldRow("Data e ora", data.submittedAt)}
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:0 32px 32px;">
                <table role="presentation" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="background-color:#FF6B00;border-radius:999px;padding:14px 24px;">
                      <a href="tel:${escapeHtml(data.phone.replace(/\s+/g, ""))}" style="color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;">
                        Chiama il lead
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="background-color:#F8F9FA;padding:18px 32px;border-top:1px solid #E8ECF1;">
                <p style="margin:0;font-size:12px;line-height:1.6;color:#6B7280;">
                  Email generata automaticamente da FacileRisarcimento.
                  Il consenso privacy e stato accettato in fase di invio modulo.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();
}

export function buildLeadEmailSubject(data: LeadEmailData): string {
  const name = data.name.trim();
  const phone = data.phone.trim();

  if (name) {
    return `Nuovo lead FacileRisarcimento – ${name}`;
  }

  return `Nuovo lead FacileRisarcimento – ${phone}`;
}
