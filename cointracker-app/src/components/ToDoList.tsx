import { useRecoilValue } from "recoil"; 
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
 
function ToDoList() {
  const toDos = useRecoilValue(toDoState); // combine two variables for recoil state. First returns value item, second returns modifier function

  return (
    <div>
      <h1>To Do</h1>
      <hr />
      <CreateToDo/>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo}/>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
