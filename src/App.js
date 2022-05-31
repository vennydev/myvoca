import './App.css';
import styled from "styled-components";

// component
import VocaTemplate from "./Components/VocaTemplate";
import Detail from './Components/Detail';


function App() {
  return (
    <div className="App">
      <Title>나만의 사전</Title>
      <VocaTemplate></VocaTemplate>
      <Detail></Detail>
    </div>
  );
}

const Title = styled.h1`
`

export default App;
