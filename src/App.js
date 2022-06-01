// module
import './App.css';
import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

// component
import VocaTemplate from "./Components/VocaTemplate";
import Detail from './Components/Detail';


function App() {

  return (
    <AppStyle className="App">
      <h1>나만의 사전</h1>
      <Switch>
      <Route path="/" exact component={VocaTemplate}></Route>
      <Route path="/detail" component={Detail}></Route>
      </Switch>
    </AppStyle>
  );
}

const AppStyle = styled.div`
border: 1px solid black;
border-radius: 4px;
max-width: 500px;
height: 670px;
margin:120px auto;
z-index: -100;
`




export default App;
