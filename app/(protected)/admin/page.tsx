"use client";

import { admin } from "@/actions/admin";
import { getAdminRole } from "@/actions/get-admin-role";
import { getSuperAdminRole } from "@/actions/get-super-admin-role";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Role } from "@prisma/client";
import { useEffect, useState } from "react";

import { toast } from "sonner";

const AdminPage = () => {
  const [adminRole, setAdminRole] = useState<Role | null>(null);
  const [superAdminRole, setSuperAdminRole] = useState<Role | null>(null);
  const [loading, setLoading] = useState(true);
  
  
  useEffect(() => {
    const fetchAdminRole = async () => {
      const adminRole = await getAdminRole();
      const superAdminRole = await getSuperAdminRole();
      setAdminRole(adminRole);
      setSuperAdminRole(superAdminRole);
      setLoading(false);
    };
    fetchAdminRole();
  }, []);

 
  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.error) {
        toast.error(data.error);
      }

      if (data.success) {
        toast.success(data.success);
      }
    });
  };

  const onApiRouteClick = () => {
    try {
      fetch("/api/admin").then((response) => {
        if (response.ok) {
          toast.success("Allowed API Route!");
        } else {
          toast.error("Forbidden API Route!");
        }
      });
    } catch (error) {
      
    }
  };

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">🔑 Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {loading && <p className="text-center">Loading...</p>}
        {!loading && (
          <>
            {adminRole && superAdminRole && (
              <>
                <RoleGate  allowedRoles={[adminRole, superAdminRole]}>
                  <FormSuccess message="You are allowed to see this content!" />
                </RoleGate>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                  <p className="text-sm font-medium">Admin-only API Route</p>
                  <Button onClick={onApiRouteClick}>Click to test</Button>
                </div>

                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                  <p className="text-sm font-medium">
                    Admin-only Server Action
                  </p>
                  <Button onClick={onServerActionClick}>Click to test</Button>
                </div>
              </>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default AdminPage;
