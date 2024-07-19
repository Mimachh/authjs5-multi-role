import { getAdminRole } from "@/actions/get-admin-role";
import { useCheckAdminRole, useCheckSuperAdminRole } from "@/hooks/use-check-admin-role";
import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const roles = await currentRole();

  const isAdmin = await useCheckAdminRole(roles) || await useCheckSuperAdminRole(roles);
  if (roles && isAdmin) {
    return new NextResponse(null, { status: 200 });
  }

  return new NextResponse(null, { status: 403 });
}
