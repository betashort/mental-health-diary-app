import { IEventData } from "@/interface/diary";

export function getCalendarData(): IEventData[] {

  const EventDataList: IEventData[] = [
    {
      id: "1",
      title: "Event1",
      start: new Date("2025-1-1"),
      description: "Event1 Description",
      allDay: true,
    },
    {
      id: "2",
      title: "Event2",
      start: new Date("2025-01-02"),
      description: "Event2 Description",
      allDay: true,
    },
    {
      id: "3",
      title: "Event3",
      start: new Date("2025-01-03"),
      description: "Event3 Description",
      allDay: true,
    },
];
  return EventDataList;
}
