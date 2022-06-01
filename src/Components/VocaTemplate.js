// module
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlug } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { useState } from "react";

// component
import VocaList from "../Components/VocaList";

const VocaTemplate = () => {
  const history = useHistory();

  return (
    <VocaTemplateStyle>
      <VocaList></VocaList>
      <UpdateBtn
        onClick={() => {
          history.push("/detail");
        }}
      >
        <FontAwesomeIcon icon={faPlug}></FontAwesomeIcon>
      </UpdateBtn>
    </VocaTemplateStyle>
  );
};

const VocaTemplateStyle = styled.div`
  padding: 40px 5px;
  background-color: black;
  padding: 10px;
  height: 70%;
  z-index: 10;
`;

const UpdateBtn = styled.button`
  all: unset;
  font-size: 70px;
  padding: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: -100;
  :hover {
    transform: translateY(-20px);
  }
`;

export default VocaTemplate;
