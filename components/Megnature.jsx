import styled from 'styled-components';
import Image from 'next/image';
import Section from 'components/section';
import SectionParagraph from 'components/section/paragraph'

const ImageContainer = styled.span`
    display: flex;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 50%;
    box-shadow: 0 8px 24px 0 rgb(72 88 101 / 22%);
`;

const Megnature = () => (
    <Section id="made-with-love" title="Fait par un passionné">
        <ImageContainer>
            <Image className="img-megnature" width='200' height='200' src="/static/images/megnature.webp" alt="Baptiste, créateur du blog Cook For Adventure"/>
        </ImageContainer>
        <SectionParagraph center><i>J'me présente, je m'appelle Baptiste !</i></SectionParagraph>
        <SectionParagraph>Et comme toi, j'aime les <strong>choses simples</strong> de la vie: partir à l'aventure et manger. Ce blog en est la bonne représentation !</SectionParagraph>
        <SectionParagraph>La nutrition de l'effort est un sujet qui m'intéresse depuis ces années où je suis passé de 110 à 70kg en quelques mois, grâce à un <strong>rééquilibrage alimentaire et au sport</strong>: vélo et course à pieds.</SectionParagraph>
        <SectionParagraph>Pour moi, la cuisine est d'abord un <strong>moyen de partager</strong>, faire plaisir et se <strong>faire plaisir</strong>. En l'associant au sport, je te partage ici mes deux passions à travers une multitude d'articles: la nutrition sportive n'aura plus de secrets pour toi !</SectionParagraph>
    </Section>
);

export default Megnature;
