import React, { useCallback, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { Box, Modal } from "@mui/material";
import DiaryModalTab from "../component/diary/DiaryModalTab";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  hight: '800px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
      <div>
      <Modal
        open={modalFlag}
        // onClose={CloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <DiaryModalTab />
          <button onClick={CloseModal}>閉じる</button>
        </Box>
        
      </Modal>
    </div>

    </>
  );
}

export default DiaryPage;
