import { IEventData } from "@/interface/diary";
import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_DIARY_API_URL;
export async function getDiaryDataList(
  start: string,
  end: string
): Promise<IEventData[]> {

  const queryParam = `events?start=${start}&end=${end}`;
  const url = baseUrl + queryParam;

  let eventDataList: IEventData[] = [];

  await axios
    .get(url)
    .then((response) => {
      eventDataList = response.data.events;
    })
    .catch((error) => {
      console.log(error);
      eventDataList = [];
    });

  return eventDataList;
}

export async function postDiaryData(
  body: IEventData
): Promise<IEventData> {
  const url = baseUrl + "events";
  let eventData = {} as IEventData;
  await axios
    .post(url, body)
    .then((response) => {
      eventData = response.data;
    })
    .catch((error) => {
      console.log(error);
      eventData = {} as IEventData;
    });

    return eventData;
}

export async function deleteDiaryData(){
  
}