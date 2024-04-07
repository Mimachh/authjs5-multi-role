"use client";

import { Role } from "@prisma/client";

import { useCurrentRole } from "@/hooks/use-current-role";
import { FormError } from "@/components/form-error";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: Role ;
};

export const RoleGate = ({
  children,
  allowedRole,
}: RoleGateProps) => {
  const roles = useCurrentRole();

  if (!roles || !roles.map(role => role.role.name).includes(allowedRole.name)){
    return (
      <FormError message="Vous n'avez pas la permission de voir ce contenu !" />
    )
  }

  return (
    <>
      {children}
    </>
  );
};
