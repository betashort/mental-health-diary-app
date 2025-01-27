"use client";
import React, { useCallback, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import { EventClickArg } from "@fullcalendar/core/index.js";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import DiaryModal from "@/components/diary/DiaryModal";
// import { IEventInfo } from "@/interface/diary";

export default function Diary() {
  //modal Flag
  const [modalFlag, setModalFlag] = useState(false);
  //modal Flag for update
  const updateModalFlag = (flag: boolean) => {
    setModalFlag(flag);
  };
  //Event date
  const [eventDate, setEventDate] = useState(new Date());
  //Event Infos
  //const [eventInfos, setEventInfos] = useState([] as IEventInfo[]);

  //When clicked on the date cell
  const handleDateClick = useCallback((arg: DateClickArg) => {
    setModalFlag(true);
    setEventDate(arg.date);
    console.log(modalFlag);
    console.log(arg.dateStr);
    //react-hooks/exhaustive-deps
  }, []);

  //When clicked on the event
  const handleEventClick = useCallback((arg: EventClickArg) => {
    setModalFlag(true);
    console.log(modalFlag);
    console.log(arg.event);
    //react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="DiaryCalendar h-svh">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          locale="ja"
          height={"80%"}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          eventClick={handleEventClick}
        />
      </div>
      <div className="DriaryModal">
        <DiaryModal
          eventDate={eventDate}
          modalFlag={modalFlag}
          onUpdateModalFlag={updateModalFlag}
        />
      </div>
    </div>
  );
}
