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
                title="Cook For Adventure | Des recettes pour l'aventure"
                description="Vous retrouverez ici toutes les recettes avec indications nutritionelles dédiées à l'effort !"
            />
            <Head background={'/static/images/adventure-recipes.jpg'} subtitle={"Manger mieux, pour voyager plus loin !"}/>
            <Section id="last-recipes" title="Les dernières recettes">
                <Articles articles={recipes} />
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

export const getStaticProps = async () => {
    return {
        props: {
            recipes: getAllRecipes(),
        },
    };
};