import Link from 'next/link'
import Head from 'components/Head'
import Newsletter from 'components/Newsletter'
import Section from 'components/section'
import SectionParagraph from 'components/section/paragraph'
import Articles from 'components/Articles'
import { NextSeo } from 'next-seo';
import { getAllArticlesAbout } from 'lib/articles'

export default function Adventures({ adventures }) {
    return (
        <>
            <NextSeo
                title="Récits d'aventures sportives"
                description="Vous retrouverez ici tous mes récits sportifs: randonnées,  courses... Je mets à l'épreuve ce que je vous présente sur le blog !"
                canonical={`https://cookforadventure.com/adventures`}
                openGraph={{
                    type: 'website',
                    locale: 'fr_FR',
                    url: 'https://cookforadventure.com/adventures',
                    title:
                        "Récits d'aventures sportives",
                    description:
                        "VVous retrouverez ici tous mes récits sportifs: randonnées,  courses... Je mets à l'épreuve ce que je vous présente sur le blog !",
                    images: [

                        {
                            url: 'https://cookforadventure.com/static/images/seo-miniature.webp',
                            width: 1200,
                            height: 630,
                            alt: 'Cook For Adventure miniature image',
                        },
                    ],
                    site_name: 'Cook For Adventure',
                }}
            />
            <Head title="Aventures" background={'/static/images/adventures.webp'} subtitle={"Les moments passés à explorer rendent l'ordinaire exceptionnel."}/>
            <Section id="last-recipes" title="Les derniers récits" marginLR={120}>
                <Articles articles={adventures} />
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

export const getStaticProps = async () => {
    const subject = 'adventures';
    return {
        props: {
            adventures: getAllArticlesAbout(subject),
        },
    };
};