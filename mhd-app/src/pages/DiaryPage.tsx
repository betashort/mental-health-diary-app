import React, { useCallback, createContext, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { Box, Modal } from "@mui/material";
import DiaryModalTab from "../component/diary/DiaryModalTab";
import { IDiaryInfo } from "../interface/diaryInfo";
import { Description } from "@mui/icons-material";
import axios from "axios";

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
//useContext
export const eventDateContext = createContext({} as IDiaryEventDateContext);
export const diaryTitleContext = createContext({} as IDiaryTitleContext);
export const diaryDescriptionContext = createContext(
  {} as IDiaryDescriptionContext
);

function DiaryPage() {
  //modal Flag
  const [modalFlag, setModalFlag] = useState(false);
  //EventDate
  const [eventDate, setEventDate] = useState("");
  const [diaryTitle, setDiaryTitle] = useState("");
  const [diaryDescription, setDiaryDescription] = useState("");

  const FormatStates = () => {
    setDiaryTitle("");
    setDiaryDescription("");
  };
  const OpenModal = () => {
    setModalFlag(true);
  };
  const CloseModal = () => {
    setModalFlag(false);
    FormatStates();
  };

  const handleDateClick = useCallback((arg: DateClickArg) => {
    setEventDate(String(arg.date));
    OpenModal();
    console.log(eventDate);
  }, []);

  const GetDiaryEvent = () => {
    //axios.get()
  };

  const PostDiaryEvent = () => {
    //axios.post()
    FormatStates();
  };

  return (
    <>
      <div className="h-svh z-0">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          locale="ja"
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          // events={}
        />
      </div>
      <div>
        <Modal
          open={modalFlag}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {/* <DiaryEventData.Provider value={setEventData}> */}
            {eventDate}
            <eventDateContext.Provider value={{ eventDate, setEventDate }}>
              <diaryTitleContext.Provider value={{ diaryTitle, setDiaryTitle }}>
                <diaryDescriptionContext.Provider
                  value={{ diaryDescription, setDiaryDescription }}
                >
                  <DiaryModalTab />
                </diaryDescriptionContext.Provider>
              </diaryTitleContext.Provider>
            </eventDateContext.Provider>
            {/* </DiaryEventData.Provider> */}
            <div className="flex justify-between items-center">
              <button onClick={CloseModal}>保存する</button>
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
