import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ title, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  // function to modify category
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((prev) => {
      const targetId = prev.findIndex((toDo) => toDo.id === id); // get Index of target
      const newToDo = { title, id, category: name as any };
      return [...prev.slice(0, targetId), newToDo, ...prev.slice(targetId + 1)]; // function must return Updater parameter
    });
  };

  return (
    <>
      <li>
        <span>{title}</span>
        {category !== "TODO" && (
          <button name="TODO" onClick={onClick}>
            To Do
          </button>
        )}
        {category !== "DONE" && (
          <button name="DONE" onClick={onClick}>
            Done
          </button>
        )}
        {category !== "DOING" && (
          <button name="DOING" onClick={onClick}>
            Doing
          </button>
        )}
      </li>
      ;
    </>
  );
}

export default ToDo;
