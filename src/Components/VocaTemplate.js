// componenets
import VocaList from "../Components/VocaList";
import styled from 'styled-components';

const VocaTemplate = () => {
    return (
        <VocaTemplateStyle>
            <VocaList></VocaList>
        </VocaTemplateStyle>
    )
}

const VocaTemplateStyle = styled.div`
    padding: 40px 5px;
    background-color: black;
    height: 68%;
    padding:10px;
`

export default VocaTemplate;