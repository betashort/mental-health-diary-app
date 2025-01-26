"use client";

import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import DiaryModal from "@/components/diary/DiaryModal";

export default function Diary() {
  return (
    <>
      <div className="DiaryCalendar h-svh">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          locale="ja"
          height={"80%"}
          initialView="dayGridMonth"
        />
      </div>
      <div className="DriaryModal">
        <DiaryModal />
      </div>
    </>
  );
}
