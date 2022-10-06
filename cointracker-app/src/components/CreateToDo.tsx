import { useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { toDoState } from "../atoms";

interface IFormData {
  toDo: string;
} 

function CreateToDo() {
  const { register, handleSubmit, setValue } = useForm<IFormData>();
  const setToDos = useSetRecoilState(toDoState) // modifier function to setValue

  const onValid = ({ toDo }: IFormData) => {
    setToDos((prev) => [
      { id: Date.now(), title: toDo, category: "TODO" },
      ...prev,
    ]);
    setValue("toDo", "");
  };

  return (
    <>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("toDo", {
            required: "Please write valid name",
            minLength: { value: 3, message: "min length is 3" },
            maxLength: 20,
          })}
          placeholder="Text to do"
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default CreateToDo;
