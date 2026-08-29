import { Resend } from "resend";

let resend;

export function isEmailConfigured() {
  return Boolean(process.env.RESEND_API_KEY);
}

function getClient() {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

const ROWS = [
  ["Name", (l) => `${l.first_name} ${l.last_name}`],
  ["Email", (l) => l.email],
  ["Phone", (l) => l.phone],
  ["City", (l) => l.city],
  ["Education Level", (l) => l.education_level],
  ["Program", (l) => l.program],
  ["University", (l) => l.university],
  ["UTM Source", (l) => l.utm_source],
  ["UTM Medium", (l) => l.utm_medium],
  ["UTM Campaign", (l) => l.utm_campaign],
  ["Page URL", (l) => l.page_url],
  ["Referrer", (l) => l.referrer],
];

const UNIVERSITY_NAME = "JAIN University";
const PROGRAM_NAME = "Online Degree Program";
const BRAND_NAME = "Radhya Education Academy";

function buildEmailHtml(lead) {
  const rows = ROWS.map(
    ([label, get]) =>
      `<tr>
        <td style="padding:8px 12px;background:#f6f6f6;font-weight:600;white-space:nowrap;">${label}</td>
        <td style="padding:8px 12px;">${escapeHtml(String(get(lead) || "-"))}</td>
      </tr>`
  ).join("");

  return `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;border:1px solid #eee;border-radius:8px;overflow:hidden;">
      <div style="background:#194486;color:#fff;padding:16px 24px;">
        <h2 style="margin:0;font-size:18px;">New Online Degree Enquiry</h2>
        <p style="margin:4px 0 0;font-size:13px;">${UNIVERSITY_NAME}</p>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px;color:#333;">${rows}</table>
    </div>`;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendLeadNotification(lead) {
  if (!process.env.LEAD_NOTIFICATION_EMAIL) {
    console.warn("LEAD_NOTIFICATION_EMAIL not set - admin notification skipped.");
    return null;
  }

  const { data, error } = await getClient().emails.send({
    from:
      process.env.EMAIL_FROM ||
      "Radhya Education Academy <contact@radhyaeducationacademy.com>",
    to: [process.env.LEAD_NOTIFICATION_EMAIL],
    subject: `New Online Degree Lead - ${lead.first_name} ${lead.last_name} (${lead.phone})`,
    html: buildEmailHtml(lead),
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function sendUserConfirmationEmail(lead) {
  const from =
    process.env.USER_EMAIL_FROM ||
    "Radhya Education Academy <contact@radhyaeducationacademy.com>";

  const { data, error } = await getClient().emails.send({
    from,
    to: [lead.email],
    subject: "Thank You for Your Interest in JAIN Online Degree",
    html: buildUserEmailHtml(lead),
  });

  if (error) throw new Error(error.message);
  return data;
}

function buildUserEmailHtml(lead) {
  const firstName = escapeHtml(lead.first_name || "there");

  return `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;border:1px solid #eee;border-radius:8px;overflow:hidden;">
      <div style="background:#194486;color:#fff;padding:16px 24px;">
        <h2 style="margin:0;font-size:18px;">${BRAND_NAME}</h2>
        <p style="margin:4px 0 0;font-size:13px;">${UNIVERSITY_NAME} - ${PROGRAM_NAME}</p>
      </div>
      <div style="padding:24px;font-size:14px;color:#333;line-height:1.6;">
        <p>Thank you, ${firstName}!</p>
        <p>We have received your enquiry regarding the <strong>${PROGRAM_NAME} at ${UNIVERSITY_NAME}</strong>.</p>
        <p>Our admissions counsellor will get back to you shortly at <strong>${escapeHtml(lead.email)}</strong> or <strong>${escapeHtml(lead.phone)}</strong>.</p>
        <br/>
        <p style="margin:0;">Team ${BRAND_NAME}</p>
      </div>
    </div>`;
}
