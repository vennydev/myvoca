import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlug } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createVoca } from "../redux/modules/vocabulary";

const Detail = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    word: "",
    desc: "",
    example: "",
    completed: false,
  });

  const { word, desc, example } = inputs;
  const history = useHistory();

  const nameInput = useRef(null);
  const descInput = useRef(null);
  const exampleInput = useRef(null);

  const onChange = (e) => {
    const { value, name } = e.target;
    const new_voca = { ...inputs, [name]: value };
    setInputs(new_voca);
  };
  return (
    <DetailStyle>
      <InputWrapper>
        <Input
          name="word"
          ref={nameInput}
          value={word || ""}
          onChange={onChange}
          placeholder="word"
          type="text"
        />
        <Input
          name="desc"
          ref={descInput}
          value={desc || ""}
          onChange={onChange}
          placeholder="description"
          type="text"
        />
        <Input
          name="example"
          ref={exampleInput}
          value={example || ""}
          onChange={onChange}
          placeholder="example"
          type="text"
        />
      </InputWrapper>
      <UpdateBtn
        onClick={() => {
          history.push("/");
          dispatch(createVoca(inputs));
        }}
      >
        <FontAwesomeIcon icon={faPlug}></FontAwesomeIcon>
      </UpdateBtn>
    </DetailStyle>
  );
};

const DetailStyle = styled.div`
  background-color: black;
  height: 70%;
  position: relative;
  box-sizing: border-box;
`;

const Input = styled.input`
  font-size: 20px;
  border-radius: 2px;
  margin: 20px 0px;
  padding: 5px 10px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
`;

const UpdateBtn = styled.button`
  all: unset;
  font-size: 70px;
  padding: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: -100;
  :hover {
    transform: translateY(-30px);
  }
`;

export default Detail;
