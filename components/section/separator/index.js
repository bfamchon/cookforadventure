import styled from 'styled-components';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
font-size: 8px;
text-align: center;
margin-bottom: 25px;

    & > * {
        padding: 3px;
    }
`;

const SectionSeparator = () => {
    return (
        <Container>
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
        </Container>
    );
};

export default SectionSeparator;
