/*
  Warnings:

  - You are about to drop the `Article` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ArticleCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_authorId_fkey";

-- DropForeignKey
ALTER TABLE "ArticleCategory" DROP CONSTRAINT "ArticleCategory_articleId_fkey";

-- DropForeignKey
ALTER TABLE "ArticleCategory" DROP CONSTRAINT "ArticleCategory_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_parentId_fkey";

-- DropTable
DROP TABLE "Article";

-- DropTable
DROP TABLE "ArticleCategory";

-- DropTable
DROP TABLE "Category";

-- CreateTable
CREATE TABLE "Entreprise" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "address" TEXT,
    "zipCode" TEXT,
    "city" TEXT,
    "country" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "logo" TEXT,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Entreprise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Metier" (
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Metier_pkey" PRIMARY KEY ("slug")
);

-- CreateTable
CREATE TABLE "EntrepriseMetier" (
    "entrepriseId" TEXT NOT NULL,
    "metierId" TEXT NOT NULL,

    CONSTRAINT "EntrepriseMetier_pkey" PRIMARY KEY ("entrepriseId","metierId")
);

-- CreateTable
CREATE TABLE "Entreprise_Type" (
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Entreprise_Type_pkey" PRIMARY KEY ("slug")
);

-- CreateTable
CREATE TABLE "Landing_Page" (
    "id" TEXT NOT NULL,
    "entrepriseId" TEXT NOT NULL,

    CONSTRAINT "Landing_Page_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Day" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Day_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Entreprise_name_key" ON "Entreprise"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Entreprise_slug_key" ON "Entreprise"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Entreprise_userId_key" ON "Entreprise"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Metier_name_key" ON "Metier"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Metier_slug_key" ON "Metier"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Entreprise_Type_name_key" ON "Entreprise_Type"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Entreprise_Type_slug_key" ON "Entreprise_Type"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Landing_Page_entrepriseId_key" ON "Landing_Page"("entrepriseId");

-- CreateIndex
CREATE UNIQUE INDEX "Day_name_key" ON "Day"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Day_slug_key" ON "Day"("slug");

-- AddForeignKey
ALTER TABLE "Entreprise" ADD CONSTRAINT "Entreprise_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EntrepriseMetier" ADD CONSTRAINT "EntrepriseMetier_entrepriseId_fkey" FOREIGN KEY ("entrepriseId") REFERENCES "Entreprise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EntrepriseMetier" ADD CONSTRAINT "EntrepriseMetier_metierId_fkey" FOREIGN KEY ("metierId") REFERENCES "Metier"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Landing_Page" ADD CONSTRAINT "Landing_Page_entrepriseId_fkey" FOREIGN KEY ("entrepriseId") REFERENCES "Entreprise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
