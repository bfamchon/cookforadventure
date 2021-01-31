import styled from 'styled-components';
import Image from 'next/image';
import Section from 'components/section';
import SectionParagraph from 'components/section/paragraph'

const StyledImage = styled(Image)`
    display: flex;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    box-shadow: 0 8px 24px 0 rgb(72 88 101 / 22%);
    margin-bottom: 20px;
`;

const Megnature = () => (
    <Section id="made-with-love" title="Fait par un passionné">
        <StyledImage unsized src="/static/images/megnature.webp" alt="Baptiste, créateur du blog Cook For Adventure"/>
        <SectionParagraph center><i>J'me présente, je m'appelle Baptiste !</i></SectionParagraph>
        <SectionParagraph>Et comme toi, j'aime les <strong>choses simples</strong> de la vie: partir à l'aventure et manger. Ce blog en est la bonne représentation !</SectionParagraph>
        <SectionParagraph>La nutrition de l'effort est un sujet qui m'intéresse depuis ces années où je suis passé de 110 à 70kg en quelques mois, grâce à un <strong>rééquilibrage alimentaire et au sport</strong>: vélo et course à pieds.</SectionParagraph>
        <SectionParagraph>Pour moi, la cuisine est d'abord un <strong>moyen de partager</strong>, faire plaisir et se <strong>faire plaisir</strong>. En l'associant au sport, je te partage ici mes deux passions à travers une multitude d'articles: la nutrition sportive n'aura plus de secrets pour toi !</SectionParagraph>
    </Section>
);

export default Megnature;
