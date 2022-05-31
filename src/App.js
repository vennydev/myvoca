import './App.css';
import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlug } from "@fortawesome/free-solid-svg-icons";

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
      <UpdateBtn>
        <FontAwesomeIcon icon={faPlug}></FontAwesomeIcon>
      </UpdateBtn>
    </AppStyle>
  );
}

const AppStyle = styled.div`
border: 1px solid black;
border-radius: 4px;
max-width: 500px;
height: 650px;
margin:120px auto;
`

const UpdateBtn = styled.button`
  all:unset;
  font-size: 70px;
  padding:4px;
  margin-top:10px;
  cursor:pointer;
  transition: all .3s ease-in-out;

  :hover{
    transform: translateY(-40px);
}
`




export default App;
