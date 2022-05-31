import styled from "styled-components";
import { useSelector } from "react-redux";

// component
import Voca from "./Voca"


const VocaList = () => {
  const voca_lists = useSelector((state) => state.voca);

    return (
        <div>
            {voca_lists.map((l, idx) => {
                return (<Voca list={l}></Voca>)
            })}
            <div>voca list 컴포넌트입니다.</div>
            <div>voca1</div>
            <div>voca2</div>
            <div>voca3</div>
        </div>
    )
}



export default VocaList;