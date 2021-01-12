import Link from 'next/link'
import Head from 'components/Head'
import Title from 'components/blog/Title';
import Tag from 'components/Tag';
import Section from 'components/section';
import SectionParagraph from 'components/section/paragraph';

import Newsletter from 'components/Newsletter';

import ReactMarkdown from 'react-markdown';
import styled, { withTheme } from 'styled-components';
import { getAllPaths, getAnArticle, getLatestArticles } from 'lib/articles';

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

export default function AdventureProduct({ article, featured }) {
    return (
        <>
            <Head background={article.img} title={article.title} subtitle={article.desc}/>
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
            {featured.length > 0 && <Section id="featured" title="Sur la même thématique" marginLR={120}>
                <Articles articles={featured} />
            </Section>}
        </>
    )
}

export const getStaticProps = async ({...ctx}) => {
    const { slug } = ctx.params;
    const subject = 'adventure-products';
    const article = getAnArticle(slug, subject);
    return {
        props: {
            article,
            featured: getLatestArticles(3, subject).filter(a => a.slug !== article.slug),
        },
    };
};
export async function getStaticPaths() {
    const subject = 'adventure-products';
    return {
        paths : getAllPaths(subject),
        fallback: false,
    };
}