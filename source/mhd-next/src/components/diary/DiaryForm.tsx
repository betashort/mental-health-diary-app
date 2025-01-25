"use client";
import React, { useContext} from "react";
import { diaryTitleContext, diaryDescriptionContext, eventDateContext } from "../../app/(pages)/diary/page";

export default function DiaryForm() {
  const { eventDate, setEventDate } = useContext(eventDateContext);
  const { diaryTitle, setDiaryTitle } = useContext(diaryTitleContext);
  const { diaryDescription, setDiaryDescription } = useContext(diaryDescriptionContext);
  const HandleDiaryInfo = () => {};

  return (
    <div>
      <div className="w-full">
        <form>
          <span>タイトル</span>
          <input
            className="w-full p-2 border-2"
            type="text"
            value={diaryTitle}
            onChange={(e) => setDiaryTitle(e.target.value)}
          />
          <span>内容</span>
          <textarea
            className="w-full h-[200px] p-2 border-2"
            id="message"
            name="message"
            value={diaryDescription}
            onChange={
              (e) => setDiaryDescription(e.target.value)

            }
          />
        </form>
      </div>
    </div>
  );
};