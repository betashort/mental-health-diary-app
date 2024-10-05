import React, { useContext, useState } from "react";
import { EventDateContext } from "../../pages/DiaryPage";
import { text } from "stream/consumers";

function DiaryForm() {
  const [textData, setTextData] = useState("");
  const { eventDate, setEventDate } = useContext(EventDateContext);

  const HandleTextData = () => {
    setTextData(textData);
    console.log(textData);
  };
  return (
    <div>
      {eventDate}
      <div className="w-full">
        <form>
          <span>Title</span>
          <input
            className="w-full p-2 border-2"
            type="text"
            value={"a"}
            onChange={(e) => setTextData(e.target.value)}
          />
          <span>内容</span>
          <textarea
            className="w-full h-[200px] p-2 border-2"
            id="message"
            name="message"
            value={textData}
            onChange={(e) => setTextData(e.target.value)}
          />
        </form>
        <span>{textData}</span>
      </div>
    </div>
  );
}

export default DiaryForm;
