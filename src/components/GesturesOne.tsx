import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  display: flex;
  padding: 70px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #be00ee, #7600e4);
`;

const Box = styled(motion.div)`
  width: 160px;
  height: 160px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 1.25, rotate: 90 },
  click: { scale: 1, rotate: 0, borderRadius: '100px' },
};

export default function GesturesOne() {
  return (
    <Wrapper>
      <Box variants={boxVariants} whileHover="hover" whileTap="click" />
    </Wrapper>
  );
}
