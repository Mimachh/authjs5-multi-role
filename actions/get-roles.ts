"use server";

import { db } from "@/lib/db";

export const getRoles = async () => {
    const roles = await db.role.findMany();
    return roles;
}
