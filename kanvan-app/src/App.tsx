import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDoState } from "./atoms";
import styled from "styled-components";
import Board from "./Components/Board";

const Wrapper = styled.div`
  display: flex;
  max-width: 320px;

  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  border-radius: 8px;
  min-height: 40vh;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (snapshot: DropResult) => {
    const { destination, source, draggableId } = snapshot;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      setToDos((prev) => {
        const toDosCopy = [...prev[source.droppableId]];
        const taskObj = toDosCopy[source.index]; // ITodo Type copied obj
        // 1) Delete item on source.index
        toDosCopy.splice(source.index, 1);
        // 2) Put back the item on the destination.index
        toDosCopy.splice(destination?.index, 0, taskObj);
        return {
          ...prev,
          [source.droppableId]: toDosCopy,
        };
      });
    }
    // Move card to other board
    if (destination.droppableId !== source.droppableId) {
      setToDos((prev) => {
        const src = [...prev[source.droppableId]];
        const dest = [...prev[destination.droppableId]];
        const taskObj = src[source.index]; // ITodo Type copied obj
        src.splice(source.index, 1);
        // 2) Put back the item on the destination.index
        dest.splice(destination?.index, 0, taskObj);
        return {
          ...prev,
          [source.droppableId]: src,
          [destination.droppableId]: dest,
        };
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
