import { IToDo } from "../atoms";

function ToDo({ title }: IToDo) {
  return (
    <>
      <li>
        <span>{title}</span>
        <button>ToDo</button>
        <button>Done</button>
        <button>Doing</button>
      </li>
      ;
    </>
  );
}

export default ToDo;
