import React, { useCallback, createContext, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { Box, Modal } from "@mui/material";
import DiaryModalTab from "../component/diary/DiaryModalTab";

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

export const EventDateContext = createContext({} as IDiaryEventDateContext);

function DiaryPage() {
  //modal Flag
  const [modalFlag, setModalFlag] = useState(false);
  //EventDate
  const [eventDate, setEventDate] = useState("");
  
  // const [eventData, setEventData] = useState("");
  //useContext Event Date
  // const DiaryEventData = createContext();

  const OpenModal = () => {
    setModalFlag(true);
  };
  const CloseModal = () => {
    setModalFlag(false);
  };

  const handleDateClick = useCallback((arg: DateClickArg) => {
    setEventDate(String(arg.date));
    OpenModal();
    console.log(eventDate);
  }, []);

  return (
    <>
      <div className="h-svh z-0">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          locale="ja"
          initialView="dayGridMonth"
          dateClick={handleDateClick}
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
            <EventDateContext.Provider value={{ eventDate, setEventDate }}>
              <DiaryModalTab />
            </EventDateContext.Provider>
            {/* </DiaryEventData.Provider> */}
            <button onClick={CloseModal}>保存する</button>
            <button onClick={CloseModal}>閉じる</button>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default DiaryPage;
