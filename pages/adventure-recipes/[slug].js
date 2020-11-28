import Link from 'next/link'
import Head from 'components/Head'
import Title from 'components/blog/title';
import Tag from 'components/Tag';
import Section from 'components/section';
import SectionParagraph from 'components/section/paragraph';

import Newsletter from 'components/Newsletter';

import ReactMarkdown from 'react-markdown';
import styled, { withTheme } from 'styled-components';

import { getAllPaths, getARecipe } from 'lib/recipes';

const Image = styled.img`
    display: flex;
    margin: 0 auto;
    width: 100%;
    max-width: 800px;
    box-shadow: 0 8px 24px 0 rgb(72 88 101 / 22%);
    border-radius: 2px;
`;

const BlogParagraph = styled.p`
    ${props => props.theme.p}
    text-align: justify;
`

const List = styled.ul`
    ${props => props.theme.ul}
`

const TagContainer = styled.section`
    display: flex;
    flex-flow: wrap;
    justify-content: center;
`;

const HeadingLevelToComponent = (props) => {
    switch (props.level) {
        case 3:
            return <Title text={props.node.children[0].value}/>
        // default to H6 if you try to get a heading of level 0 or 7, as an example
        default:
            return <H6 {...props} />
    }
}

const AdventureRecipe = ({ recipe, theme }) => {
    const calcKcal = (p, l, g) => l*9 + (p + g) *4
    return (
        <>
            <Head background={recipe.img} title={recipe.title} subtitle={recipe.desc}/>
            
            <Section>
                <TagContainer>
                    <Tag backgroundColor={theme.colors.LIGHT_RED} color={theme.colors.RED}>Protéines {recipe.protein}g</Tag>
                    <Tag backgroundColor={theme.colors.LIGHT_ORANGE} color={theme.colors.ORANGE}>Glucides {recipe.carbohydrate}g</Tag>
                    <Tag backgroundColor={theme.colors.LIGHT_BLUE} color={theme.colors.BLUE}>Lipides {recipe.lipid}g</Tag>
                    <Tag backgroundColor={theme.colors.LIGHT_BLUE} color={theme.colors.BLUE}>Kcal {calcKcal(recipe.protein,recipe.lipid,recipe.carbohydrate)}</Tag>
                </TagContainer>
                <SectionParagraph center><em>* Valeurs au 100g</em></SectionParagraph>
            </Section>
            <Section id={recipe.slug}>
                <ReactMarkdown source={recipe.content} renderers={{
                    paragraph: BlogParagraph,
                    heading: HeadingLevelToComponent,
                    image: Image,
                    list: List
                }} />
            </Section>
            <Section id="newsletter" title="200% aventure, 0% spam">
                <SectionParagraph>Sur Cook For Adventure, je te présente <Link href={'/adventure-recipes'}><a aria-label="recettes">toutes mes recettes</a></Link> et <Link href={'/adventure-products'}><a aria-label="tests de produits">produits que j'utilise</a></Link>...</SectionParagraph>
                <SectionParagraph>Sans oublier les <Link href={'/adventures'}><a aria-label="adventures">récits d'aventures</a></Link> !</SectionParagraph>
                <SectionParagraph>Alors pour <Link href={'/about'}><a aria-label="à propos de Cook For Adventure">ne manquez aucune sortie</a></Link> et faire partie de la communauté, inscrit toi à la newsletter !</SectionParagraph>
                <Newsletter />
            </Section>
        </>
    )
}

export default withTheme(AdventureRecipe);

export const getStaticProps = async ({...ctx}) => {
    const { slug } = ctx.params;

    const recipe = getARecipe(slug);
    return {
        props: {
            recipe: getARecipe(slug),
        },
    };
};
export async function getStaticPaths() {
    return {
        paths : getAllPaths(),
        fallback: false,
    };
}