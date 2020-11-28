import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 85vh;
    width: 100%;
    background: url(${props => props.background}) no-repeat center center;
`;

const H1 = styled.h1`
    ${props => props.theme.h1}
`;

const H2 = styled.h2`
    ${props => props.theme.h2}
`;

const Head = ({title, subtitle, background}) => {
    return (
    <Container background={background}>
        <H1>{title || 'Cook for adventure'}</H1>
    <H2>{subtitle}</H2>
    </Container>);
};

Head.propTypes = {

};

export default Head;
