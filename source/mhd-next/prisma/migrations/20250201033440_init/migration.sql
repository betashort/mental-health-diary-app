/*
  Warnings:

  - The primary key for the `diary_event` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "diary_event" DROP CONSTRAINT "diary_event_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "diary_event_pkey" PRIMARY KEY ("id");
