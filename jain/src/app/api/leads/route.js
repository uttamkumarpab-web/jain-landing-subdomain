import { NextResponse } from "next/server";
import { findLeadByEmail, insertLead, isDbConfigured } from "@/lib/db";
import {
  isEmailConfigured,
  sendLeadNotification,
  sendUserConfirmationEmail,
} from "@/lib/email";
import { validateEmail, validateMobile, validateName } from "@/lib/validation";

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || null;
}

function buildRecord(body, ip) {
  const str = (value) => {
    const s = (value || "").toString().trim();
    return s === "" ? null : s;
  };

  return {
    first_name: str(body.fname),
    last_name: str(body.lname),
    email: str(body.email),
    phone: str(body.phone),
    education_level: str(body.education_level),
    location: str(body.location),
    university: str(body.university),
    program: str(body.program),
    utm_source: str(body.utm_source),
    utm_medium: str(body.utm_medium),
    utm_content: str(body.utm_content),
    utm_campaign: str(body.utm_campaign),
    utm_id: str(body.utm_id),
    utm_keyword: str(body.utm_keyword),
    utm_term: str(body.utm_term),
    utm_adgroup: str(body.utm_adgroup),
    gclid: str(body.gclid),
    fbclid: str(body.fbclid),
    page_url: str(body.page_url),
    referrer: str(body.referrer),
    user_agent: str(body.user_agent),
    ga_cookie: str(body._ga),
    fbc: str(body._fbc),
    fbp: str(body._fbp),
    gcl_aw: str(body._gcl_aw),
    ei_sid: str(body._ei_sid),
    client_timestamp: Number.isFinite(Number(body.timestamp))
      ? Number(body.timestamp)
      : null,
    event: str(body.event) || "form_submit",
    ip_address: ip,
  };
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { status: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const validationError =
    validateName(body.fname || "", "First Name") ||
    validateName(body.lname || "", "Last Name") ||
    validateEmail(body.email || "") ||
    validateMobile(body.phone || "") ||
    (!(body.location || "").trim() && "Please select your location.") ||
    (!(body.education_level || "").trim() && "Please select your education level.");

  if (validationError) {
    return NextResponse.json(
      {
        status: false,
        message:
          typeof validationError === "string"
            ? validationError
            : "Please fill all the required fields.",
      },
      { status: 400 }
    );
  }

  const lead = buildRecord(body, getClientIp(request));

  let leadId = null;

  if (isDbConfigured()) {
    try {
      const existing = await findLeadByEmail(lead.email);
      if (existing) {
        return NextResponse.json(
          {
            status: false,
            message:
              "This email ID has already been used to submit an enquiry. Please use a different email ID.",
          },
          { status: 409 }
        );
      }
    } catch (err) {
      console.error("Duplicate check failed:", err.message);
    }

    try {
      const inserted = await insertLead(lead);
      leadId = inserted?.id ?? null;
    } catch (err) {
      console.error("Failed to save lead:", err.message);
      return NextResponse.json(
        { status: false, message: "Unable to submit your enquiry right now. Please try again." },
        { status: 500 }
      );
    }
  } else {
    console.warn("SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY not set - lead not persisted.");
  }

  if (isEmailConfigured()) {
    try {
      await sendLeadNotification(lead);
    } catch (err) {
      console.error("Failed to send lead notification email:", err.message);
    }

    try {
      await sendUserConfirmationEmail(lead);
    } catch (err) {
      console.error("Failed to send user confirmation email:", err.message);
    }
  } else {
    console.warn("RESEND_API_KEY not set - emails skipped.");
  }

  return NextResponse.json({ status: true, id: leadId });
}
