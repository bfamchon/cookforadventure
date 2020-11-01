import styled from 'styled-components';
import PropTypes from 'prop-types';

import SectionTitle from 'components/section/title';
import SectionSeparator from 'components/section/separator';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding: 30px 0;
    margin: 0 80px;
`;

const Section = ({id, title, children}) => {
    return (
        <Container id={id}>
            <SectionTitle text={title} />
            <SectionSeparator />
            {children}
        </Container>);
};

Section.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Section;
