import styled from "styled-components";
import { useSelector } from "react-redux";

// component
import Voca from "./Voca"


const VocaList = () => {
  const voca_lists = useSelector((state) => state.voca);

    return (
        <VocaListStyle>
            {voca_lists.map((l, idx) => {
                return (<Voca list={l}></Voca>)
            })}
        </VocaListStyle>
    )
}

const VocaListStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
`


export default VocaList;