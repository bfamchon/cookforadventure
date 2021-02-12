import Link from "next/link";
import styled from "styled-components";
import { faHeart, faAt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faStrava } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledFooter = styled.footer`
    ${props => props.theme.footer}
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 70px 0;
`;

const MadeWithLove = styled.p`
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-top: 0;
    & > * {
        color : ${props => props.theme.colors.RED};
    }
`;
const Networks = styled.p`
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-bottom: 0;
    & > * {
        color: ${props => props.theme.colors.BLACK};
        margin: 10px 20px;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <MadeWithLove>Fait avec&nbsp;<FontAwesomeIcon icon={faHeart}/></MadeWithLove>
            <Networks>
                <Link href={'https://www.instagram.com/bfamchon'} title="Rejoins moi sur Instagram !"><a rel="me" aria-label="Rejoins moi sur Instagram !"><FontAwesomeIcon icon={faInstagram} size={'lg'}/></a></Link>
                <Link href={'https://www.facebook.com/cookforadventure/'} title="Rejoins moi sur Facebook !"><a rel="me" aria-label="Rejoins moi sur Facebook !"><FontAwesomeIcon icon={faFacebook} size={'lg'}/></a></Link>
                <Link href={'https://www.strava.com/athletes/25128286'} title="Rejoins moi sur Strava !"><a rel="me" aria-label="Rejoins moi sur Strava !"><FontAwesomeIcon icon={faStrava} size={'lg'}/></a></Link>
                <a href='mailto:cookforadventure@gmail.com' title="Contactez moi par mail !" aria-label="Me contacter par mail"><FontAwesomeIcon icon={faAt} size={'lg'}/></a>
            </Networks>
    </StyledFooter>
    );
};

export default Footer;
