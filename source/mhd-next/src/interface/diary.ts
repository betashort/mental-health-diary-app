export interface IDiaryInfo {
  id: string;
  title: string;
  description: string;
}

export interface IEventData {
  id: string;
  title: string;
  description: string;
  start: Date;
  allDay: boolean;
}
