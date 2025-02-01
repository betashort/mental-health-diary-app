/*
  Warnings:

  - You are about to drop the `DIARY_EVENT` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "DIARY_EVENT";

-- CreateTable
CREATE TABLE "diary_event" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "allDay" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "diary_event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "diary_event_id_key" ON "diary_event"("id");
