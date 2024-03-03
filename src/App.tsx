import styled from 'styled-components';
import VariantsOne from './components/VariantsOne';
import VariantsTwo from './components/VariantsTwo';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 4%;
  padding: 30px;
`;

function App() {
  return (
    <Wrapper>
      <VariantsOne />
      <VariantsTwo />
    </Wrapper>
  );
}

export default App;
