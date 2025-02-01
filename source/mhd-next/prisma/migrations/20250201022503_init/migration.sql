/*
  Warnings:

  - You are about to drop the column `userId` on the `DiaryEvent` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id]` on the table `DiaryEvent` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "DiaryEvent" DROP CONSTRAINT "DiaryEvent_userId_fkey";

-- AlterTable
ALTER TABLE "DiaryEvent" DROP COLUMN "userId",
ALTER COLUMN "allDay" SET DEFAULT true;

-- DropTable
DROP TABLE "User";

-- CreateIndex
CREATE UNIQUE INDEX "DiaryEvent_id_key" ON "DiaryEvent"("id");
