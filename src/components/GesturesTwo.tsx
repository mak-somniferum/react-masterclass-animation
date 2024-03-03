import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  display: flex;
  padding: 70px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #7600e4, #5700e4);
`;

const Box = styled(motion.div)`
  width: 160px;
  height: 160px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  drag: { backgroundColor: 'rgb(0, 206, 201)', transition: { duration: 1 } },
};

export default function GesturesTwo() {
  return (
    <Wrapper>
      <Box drag variants={boxVariants} whileDrag="drag" />
    </Wrapper>
  );
}
