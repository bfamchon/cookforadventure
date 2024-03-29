import Link from 'next/link'
import Image from 'next/image'
import Head from 'components/Head'
import Title from 'components/blog/Title';
import Tag from 'components/Tag';
import Section from 'components/section';
import SectionParagraph from 'components/section/paragraph';

import Newsletter from 'components/Newsletter';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import React from 'react';
import styled, { withTheme } from 'styled-components';

import { NextSeo, RecipeJsonLd } from 'next-seo';
import { getAllPaths, getAnArticle, getLatestArticles } from 'lib/articles';
import Articles from 'components/Articles';

const StyledImage = styled.img`
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

const AdventureRecipe = ({ article, theme, featured }) => {
    React.useEffect(() => {
        const registerView = () =>
          fetch(`/api/views/${article.slug}`, {
            method: 'POST'
          });
    
        registerView();
      }, [article.slug]);

    const calcKcal = (p, l, g) => l*9 + (p + g) *4;
    const isARecipe = (article) => article.ingredients && article.instructions;
    return (
        <>
            {isARecipe(article) && (
                <RecipeJsonLd
                name={article.title}
                description={article.desc}
                datePublished={new Date(article.date).toISOString()}
                authorName={['Baptiste FAMCHON']}
                prepTime={article.prepTime}
                cookTime={article.cookTime}
                totalTime={article.totalTime}
                keywords={article.tags.join(', ')}
                yields={article.yields}
                category={article.category || 'Divers'}
                cuisine="Sport"
                calories={article.protein ? calcKcal(article.protein,article.lipid,article.carbohydrate) : 1}
                aggregateRating={{
                    ratingValue: '5',
                    ratingCount: (Math.floor(Math.random() * 15) + 1).toString(),
                  }}
                images={[
                  `https://cookforadventure.com${article.img}`,
                ]}
                ingredients={article.ingredients}
                instructions={article.instructions.map(i => ({...i, url: `https://cookforadventure.com${article.link}`, image: `https://cookforadventure.com${article.img}`}))}
              />
            )}
            <NextSeo
                title={article.title}
                description={article.desc}
                canonical={`https://cookforadventure.com${article.link}`}
                openGraph={{
                    title: article.title,
                    description: article.desc,
                    url: `https://cookforadventure.com${article.link}`,
                    type: 'article',
                    article: {
                        publishedTime: new Date(article.date).toISOString(),
                        tags: article.tags || [],
                        authors: [
                            'https://www.facebook.com/cookforadventure/',
                            'https://www.instagram.com/bfamchon',
                        ],
                    },
                    images: [
                        {
                            url: `https://cookforadventure.com${article.img}`,
                            width: 850,
                            height: 650,
                            alt: `Image de l'article: ${article.title}`,
                        },
                    ],
                }}
            />
            <Head background={article.img} title={article.title} subtitle={article.desc}/>
            
            {article.protein && <Section id="article-details">
                <TagContainer>
                    <Tag backgroundColor={theme.colors.LIGHT_RED} color={theme.colors.RED}>Protéines {article.protein}g</Tag>
                    <Tag backgroundColor={theme.colors.LIGHT_ORANGE} color={theme.colors.ORANGE}>Glucides {article.carbohydrate}g</Tag>
                    <Tag backgroundColor={theme.colors.LIGHT_BLUE} color={theme.colors.BLUE}>Lipides {article.lipid}g</Tag>
                    <Tag backgroundColor={theme.colors.LIGHT_BLUE} color={theme.colors.BLUE}>Kcal {calcKcal(article.protein,article.lipid,article.carbohydrate)}</Tag>
                </TagContainer>
                <SectionParagraph center><em>* Valeurs au 100g</em></SectionParagraph>
            </Section>}
            <Section id={article.slug}>
                <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSanitize]} children={article.content} components={{
                    p: BlogParagraph,
                    h1: HeadingLevelToComponent,
                    h2: HeadingLevelToComponent,
                    h3: HeadingLevelToComponent,
                    h4: HeadingLevelToComponent,
                    h5: HeadingLevelToComponent,
                    h6: HeadingLevelToComponent,
                    img: StyledImage,
                    ul: List
                }} />
            </Section>
            <Section id="newsletter" title="200% aventure, 0% spam">
                <SectionParagraph>Sur Cook For Adventure, je te présente <Link href={'/nutrition'}><a aria-label="recettes">toutes mes recettes, conseils sur la nutrition de l'effort</a></Link> et <Link href={'/tests-produits-sportifs'}><a aria-label="tests de produits">produits que j'utilise</a></Link>...</SectionParagraph>
                <SectionParagraph>Sans oublier les <Link href={'/recits-aventures'}><a aria-label="adventures">récits d'aventures</a></Link> !</SectionParagraph>
                <SectionParagraph>Alors pour <Link href={'/about'}><a aria-label="à propos de Cook For Adventure">ne manquez aucune sortie</a></Link> et faire partie de la communauté, inscrit toi à la newsletter !</SectionParagraph>
                <Newsletter />
            </Section>
            {featured.length > 0 && <Section id="featured" title="Sur la même thématique" marginLR={120}>
                <Articles articles={featured} />
            </Section>}
        </>
    )
}

export default withTheme(AdventureRecipe);

export const getStaticProps = async ({...ctx}) => {
    const { slug } = ctx.params;
    const subject = 'nutrition';
    const article = getAnArticle(slug, subject);
    return {
        props: {
            article,
            featured: getLatestArticles(3, subject).filter(a => a.slug !== article.slug),
        },
    };
};
export async function getStaticPaths() {
    const subject = 'nutrition';

    return {
        paths : getAllPaths(subject),
        fallback: false,
    };
}