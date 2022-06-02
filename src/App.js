// module
import "./App.css";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { db } from "./firebase";
import { loadVocaFB } from "./redux/modules/vocabulary";

// component
import VocaTemplate from "./Components/VocaTemplate";
import Detail from "./Components/Detail";

function App() {
  const dispatch = useDispatch();
  let history = useHistory();
  useEffect(() => {
    dispatch(loadVocaFB());
  }, []);
  return (
    <AppStyle className="App">
      <Title
        onClick={() => {
          history.push("/");
        }}
      >
        (-_ -)
      </Title>
      <Switch>
        <Route path="/" exact component={VocaTemplate}></Route>
        <Route path="/detail" component={Detail}></Route>
      </Switch>
    </AppStyle>
  );
}

const Title = styled.h1`
  cursor: pointer;
`;

const AppStyle = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  max-width: 500px;
  height: 670px;
  margin: 120px auto;
  z-index: -100;
`;

export default App;
