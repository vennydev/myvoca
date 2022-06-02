import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlug } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createVocaFB } from "../redux/modules/vocabulary";

const Detail = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    word: "",
    desc: "",
    example: "",
    completed: false,
  });

  const { word, desc, example } = inputs;

  // ref로 input 3개에 접근
  const nameInput = useRef(null);
  const descInput = useRef(null);
  const exampleInput = useRef(null);

  // input state 업데이트
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
        onClick={(e) => {
          if (word !== "" && desc !== "" && example !== "") {
            dispatch(createVocaFB(inputs));
            history.push("/");
          } else {
            alert("모든 칸을 채워주세요! :(");
          }
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

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;
  height: 100%;
`;

const Input = styled.input`
  font-size: 22px;
  border-radius: 2px;
  margin: 20px 0px;
  padding: 7px 12px;
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
