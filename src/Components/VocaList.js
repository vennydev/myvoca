import styled from "styled-components";
import { useSelector } from "react-redux";

// component
import Voca from "./Voca";

const VocaList = () => {
  const voca_lists = useSelector((state) => state.voca.list);
  return (
    <VocaListStyle>
      {voca_lists.map((l, idx) => {
        return <Voca key={idx} list={l}></Voca>;
      })}
    </VocaListStyle>
  );
};

const VocaListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  z-index: 10;
  overflow: scroll;
`;

export default VocaList;
