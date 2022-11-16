import { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 500px;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgb(255, 255, 255);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 1.2, rotate: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag : {backgroundColor:"rgb(100,200,205)", transition : {duration: 1}}
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox>
      <Box drag dragConstraints={biggerBoxRef} variants={boxVariants} whileDrag = "drag" whileHover="hover" whileTap="click"></Box>
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
