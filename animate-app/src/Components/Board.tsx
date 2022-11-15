import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import DragabbleCard from "./DragabbleCard";
import { ITodo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

const Wrapper = styled.div`
  width: 24vw;
  min-height: 400px;
  padding-top: 10px;
  background-color: ${(props) => props.theme.boardColor};
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

//tracking the state of card
interface IAreaProps {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}

const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver ? "#9cd4ff" : props.isDraggingFromThis ? "#c7c7d2" : "transparent"};
  flex-grow: 1;
  padding: 1rem;
  transition: all 0.3s ease-in-out;
`;

interface IForm {
  toDo: string;
}

interface IBoardProps {
  toDos: ITodo[];
  boardId: string;
}

const Form = styled.form`
  width: 100%;
  display:flex;
  place-content: center;
  input{
    font-size: 1rem;
    text-align: center;
    border:solid 1px #cecece;
    border-radius: 5px;
    background-color: white;
    padding:0.4rem;
    margin: 0 auto;
    width: 88%;

  }
`;

function Board({ toDos, boardId }: IBoardProps) { 
  const setToDo = useSetRecoilState(toDoState);
  const {register, setValue, handleSubmit} = useForm<IForm>();
  const onValid = ({toDo}:IForm) =>{  
    const newToDo = {
      id: Date.now(),
      text: toDo,
    };
    setToDo((prev)=>{
      return{
        ...prev,
        [boardId]:[newToDo, ...prev[boardId]],
      };
    });
    setValue("toDo","");
  };
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input {...register("toDo", {required:true})} type="text" placeholder={`Add task on ${boardId}`} />
      </Form>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Area
            //Droppable state snapshot
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DragabbleCard key={toDo.id} index={index} toDoId={toDo.id} toDoText={toDo.text}/>
            ))}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
