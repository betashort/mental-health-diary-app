import { Modal, Box, Tab } from "@mui/material";
import { TabPanel, TabList, TabContext } from "@mui/lab";
import DiaryForm from "./DiaryForm";
import { useEffect, useState } from "react";
import { IEventData } from "@/interface/diary";
import { modalStyle } from "@/consts/diaryModal";
import { deleteDiaryData, updateDiaryData } from "@/services/diaryService";


export default function EdditableDiaryModal({
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
  const handleUpdate = async () => {
    await updateDiaryData({
      id: eventData.id,
      title: diaryTitle,
      start: eventData.start,
      description: diaryDescription,
      allDay: eventData.allDay,
    });
    onUpdateModalFlag(false);
    setDiaryTitle("");
    setDiaryDescription("");
  };
  const handleDelete = async () => {
    await deleteDiaryData(eventData.id)
    onUpdateModalFlag(false);
    setDiaryTitle("");
    setDiaryDescription("");
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
            <button onClick={handleUpdate}>更新する</button>
            <button onClick={handleDelete}>削除する</button>
            <button onClick={handleClose}>閉じる</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
