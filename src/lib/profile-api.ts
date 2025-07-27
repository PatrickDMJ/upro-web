import { supabase } from "@/lib/supabase";
import { getCurrentAccount } from "@/lib/parent-dashboard-api";

export type ChildInput = {
  account: object;
  id?: number; // optional, used only when updating existing user
  name: string;
  gender: string; // e.g. 'Male', 'Female', 'Other'
  age_group: number; // e.g. 1 = 6-9 years, 2 = 10-13, etc.
  weight?: number | null; // in kilograms, optional
  height?: number | null; // in centimeters, optional
  dominant_foot?: boolean | null; // true = right, false = left
  playing_position?: string | null; // e.g. 'Forward', 'Defender', etc.
  experience_total?: number; // total experience points, default 0
  subscription_type?: number; // foreign key to subscription_types, default 1
  upro_gold?: number; // default 0, must be >= 0
  profile_picture?: string | null; // URL to image
  equipped_avatar_id?: number | null; // FK to store_items
  equipped_profile_banner_id?: number | null; // FK to store_items
};

export async function addOrUpdateChild(child: ChildInput) {
  const { data: accountData, error: accountError } = await getCurrentAccount();
  if (child.id) {
    //update

  } else {
    //add

  }
}

export async function delChild() {}

export async function listChildren() {}

export async function getChild(child_id: number) {
  const { data: accountData, error: accountError } = await getCurrentAccount();

  if (accountError || !accountData) {
    throw new Error("Cannot get current account");
  }

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", child_id)
    .single();

  if (error || !data) {
    return null;
  }

  if (data.account_id !== accountData.id) {
    return null;
  }

  return data;
}
