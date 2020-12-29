import styled from 'styled-components';
import PropTypes from 'prop-types';

import SectionTitle from 'components/section/title';
import SectionSeparator from 'components/section/separator';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding: 30px 0;
    margin: 0 10px;
    @media ${props => props.theme.device.mobileM} {
        margin: 0 20px;
    }
    @media ${props => props.theme.device.tablet} {
        margin: 0 40px;
    }
    @media ${props => props.theme.device.laptop} {
        margin: 0 ${props => props.marginLR}px;
    }
`;

const Section = ({id, title, marginLR = 200, children}) => {
    return (
        <Container id={id} marginLR={marginLR}>
            {title ? <><SectionTitle text={title} />
            <SectionSeparator /></> : null}
            {children}
        </Container>);
};

Section.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    marginLR: PropTypes.number
};

export default Section;
