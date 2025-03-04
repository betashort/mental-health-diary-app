//3rd party 
import axios from "axios";
//Own interface
import { IEventData } from "@/interface/diary";

//API URL
const baseUrl = process.env.NEXT_PUBLIC_DIARY_API_URL;

/**
 * Get the diary data list
 * @param start 
 * @param end 
 * @returns 
 */
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

/**
 * 
 * @param body 
 * @returns 
 */
export async function postDiaryData(body: IEventData): Promise<IEventData> {
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

/**
 * 
 * @param body 
 * @returns 
 */
export async function updateDiaryData(body: IEventData): Promise<IEventData> {
  const queryParam = `events?id=${body.id}`;
  const url = baseUrl + queryParam;

  let eventData = {} as IEventData;
  await axios
    .put(url, body)
    .then((response) => {
      eventData = response.data;
    })
    .catch((error) => {
      console.log(error);
      eventData = {} as IEventData;
    });

  return eventData;
}

/**
 * 
 * @param id 
 */
export async function deleteDiaryData(id: string): Promise<void> {
  const queryParam = `events?id=${id}`;
  const url = baseUrl + queryParam;

  await axios
    .delete(url)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
}
