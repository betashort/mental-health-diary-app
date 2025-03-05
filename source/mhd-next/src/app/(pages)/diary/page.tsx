"use client";
//React
import React, { useCallback, useState } from "react";
//3rd party
import FullCalendar from "@fullcalendar/react";
import {
  EventClickArg,
  EventInput,
  EventSourceFuncArg,
} from "@fullcalendar/core/index.js";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
//Own components
import AddableDiaryModal from "@/components/diary/AddableDiaryModal";
import EdditableDiaryModal from "@/components/diary/EdditableDiaryModal";
//own library
import { dateToYYYYMMDD } from "@/libs/dateTransform";
//Own services
import { getDiaryDataList } from "@/services/diaryService";
//Own interface 
import { IEventData } from "@/interface/diary";

/**
 *
 * @returns
 */
export default function Diary() {
  //modal Flag
  const [addableModalFlag, setAddableModalFlag] = useState(false);
  //modal Flag for update
  const updateAddableModalFlag = (flag: boolean) => {
    setAddableModalFlag(flag);
  };
  //modal Flag
  const [edditableModalFlag, setEdditableModalFlag] = useState(false);
  //modal Flag for update
  const updateEdditableModalFlag = (flag: boolean) => {
    setEdditableModalFlag(flag);
  };
  //Event date
  const [eventData, setEventData] = useState({
    id: "",
    title: "",
    description: "",
    start: new Date(),
    allDay: true,
  } as IEventData);

  /**
   * Initialise Event Data List
   * When clicked on the prev/next button
   * @param fetchInfo 
   * @param successCallback 
   * @param failureCallback 
   * @returns event
   */

  const getEventDataList = async (
    fetchInfo: EventSourceFuncArg,
    successCallback: (eventInputs: EventInput[]) => void,
    failureCallback: (error: Error) => void
  ) => {
    try {
      const start = dateToYYYYMMDD(new Date(fetchInfo.start));
      const end = dateToYYYYMMDD(new Date(fetchInfo.end));
      const response = await getDiaryDataList(start, end);

      successCallback(
        response.map((event) => {
          return event;
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

  /**
   * When clicked on the date cell
   * @param
   */
  const handleDateClick = useCallback((arg: DateClickArg) => {
    setAddableModalFlag(true);
    setEventData({
      id: "",
      title: "",
      start: new Date(arg.dateStr),
      description: "",
      allDay: true,
    });
    //react-hooks/exhaustive-deps
  }, []);

  /**
   * When clicked on the event
   * @param 
   */
  const handleEventClick = useCallback((arg: EventClickArg) => {
    setEdditableModalFlag(true);
    setEventData({
      id: arg.event.id,
      title: arg.event.title,
      start: new Date(arg.event.startStr),
      description: arg.event.extendedProps.description,
      allDay: arg.event.allDay,
    });
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
      <div className="addableDriaryModal">
        <AddableDiaryModal
          eventData={eventData}
          modalFlag={addableModalFlag}
          onUpdateModalFlag={updateAddableModalFlag}
        />
      </div>
      <div className="edditableDriaryModal">
        <EdditableDiaryModal
          eventData={eventData}
          modalFlag={edditableModalFlag}
          onUpdateModalFlag={updateEdditableModalFlag}
        />
      </div>
    </div>
  );
}
