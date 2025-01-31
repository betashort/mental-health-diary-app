-- CreateTable
CREATE TABLE "DiaryEvent" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "allDay" BOOLEAN NOT NULL,

    CONSTRAINT "DiaryEvent_pkey" PRIMARY KEY ("id")
);
