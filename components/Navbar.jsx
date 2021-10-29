import Link from 'next/link';
import React from 'react';
import styled from "styled-components";

const StyledNavigation = styled.nav`
    transition: background-color 0.3s ease;
    display: flex;
    position: fixed;
    flex-flow: wrap;
    top: 0;
    width: 100%;
    justify-content: center;
    align-items:  center;
    padding: 10px 0;
    background-color: ${props => props.scrollBackground};
    z-index: 3;

    & > a {
      transition: all 0.1s ease;
      ${props => props.theme.a}
      font-weight: 600;
      text-decoration: none;
      font-size: 20px;
      margin: 0 15px;
      color: ${props => props.scrollBackground === 'var(--white)' ? 'var(--black)' : 'var(--white)'};
      text-shadow: ${props => props.scrollBackground !== 'var(--white)' ? '1px 1px 2px var(--black)' : 'none'};

      :hover {
        text-decoration: underline;
      }
      :active {
        color: inherit;
        text-shadow: none;
      }
    }
`;

const AppLogo = styled.img`
    width: 80px;
`;

const Navigation = () => {
  const [scrollBackground, setScrollBackground] = React.useState('transparent');
  const scrollListener = () => {
      if (window.scrollY > 200) {
          setScrollBackground('var(--white)');
      } else if (window.scrollY > 100 && window.scrollY < 200) {
        setScrollBackground('var(--white-30)');
      } else if (window.scrollY < 100) {
        setScrollBackground('transparent');
      }
  };
  React.useEffect(() => {
      window.addEventListener('scroll', scrollListener);
      return () => window.removeEventListener('scroll', scrollListener);
  }, []);
  return (
    <StyledNavigation scrollBackground={scrollBackground}>
        <Link href={'/'} alt="Retourner à l'accueil">
          <a>
          </a>
        </Link>
        <Link href={'/'}>
          <a>Accueil</a>
        </Link>
        <Link href={'/nutrition'}>
          <a>Nutrition</a>
        </Link>
        <Link href={'/recits-aventures'}>
          <a>Récits d'aventures</a>
        </Link>
        <Link href={'/tests-produits-sportifs'}>
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
