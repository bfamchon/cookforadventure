import Link from 'next/link'
import Head from 'components/Head'
import Newsletter from 'components/Newsletter'
import Section from 'components/section'
import SectionParagraph from 'components/section/paragraph'
import Articles from 'components/Articles'
import { getAllRecipes } from 'lib/recipes';
import { NextSeo } from 'next-seo';

export default function AdventureRecipes({ recipes }) {
    return (
        <>
            <NextSeo
                title="La nutrition dédiée aux sportifs"
                description="Vous retrouverez ici tous les conseils nutrition et recettes dédiées à l'effort !"
            />
            <Head background={'/static/images/nutrition.webp'} subtitle={"Manger mieux, pour avancer plus loin !"}/>
            <Section id="last-recipes" title="Les derniers articles">
                <Articles articles={recipes} />
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
    return {
        props: {
            recipes: getAllRecipes(),
        },
    };
};