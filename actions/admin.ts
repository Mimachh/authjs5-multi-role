"use server";

import { currentRole } from "@/lib/auth";
import { getAdminRole } from "./get-admin-role";
import { useCheckAdminRole } from "@/hooks/use-check-admin-role";
import { Role } from "@prisma/client";

export const admin = async () => {
  const roles = await currentRole();

  const isAdmin = await useCheckAdminRole(roles);

  if (isAdmin) {
    return { success: "Allowed Server Action!" };
  }

  return { error: "Forbidden Server Action!" };
};
