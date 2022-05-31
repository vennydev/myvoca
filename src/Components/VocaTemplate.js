// componenets
import VocaList from "../Components/VocaList";
import styled from 'styled-components';

const VocaTemplate = () => {
    return (
        <VocaTemplateStyle>
            <div>Vocatemplate 컴포넌트입니다</div>
            <VocaList></VocaList>
        </VocaTemplateStyle>
    )
}

const VocaTemplateStyle = styled.div`
    
`

export default VocaTemplate;