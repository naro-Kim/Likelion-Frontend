import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDoState } from "./atoms";
import styled from "styled-components";
import DragabbleCard from "./Components/DragabbleCard";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div` 
  width: 100%;  
  border-radius: 8px;
  min-height: 40vh;
`;

const Board = styled.div`
  padding: 1rem; 
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.8rem;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 8px;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({destination, source, draggableId}:DropResult) => {
    console.log(destination, source, draggableId);
    // onDragEnd event의 arg
    console.log("acts");
    setToDos((prev) => {
      const toDosCopy = [...prev];
      // 1) Delete item on source.index
      toDosCopy.splice(source.index, 1);
      // 2) Put back the item on the destination.index
      toDosCopy.splice(destination?.index, 0, draggableId);
      return toDosCopy;
    })
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(provided) => (
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
