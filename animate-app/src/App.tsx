import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  start: { scale: 0, opacity: 0},
  end: {
    scale: 1,
    opacity: 1,
    rotateZ: 360,
    transition: { type: "spring", delay: 0.3, bounce:0.5, duration: 2 },
  },
};


function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial="start" animate="end">
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      </Box> 
    </Wrapper>
  );
}

export default App;
