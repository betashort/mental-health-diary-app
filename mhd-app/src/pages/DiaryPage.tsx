import React, { useCallback, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import Modal from "react-modal";
import DiaryModalTab from "../component/diary/DiaryModalTab";

function DiaryPage() {
  const [modalFlag, setModalFlag] = useState(false);

  const OpenModal = () => {
    setModalFlag(true);
  };
  const CloseModal = () => {
    setModalFlag(false);
  };

  const handleDateClick = useCallback((arg: DateClickArg) => {
    OpenModal();
  }, []);

  return (
    <>
      <div className="h-svh z-0">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
        />
      </div>
      <Modal isOpen={modalFlag}>
        
          <h2>モーダル</h2>
          <div className="flex justify-end">
          <button onClick={CloseModal}>閉じる</button>
          </div>
      </Modal>

    </>
  );
}

export default DiaryPage;
