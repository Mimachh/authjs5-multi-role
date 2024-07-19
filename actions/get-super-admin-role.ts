

"use server";

import { db } from "@/lib/db";

export const getSuperAdminRole = async() => {
  try {
    const adminRole = await db.role.findFirst({
      where: { slug: "super_admin" },
    });

    return adminRole;
  } catch (error) {
    return null;
  }
}