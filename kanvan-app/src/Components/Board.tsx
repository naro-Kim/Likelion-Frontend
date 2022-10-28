import { useRef } from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import DragabbleCard from "./DragabbleCard";

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
  /* background-color: ${(props) =>
    props.isDraggingOver ? "#96b5cc" : props.isDraggingFromThis ? "#8283d6" : "transparent"}; */
  box-shadow:${(props)=> props.isDraggingOver ? "-2px 8px 16px -4px rgba(60, 60, 66, 0.2)"  : props.isDraggingFromThis ? "-2px 8px 16px -4px rgba(60, 60, 66, 0.2)" : "transparent"};
  flex-grow: 1;
  padding: 1rem;
  transition: all 0.3s ease-in-out;
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  //useRef hook이 document.getElementById와 같은 역할을 함
  const inputRef = useRef<HTMLInputElement>(null);
  const onClick = () => {
    inputRef.current?.focus();
    setTimeout(()=>{
      inputRef.current?.blur();
    }, 2000);
  };
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <input ref={inputRef} placeholder="input text"></input>
      <button onClick={onClick}>Submit</button>
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
              <DragabbleCard key={toDo} index={index} toDo={toDo} />
            ))}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
