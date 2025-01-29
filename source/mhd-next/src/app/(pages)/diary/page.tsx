"use client";
import React, { useCallback, useEffect, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import { EventClickArg } from "@fullcalendar/core/index.js";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import DiaryModal from "@/components/diary/DiaryModal";
import { IEventData } from "@/interface/diary";

const tmpEventDataList: IEventData[] = [
  {
    id: "1",
    title: "test1",
    start: new Date("2025-01-01"),
    description: "test1",
    allDay: true,
  },
];

export default function Diary() {
  //modal Flag
  const [modalFlag, setModalFlag] = useState(false);
  //modal Flag for update
  const updateModalFlag = (flag: boolean) => {
    setModalFlag(flag);
  };
  //Event date
  const [eventDate, setEventDate] = useState(new Date());
  //Event Data List
  const [eventDataList, setEventDataList] = useState([] as IEventData[]);
  //Update Event Data List
  // const updateEventDataList = (data: IEventData[]) => {
  //   setEventDataList([...data]);
  // };

  //Initialise Event Data
  useEffect(() => {
    //Get Event Data
    //getEventData();
    setEventDataList([...tmpEventDataList]);
  }, []);

  //When clicked on the prev/next button
  //const handlePrevNextClick = useCallback(() =>{}, []);


  //When clicked on the date cell
  const handleDateClick = useCallback((arg: DateClickArg) => {
    setModalFlag(true);
    setEventDate(arg.date);
    console.log(modalFlag);
    console.log(arg);
    //react-hooks/exhaustive-deps
  }, []);

  //When clicked on the event
  const handleEventClick = useCallback((arg: EventClickArg) => {
    setModalFlag(true);
    console.log(modalFlag);
    console.log(arg);
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
          events={eventDataList}
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
