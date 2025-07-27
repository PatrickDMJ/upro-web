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
  if (accountError || !accountData) {
    throw new Error("Cannot get current account");
  }

  if (child.id) {
    const { data, error } = await supabase
      .from("users")
      .update({
        name: child.name,
        gender: child.gender,
        age_group: child.age_group,
        weight: child.weight ?? null,
        height: child.height ?? null,
        dominant_foot: child.dominant_foot ?? null,
        playing_position: child.playing_position ?? null,
        experience_total: child.experience_total ?? 0,
        subscription_type: child.subscription_type ?? 1,
        upro_gold: child.upro_gold ?? 0,
        profile_picture: child.profile_picture ?? null,
        equipped_avatar_id: child.equipped_avatar_id ?? null,
        equipped_profile_banner_id: child.equipped_profile_banner_id ?? null,
      })
      .eq("id", child.id)
      .eq("account_id", accountData.id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  } else {
    const { data, error } = await supabase
      .from("users")
      .insert({
        account_id: accountData.id,
        name: child.name,
        gender: child.gender,
        age_group: child.age_group,
        weight: child.weight ?? null,
        height: child.height ?? null,
        dominant_foot: child.dominant_foot ?? null,
        playing_position: child.playing_position ?? null,
        experience_total: child.experience_total ?? 0,
        subscription_type: child.subscription_type ?? 1,
        upro_gold: child.upro_gold ?? 0,
        profile_picture: child.profile_picture ?? null,
        equipped_avatar_id: child.equipped_avatar_id ?? null,
        equipped_profile_banner_id: child.equipped_profile_banner_id ?? null,
      })
      .select()
      .single();
    if (error) {
      throw error;
    }
    return data;
  }
}

export async function delChild(child_id: number) {
  const { data: accountData, error: accountError } = await getCurrentAccount();
  if (accountError || !accountData) {
    throw new Error("Cannot get current account");
  }

  const { error } = await supabase
    .from("users")
    .delete()
    .eq("id", child_id)
    .eq("account_id", accountData.id);

  if (error) throw error;

  return true;
}

export async function listChildren() {
  const { data: accountData, error: accountError } = await getCurrentAccount();
  if (accountError || !accountData) {
    throw new Error("Cannot get current account");
  }

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("account_id", accountData.id);

  if (error) throw error;

  return data;
}

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
