import styled from "styled-components";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { updateVoca } from "../redux/modules/vocabulary";

const Voca = ({ list, id, completed }) => {
  const dispatch = useDispatch();
  return (
    // props로 받은 completed로 조건부 styling 실행
    <VocaStyle completed={completed}>
      <div>
        <Word>{list.word}</Word>
        <Description>
          <Desc>{list.desc}</Desc>
          <Example>{list.example}</Example>
        </Description>
      </div>

      <DoneBtn
        onClick={() => {
          dispatch(updateVoca(id));
        }}
      >
        <FontAwesomeIcon icon={faBolt}></FontAwesomeIcon>
      </DoneBtn>
    </VocaStyle>
  );
};

const VocaStyle = styled.div`
  font-size: 20px;
  background: ${(props) =>
    props.completed ? "linear-gradient(#C5EE6A, #48D102)" : "white"};
  position: relative;
  z-index: 10;
`;

const Description = styled.button`
  all: unset;
  margin-bottom: 5px;
`;

const Word = styled.div`
  font-weight: 900;
  margin: 10px 0px;
`;
const Desc = styled.div`
  font-size: 18px;
`;
const Example = styled.div`
  font-size: 18px;
  font-weight: 100;
  color: blue;
`;

const DoneBtn = styled.button`
  all: unset;
  width: 27px;
  height: 27px;
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 30px;
  transition: all 0.2s linear;
  :hover {
    background-color: yellow;
    transform: scale(1.1);
  }
`;

export default Voca;
