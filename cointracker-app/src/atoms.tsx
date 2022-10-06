import { atom } from "recoil";

export interface IToDo {
    id?: number;
    title: string;
    category: "DONE" | "TODO" | "DOING";
  }  

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
