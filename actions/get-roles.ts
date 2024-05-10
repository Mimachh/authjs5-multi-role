"use server";

import { db } from "@/lib/db";

export const getRoles = async() => {
  try {
    const roles = await db.role.findMany();
    return roles;
  } catch (error) {
    return null;
  }
}
