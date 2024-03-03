import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  display: flex;
  padding: 70px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ee00da, #b600ee);
`;

const Box = styled(motion.div)`
  width: 160px;
  height: 160px;
  padding: 5px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  width: 60px;
  height: 60px;
  place-self: center;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  start: {
    scale: 0,
  },
  end: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const circleVariants = {
  start: {
    opacity: 0,
    y: -40,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

export default function VariantsTwo() {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial="start" animate="end">
        {/**
         * motion 컴포넌트의 자식 motion 컴포넌트에는 부모의 initial과 animate 속성이 상속됩니다.
         * <Circle initial="start" animate="end" /> */}
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  );
}
