"use client";
import React, { useCallback, useEffect, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import {
  EventClickArg,
  EventInput,
  EventSourceFuncArg,
} from "@fullcalendar/core/index.js";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import DiaryModal from "@/components/diary/DiaryModal";
import { IEventData } from "@/interface/diary";
import { dateToYYYYMMDD } from "@/libs/dateTransform";

const tmpEventDataList: IEventData[] = [
  {
    id: "1",
    title: "test1",
    start: new Date("2025-01-01"),
    description: "test1",
    allDay: true,
  },
  {
    id: "2",
    title: "test2",
    start: new Date("2025-01-02"),
    description: "test2",
    allDay: true,
  },
  {
    id: "3",
    title: "test3",
    start: new Date("2025-01-03"),
    description: "test3",
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
  //const [eventDataList, setEventDataList] = useState([] as IEventData[]);
  //Update Event Data List
  // const updateEventDataList = (data: IEventData[]) => {
  //   setEventDataList([...data]);
  // };

  //Initialise Event Data
  useEffect(() => {
    //Get Event Data
    //getEventData();
    //setEventDataList([...tmpEventDataList]);
  }, []);

  //When clicked on the prev/next button
  const getEventDataList = async (
    fetchInfo: EventSourceFuncArg,
    successCallback: (eventInputs: EventInput[]) => void,
    failureCallback: (error: Error) => void
  ) => {
    try {
      if (fetchInfo) {
        console.log(fetchInfo);
        const start = dateToYYYYMMDD(new Date(fetchInfo.start));
        const end = dateToYYYYMMDD(new Date(fetchInfo.end));
        console.log(start);
        console.log(end);
      }

      const response = tmpEventDataList;

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
      console.log(error);
    }
  };

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
    console.log(arg.event.id);
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
          events={(fetchInfo, successCallback, failureCallback) =>
            getEventDataList(fetchInfo, successCallback, failureCallback)
          }
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
