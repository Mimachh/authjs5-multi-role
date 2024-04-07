"use server";

import { db } from "@/lib/db";

export const getAdminRole = async() => {
  try {
    const adminRole = await db.role.findFirst({
      where: { slug: "admin" },
    });
    return adminRole;
  } catch (error) {
    return null;
  }
}
