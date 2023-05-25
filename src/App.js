import TailwindComponent from './TailwindComponent';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import styled from 'styled-components';
function App() {
  return (
    <>
      <Button1 />
      <Button2 />
      <Container />
      <TailwindComponent />
    </>
  );
}

export default App;

// styled components

export const Container = styled.div`
  width: 100px;
  height: 100px;
  margin: 5px;
  border: 1px solid;
`;
