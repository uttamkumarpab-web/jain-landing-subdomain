import { createClient } from "@supabase/supabase-js";

let supabase;

export function isDbConfigured() {
  return Boolean(
    process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
  );
}

function getClient() {
  if (!supabase) {
    supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY,
      { auth: { persistSession: false } }
    );
  }
  return supabase;
}

const TABLE = "jain_counselling_form";

export async function insertLead(lead) {
  const { data, error } = await getClient()
    .from(TABLE)
    .insert(lead)
    .select("id, created_at")
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function findLeadByEmail(email) {
  const { data } = await getClient()
    .from(TABLE)
    .select("id")
    .ilike("email", email)
    .limit(1)
    .maybeSingle();

  return data ?? null;
}
