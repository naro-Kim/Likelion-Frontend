import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { Categories, categoryState, toDoSelector} from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector); //get todo selector output
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(+e.currentTarget.value as unknown as Categories);
  };
  return (
    <div>
      <h1>To Do</h1>
      <hr />
      {/** submit할 필요가 없으므로 Form태그를 작성하지 않아도 괜찮음 */}
      <select value={category} onInput={onInput}>
        <option value={Categories.TODO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
