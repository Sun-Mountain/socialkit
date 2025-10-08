/*
  Warnings:

  - You are about to drop the column `name` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Profile" DROP COLUMN "name",
ADD COLUMN     "displayName" TEXT,
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "lastName" TEXT;
