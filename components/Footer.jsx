import styled from "styled-components";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledFooter = styled.footer`
    ${props => props.theme.footer}
    display: flex;
    justify-content: center;
    padding: 70px 0;
    & > * {
        color : ${props => props.theme.colors.RED};
    }
`;

const Footer = () => {
    return (
        <StyledFooter>Fait avec&nbsp;<FontAwesomeIcon icon={faHeart}/></StyledFooter>
    );
};

export default Footer;
