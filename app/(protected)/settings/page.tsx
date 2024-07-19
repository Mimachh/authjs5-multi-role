import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { getRoles } from "@/actions/get-roles";
import FormSettings from "./_component/form";
import { currentUser } from "@/lib/auth";

const SettingsPage = async () => {
  const rolesData = await getRoles();
  const roles = rolesData.map((role) => ({ label: role.name, value: role.id }));
  const user = await currentUser();

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">⚙️ Settings</p>
      </CardHeader>
      <CardContent>
        <FormSettings user={user} roles={roles} />
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
