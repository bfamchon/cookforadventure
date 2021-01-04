import Link from 'next/link';
import Head from 'components/Head';
import Tag from 'components/Tag';
import Newsletter from 'components/Newsletter';
import Title from 'components/blog/Title';
import Section from 'components/section';
import SectionParagraph from 'components/section/paragraph';

import ReactMarkdown from 'react-markdown';
import styled, {withTheme} from 'styled-components';
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getAllPaths, getAnAdventure } from 'lib/adventures';
import { NextSeo } from 'next-seo';

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

const Adventure = ({ article, theme }) => {
    return (
        <>            
        <NextSeo
                title={article.title}
                description={article.desc}
            openGraph={{
                title: article.title,
                description: article.desc,
                url: `https://cookforadventure.com${article.link}`,
                type: 'article',
                article: {
                    publishedTime: new Date(article.date).toISOString(),
                    tags: article.tags || [],
                },
                images: [
                    {
                        url: `https://cookforadventure.com${article.img}`,
                        width: 850,
                        height: 650,
                        alt: `Cover picture of article ${article.title}`,
                    },
                ],
            }}
        />
            <Head background={article.img} title={article.title} subtitle={article.desc}/>
            <Section>
                <TagContainer>
                    <Tag backgroundColor={theme.colors.LIGHT_RED} color={theme.colors.RED}>{article.kms} kms</Tag>
                    <Tag backgroundColor={theme.colors.LIGHT_ORANGE} color={theme.colors.ORANGE}>{article.days} jours</Tag>
                    <Tag backgroundColor={theme.colors.LIGHT_BLUE} color={theme.colors.BLUE}>{article.elevation}m <FontAwesomeIcon icon={faLongArrowAltUp} transform={{ rotate: 42 }}/></Tag>
                </TagContainer>
            </Section>
            <Section id={article.slug}>
                <ReactMarkdown source={article.content} renderers={{
                    paragraph: BlogParagraph,
                    heading: HeadingLevelToComponent,
                    image: Image,
                    list: List
                }} />
            </Section>
            <Section id="newsletter" title="200% aventure, 0% spam">
                <SectionParagraph>Sur Cook For Adventure, je te présente <Link href={'/nutrition'}><a aria-label="recettes">toutes mes recettes, conseils sur la nutrition de l'effort</a></Link> et <Link href={'/adventure-products'}><a aria-label="tests de produits">produits que j'utilise</a></Link>...</SectionParagraph>
                <SectionParagraph>Sans oublier les <Link href={'/adventures'}><a aria-label="adventures">récits d'aventures</a></Link> !</SectionParagraph>
                <SectionParagraph>Alors pour <Link href={'/about'}><a aria-label="à propos de Cook For Adventure">ne manquez aucune sortie</a></Link> et faire partie de la communauté, inscrit toi à la newsletter !</SectionParagraph>
                <Newsletter />
            </Section>
        </>
    )
}
export default withTheme(Adventure);

export const getStaticProps = async ({...ctx}) => {
    const { slug } = ctx.params;
    return {
        props: {
            article: getAnAdventure(slug),
        },
    };
};
export async function getStaticPaths() {
    return {
        paths : getAllPaths(),
        fallback: false,
    };
}