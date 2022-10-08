import { atom, selector } from "recoil";

export enum Categories { "DONE" = "DONE", "TODO" = "TODO", "DOING" = "DOING", };
export interface IToDo {
  id?: number;
  title?: string;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "categoryState",
  default: Categories.TODO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  // get has an object as a getter for the state. Can get state from the atom
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    // importing element depending on the category state
    //filter function will return an array of itesm that fits condition
    if (category === category[0])
      return toDos.filter((toDo) => toDo.category === "TODO");
    if (category === category[1])
      return toDos.filter((toDo) => toDo.category === "DOING");
    if (category === category[2])
      return toDos.filter((toDo) => toDo.category === "DONE");
  },
});
