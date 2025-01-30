"use client";
import React, { useCallback, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import {
  EventClickArg,
  EventInput,
  EventSourceFuncArg,
} from "@fullcalendar/core/index.js";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import DiaryModal from "@/components/diary/DiaryModal";
//import { dateToYYYYMMDD } from "@/libs/dateTransform";
import { getCalendarData } from "@/services/calendarService";
import { IEventData } from "@/interface/diary";

export default function Diary() {
  //modal Flag
  const [modalFlag, setModalFlag] = useState(false);
  //modal Flag for update
  const updateModalFlag = (flag: boolean) => {
    setModalFlag(flag);
  };
  //Event date
  const [eventData, setEventData] = useState({
    id: "",
    title: "",
    description: "",
    start: new Date(),
    allDay: true,
  } as IEventData);

  //Initialise Event Data List
  //When clicked on the prev/next button
  const getEventDataList = async (
    fetchInfo: EventSourceFuncArg,
    successCallback: (eventInputs: EventInput[]) => void,
    failureCallback: (error: Error) => void
  ) => {
    try {
      //const start = dateToYYYYMMDD(new Date(fetchInfo.start));
      //const end = dateToYYYYMMDD(new Date(fetchInfo.end));

      const response = getCalendarData();

      successCallback(
        response.map((event) => {
          return {
            id: event.id,
            title: event.title,
            start: event.start,
            description: event.description,
            allDay: event.allDay,
          };
        })
      );
    } catch (error) {
      if (error instanceof Error) {
        failureCallback(error);
      } else {
        failureCallback(new Error("Unknown error"));
      }
    }
  };

  //When clicked on the date cell
  const handleDateClick = useCallback((arg: DateClickArg) => {
    setModalFlag(true);
    setEventData({
      id: "",
      title: "",
      start: new Date(arg.dateStr),
      description: "",
      allDay: true,
    });
    //react-hooks/exhaustive-deps
  }, []);

  //When clicked on the event
  const handleEventClick = useCallback((arg: EventClickArg) => {
    setModalFlag(true);
    setEventData({
      id: arg.event.id,
      title: arg.event.title,
      start: new Date(arg.event.startStr),
      description: arg.event.extendedProps.description,
      allDay: arg.event.allDay,
    });
    //react-hooks/exhaustive-deps
  }, []);
  console.log(eventData);
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
          events={(fetchInfo, successCallback, failureCallback) =>
            getEventDataList(fetchInfo, successCallback, failureCallback)
          }
        />
      </div>
      <div className="DriaryModal">
        <DiaryModal
          eventData={eventData}
          modalFlag={modalFlag}
          onUpdateModalFlag={updateModalFlag}
        />
      </div>
    </div>
  );
}
