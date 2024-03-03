import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  display: flex;
  padding: 70px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ee0099, #dd00ee);
`;

const Box = styled(motion.div)`
  width: 160px;
  height: 160px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const myVars = {
  start: {
    scale: 0,
  },
  end: {
    scale: 1,
    rotateZ: 360,
    transition: {
      type: 'spring',
    },
  },
};

export default function VariantsOne() {
  return (
    <Wrapper>
      <Box variants={myVars} initial="start" animate="end" />
    </Wrapper>
  );
}
