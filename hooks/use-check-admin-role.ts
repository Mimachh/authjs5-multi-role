import { Role } from "@prisma/client";

type RoleWrapper = {
    role: Role;
  };

export const useCheckAdminRole = async (roles?: RoleWrapper[] | null | undefined) => {
     const adminRoleSlug = "admin"

    if(roles) {
        return roles.map(role => role.role.slug).includes(adminRoleSlug)
    } else {
        return false;
    }   
}

export const useCheckSuperAdminRole = async (roles?: RoleWrapper[] | null | undefined) => {
    const superAdminRoleSlug = "super_admin"

   if(roles) {
       return roles.map(role => role.role.slug).includes(superAdminRoleSlug)
   } else {
       return false;
   }   
}