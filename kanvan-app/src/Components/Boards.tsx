import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import DragabbleCard from './DragabbleCard';

const Wrapper = styled.div`
  padding: 1rem; 
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.8rem;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 8px;
`;

function Boards(props) {
    return (
        <Droppable droppableId="one">
          {(provided) => (
            <Wrapper ref={provided.innerRef} {...provided.droppableProps}>
              {toDos.map((toDo, index) =>  
              <DragabbleCard key={toDo} index={index} toDo={toDo}/>
                )}
                {provided.placeholder}
            </Wrapper>
          )}
        </Droppable>
    );
}

export default Boards;