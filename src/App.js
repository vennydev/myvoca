import './App.css';
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlug } from "@fortawesome/free-solid-svg-icons";

// component
import VocaTemplate from "./Components/VocaTemplate";
import Detail from './Components/Detail';


function App() {
  return (
    <div className="App">
      <Title>나만의 사전</Title>
      <Switch>
      <Route path="/" exact component={VocaTemplate}></Route>
      <Route path="/detail" component={Detail}></Route>
      </Switch>
      <UpdateBtn>
        <FontAwesomeIcon icon={faPlug}></FontAwesomeIcon>
      </UpdateBtn>
    </div>
  );
}

const Title = styled.h1`
`

const UpdateBtn = styled.button`
  all:unset;
  font-size: 70px;
  padding:4px;
  margin-top:10px;
  cursor:pointer;
`




export default App;
