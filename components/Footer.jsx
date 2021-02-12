import Link from "next/link";
import styled from "styled-components";
import { faHeart, faAt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faStrava, faPinterest } from '@fortawesome/free-brands-svg-icons';
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
        transition: color 0.3s ease;
    }
    & > *:hover {
        color: ${props => props.theme.colors.BROWN};
    }
    & > *:focus {
        color: ${props => props.theme.colors.BROWN};
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <MadeWithLove>Fait avec&nbsp;<FontAwesomeIcon icon={faHeart}/></MadeWithLove>
            <Networks>
                <Link href={'https://www.instagram.com/bfamchon'}><a title="Rejoins moi sur Instagram !" rel="me" aria-label="Rejoins moi sur Instagram !"><FontAwesomeIcon icon={faInstagram} size={'lg'}/></a></Link>
                <Link href={'https://www.facebook.com/cookforadventure/'}><a title="Rejoins moi sur Facebook !" rel="me" aria-label="Rejoins moi sur Facebook !"><FontAwesomeIcon icon={faFacebook} size={'lg'}/></a></Link>
                <Link href={'https://www.strava.com/athletes/25128286'}><a title="Rejoins moi sur Strava !" rel="me" aria-label="Rejoins moi sur Strava !"><FontAwesomeIcon icon={faStrava} size={'lg'}/></a></Link>
                <Link href={'https://www.pinterest.fr/baptistefamchon'}><a title="Rejoins moi sur Pinterest !" rel="me" aria-label="Rejoins moi sur Pinterest !"><FontAwesomeIcon icon={faPinterest} size={'lg'}/></a></Link>
                <a href='mailto:cookforadventure@gmail.com' title="Contactez moi par mail !" aria-label="Me contacter par mail"><FontAwesomeIcon icon={faAt} size={'lg'}/></a>
            </Networks>
    </StyledFooter>
    );
};

export default Footer;
