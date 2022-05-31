import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const Voca = ({list}) => {
    return (
        <VocaStyle>
            <div>
            <Word>{list.word}</Word>
            <Description>
            <Desc>{list.desc}</Desc>
            <Example>{list.example}</Example>
            </Description>
            </div>
            <DoneBtn>
            <FontAwesomeIcon icon={faBolt}></FontAwesomeIcon>
            </DoneBtn>
        </VocaStyle>
    )
}

const VocaStyle = styled.div`
    font-size: 20px;
    background-color: aliceblue;
    position: relative;
`

const Description = styled.button`
    all:unset;
    margin-bottom: 5px;
`

const Word = styled.div`
    font-weight: 900;
    margin: 10px 0px;
`
const Desc = styled.div`
    font-size: 18px;
`
const Example = styled.div`
    font-size: 18px;
    font-weight: 100;
    color:blue;
`

const DoneBtn = styled.button`
all:unset;
width:27px;
height: 27px;
border: 1px solid black;
border-radius: 50%;
cursor: pointer;
position: absolute;
right:20px;
top:30px;
transition: all .2s linear;
:hover{
    background-color: yellow;
    transform: scale(1.1);
}
`

export default Voca;

