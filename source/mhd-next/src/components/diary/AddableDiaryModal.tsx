import { Modal, Box, Tab } from "@mui/material";
import { TabPanel, TabList, TabContext } from "@mui/lab";
import DiaryForm from "./DiaryForm";
import { useEffect, useState } from "react";
import { IEventData } from "@/interface/diary";
import { modalStyle } from "@/consts/diaryModal";
import { postDiaryData } from "@/services/calendarService";
import { v4 as uuidv4 } from "uuid"

export default function AddableDiaryModal({
  eventData,
  modalFlag,
  onUpdateModalFlag,
}: {
  eventData: IEventData;
  modalFlag: boolean;
  onUpdateModalFlag: (flag: boolean) => void;
}) {
  //Diary Title
  const [diaryTitle, setDiaryTitle] = useState<string>("");
  const updateDiaryTitle = (title: string) => {
    setDiaryTitle(title);
  };
  //Diary Description
  const [diaryDescription, setDiaryDescription] = useState<string>("");
  const updateDiaryDescription = (description: string) => {
    setDiaryDescription(description);
  };
  //Tab control value
  const [tabControl, setTabControl] = useState("1");

  useEffect(() => {
    setDiaryTitle(eventData.title);
    setDiaryDescription(eventData.description);
  }, [eventData]);

  //Save the diary
  const handleSave = async () => {
    await postDiaryData({
      id: uuidv4(),
      title: diaryTitle,
      start: eventData.start,
      description: diaryDescription,
      allDay: true,
    });
    setDiaryTitle("");
    setDiaryDescription("");
    onUpdateModalFlag(false);
  };
  //Close the modal
  const handleClose = () => {
    onUpdateModalFlag(false);
    setDiaryTitle("");
    setDiaryDescription("");
  };
  //Tab change
  const hadleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabControl(newValue);
  };

  return (
    <div>
      <Modal
        open={modalFlag}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <div>
            {eventData.start.getFullYear()}年{eventData.start.getMonth() + 1}月
            {eventData.start.getDate()}日
          </div>
          <TabContext value={tabControl}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={ hadleTabChange }>
                <Tab label="日記" value="1" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <DiaryForm
                diaryTitle={diaryTitle}
                updateDiaryTitle={updateDiaryTitle}
                diaryDescription={diaryDescription}
                updateDiaryDescription={updateDiaryDescription}
              />
            </TabPanel>
          </TabContext>
          <div className="flex justify-between items-center">
            <button onClick={handleSave}>保存する</button>
            <button onClick={handleClose}>閉じる</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
