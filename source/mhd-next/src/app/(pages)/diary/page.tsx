"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Diary() {
  return (
    <div>
      <div className="Clendar w-full h-svh">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          locale={"ja"}
          initialView="dayGridMonth"
          height={"80%"}
        />
      </div>
      <div className="Event-Modal"></div>
    </div>
  );
}
