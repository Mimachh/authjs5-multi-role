"use server";

import { signOut } from "@/next-auth-config/auth";
import { redirect } from "next/navigation";

export const logout = async () => {
  await signOut();
};
