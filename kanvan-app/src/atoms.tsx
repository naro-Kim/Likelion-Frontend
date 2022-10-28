import { atom, selector } from "recoil";

interface ItoDoState {
  [key: string]: string[];
}


export const toDoState = atom<ItoDoState>({
  key: "toDo",
  default: {
    "To Do": ["a", "b", "e", ],
    doing: ["c", "d"],
    done: ["f"], 
  },
});
