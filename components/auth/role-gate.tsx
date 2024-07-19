"use client";

import { Role } from "@prisma/client";

import { useCurrentRole } from "@/hooks/use-current-role";
import { FormError } from "@/components/form-error";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRoles: Role[]; // Modification ici pour accepter un tableau de Role
};

export const RoleGate = ({
  children,
  allowedRoles, // Modification ici pour utiliser allowedRoles
}: RoleGateProps) => {
  const roles = useCurrentRole();
  console.log({allowedRoles})
  console.log({roles})
  // Modification de la condition pour vérifier si au moins un des rôles autorisés est présent
  if (!roles || !roles.some(userRole => allowedRoles.map(role => role.name).includes(userRole.role.name))){
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
