import Link from 'next/link';
import styled from "styled-components";

const StyledNavigation = styled.nav`
    display: flex;
    position: absolute;
    flex-flow: wrap;
    top: 0;
    width: 100%;
    justify-content: center;
    align-items:  center;
    padding: 20px 0;

    & > a {
      ${props => props.theme.a}
      font-size: 20px;
      margin: 0 10px;
      color: white;
      text-shadow: 1px 1px 15px black;
    }
`;

const AppLogo = styled.img`
    width: 80px;
`;

const Navigation = () => {
  return (
    <StyledNavigation>
        <Link href={'/'} alt="Retourner à l'accueil">
          <a>
          </a>
        </Link>
        <Link href={'/'}>
          <a>Accueil</a>
        </Link>
        <Link href={'/adventure-recipes'}>
          <a>Recettes</a>
        </Link>
        <Link href={'/adventure-products'}>
          <a>Tests produits</a>
        </Link>
        <Link href={'/about'}>
          <a>À propos</a>
        </Link>
    </StyledNavigation>
  );
};

Navigation.propTypes = {};

export default Navigation;
