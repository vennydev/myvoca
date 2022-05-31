import styled from "styled-components";

const Voca = ({list}) => {
    return (
        <VocaStyle>
            <div>{list.word}</div>
            <div>{list.desc}</div>
            <div>{list.example}</div>
        </VocaStyle>
    )
}

const VocaStyle = styled.div`
    font-size: 24px;
`

export default Voca;