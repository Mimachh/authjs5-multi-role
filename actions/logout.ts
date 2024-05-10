"use server";

import { signOut } from "@/next-auth-config/auth";

export const logout = async () => {
  await signOut();
};
