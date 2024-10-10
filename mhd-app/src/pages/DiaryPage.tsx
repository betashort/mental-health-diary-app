import React, { useCallback, createContext, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import { EventClickArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { Box, Modal } from "@mui/material";
import DiaryModalTab from "../component/diary/DiaryModalTab";
import { IDiaryInfo } from "../interface/diaryInfo";
import { Description, Flag } from "@mui/icons-material";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  hight: "800px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// interface IDiaryEventData {
//   id: string;
//   start: string;
//   end: string;
//   titlle: string;
//   description: string;
//   editable: boolean;
// }

// interface IDiaryEventDataContext {
//   eventData: IDiaryEventData;
//   setEventData: React.Dispatch<React.SetStateAction<IDiaryEventData>>;
// }

interface IDiaryEventDateContext {
  eventDate: string;
  setEventDate: React.Dispatch<React.SetStateAction<string>>;
}

interface IDiaryTitleContext {
  diaryTitle: string;
  setDiaryTitle: React.Dispatch<React.SetStateAction<string>>;
}

interface IDiaryDescriptionContext {
  diaryDescription: string;
  setDiaryDescription: React.Dispatch<React.SetStateAction<string>>;
}

interface IEventInfo {
  id: string;
  title: string;
  description: string;
  start: Date;
}

//useContext
export const eventDateContext = createContext({} as IDiaryEventDateContext);
export const diaryTitleContext = createContext({} as IDiaryTitleContext);
export const diaryDescriptionContext = createContext(
  {} as IDiaryDescriptionContext
);

function DiaryPage() {
  //modal Flag
  const [modalFlag, setModalFlag] = useState(false);
  //EventData
  const [eventDate, setEventDate] = useState(new Date());
  const [diaryTitle, setDiaryTitle] = useState("");
  const [diaryDescription, setDiaryDescription] = useState("");
  const [eventInfos, setEventInfo] = useState([] as IEventInfo[]);
  const FormatStates = () => {
    setDiaryTitle("");
    setDiaryDescription("");
  };
  const OpenModal = () => {
    setModalFlag(true);
    console.log("true")
  };
  const CloseModal = () => {
    setModalFlag(false);
    console.log("false")
  };

  const HandleDateClick = useCallback((arg: DateClickArg) => {
    setEventDate(arg.date);
    OpenModal();
    console.log(eventDate);
  }, []);

  const HandleEvemtClick = useCallback((arg: EventClickArg) => {
    OpenModal();
    console.log(arg.event);
  }, []);

  const GetDiaryEvent = () => {
    //axios.get()
  };

  const PostDiaryEvent = () => {
    //Format EventInfo
    const eventInfo: IEventInfo = {
      id: uuidv4(),
      title: diaryTitle,
      description: diaryDescription,
      start: eventDate,
    };
    console.log(eventInfo);
    setEventInfo([...eventInfos, eventInfo]);
    console.log(eventInfos);
    //Post EventInfo
    //PostDiaryEvent();
    //Get EventInfo
    GetDiaryEvent();
    //initialase
    FormatStates();
    //CloseModal
    CloseModal();
  };

  return (
    <>
      <div className="h-svh z-0">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          locale="ja"
          initialView="dayGridMonth"
          dateClick={HandleDateClick}
          eventClick={HandleEvemtClick}
          events={eventInfos}
        />
      </div>
      <div>
        <Modal
          open={modalFlag}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {eventDate.toISOString()}
              <diaryTitleContext.Provider value={{ diaryTitle, setDiaryTitle }}>
                <diaryDescriptionContext.Provider
                  value={{ diaryDescription, setDiaryDescription }}
                >
                  <DiaryModalTab />
                </diaryDescriptionContext.Provider>
              </diaryTitleContext.Provider>
            <div className="flex justify-between items-center">
              <button onClick={PostDiaryEvent}>保存する</button>
              <button onClick={CloseModal}>閉じる</button>
            </div>
          </Box>
        </Modal>
      </div>
      {diaryTitle}
      {diaryDescription}
    </>
  );
}

export default DiaryPage;
