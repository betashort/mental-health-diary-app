/*
  Warnings:

  - You are about to drop the `DiaryEvent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "DiaryEvent";

-- CreateTable
CREATE TABLE "DIARY_EVENT" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "allDay" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "DIARY_EVENT_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DIARY_EVENT_id_key" ON "DIARY_EVENT"("id");
