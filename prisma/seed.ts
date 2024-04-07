import { db } from "@/lib/db";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();
async function main() {
  console.log("Seeding started");
  const rolesArray = [
    {
      name: "ADMIN",
      slug: "admin",
    },
    {
      name: "AUTHOR",
      slug: "author",
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
    email: "admin@admin.com",
    password: hashedPassword,
    emailVerified: new Date(),
    isTwoFactorEnabled: false,
  };
  const adminRole = await db.role.findUnique({ where: { slug: "admin" } });
  const authorRole = await db.role.findUnique({ where: { slug: "author" } });
  const userRole = await db.role.findUnique({ where: { slug: "user" } });
  if (adminRole && authorRole && userRole) {
    await prisma.user.create({
      data: {
        ...user,
        roles: {
          create: [
            { roleId: adminRole.id },
            { roleId: authorRole.id },
            { roleId: userRole.id },
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
