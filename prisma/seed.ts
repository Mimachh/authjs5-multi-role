import { db } from "@/lib/db";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();
async function main() {
  console.log("Seeding started");
  const rolesArray = [
    {
      name: "SUPER ADMIN",
      slug: "super_admin",
    },
    {
      name: "ADMIN",
      slug: "admin",
    },
    {
      name: "SUBSCRIBER",
      slug: "subscriber",
    },
    {
      name: "USER",
      slug: "user",
    },
  ];
  await prisma.role.createMany({
    data: rolesArray,
  });

  const hashedPassword = await bcrypt.hash("password", 10);
  const user = {
    email: "superadmin@superadmin.com",
    password: hashedPassword,
    emailVerified: new Date(),
    isTwoFactorEnabled: false,
  };
  const superAdminRole = await db.role.findUnique({ where: { slug: "super_admin" } });
  if (superAdminRole) {
    await prisma.user.create({
      data: {
        ...user,
        roles: {
          create: [
            { roleId: superAdminRole.id },
          ],
        },
      },
    });
  }

  console.log("Seeding done");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
