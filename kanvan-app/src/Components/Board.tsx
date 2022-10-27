import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import DragabbleCard from "./DragabbleCard";

const Wrapper = styled.div`
  width: 400px;
  max-width: 680px;
  min-height: 400px;
  padding: 1rem;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 8px;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {toDos.map((toDo, index) => (
              <DragabbleCard key={toDo} index={index} toDo={toDo} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
