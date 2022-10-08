import { useRecoilValue, useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { categoryState, toDoState } from "../atoms";

interface IFormData {
  toDo: string;
} 

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState) // modifier function to setValue
  const category = useSetRecoilState(categoryState) // modifier function to setValue
  const { register, handleSubmit, setValue } = useForm<IFormData>();

  const onValid = ({ toDo }: IFormData) => {
    setToDos((prev) => [
      { id: Date.now(), title: toDo, category},
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
