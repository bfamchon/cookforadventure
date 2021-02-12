import Link from 'next/link'
import Head from 'components/Head'
import Newsletter from 'components/Newsletter'
import Section from 'components/section'
import SectionParagraph from 'components/section/paragraph'
import Articles from 'components/Articles'
import { NextSeo } from 'next-seo';
import { getAllArticlesAbout } from 'lib/articles'

export default function AdventureRecipes({ recipes }) {
    return (
        <>
            <NextSeo
                title="Conseils nutrition et recettes dédiés au sport"
                description="Vous retrouverez ici tous les conseils en nutrition et recettes dédiées à l'effort !"
                canonical={`https://cookforadventure.com/nutrition`}
                openGraph={{
                    type: 'website',
                    locale: 'fr_FR',
                    url: 'https://cookforadventure.com/nutrition',
                    title:
                        "Conseils nutrition et recettes dédiés au sport",
                    description:
                        "Vous retrouverez ici tous les conseils en nutrition et recettes dédiées à l'effort !",
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
            <Head title="Nutrition du sportif" background={'/static/images/nutrition.webp'} subtitle={"Manger mieux, pour avancer plus loin !"}/>
            <Section id="sport-nutrition" title="Sport et nutrition, la recette qui fonctionne !" marginLR={120}>
                <SectionParagraph>Que ce soit avant, pendant ou après une séance, pour <strong>entretenir</strong> sa forme, <strong>développer</strong> sa masse musculaire ou encore ou <strong>perdre du gras</strong>, la nutrition joue un <strong>rôle crucial</strong> dans l'atteinte de nos objectifs.</SectionParagraph>
                <SectionParagraph>En effet, notre corps <strong>utilise son glycogène</strong> pendant l'effort, nos <strong>fibres musculaires se cassent</strong>, nous perdons parfois de grandes quantités d'<strong>électrolytes</strong> dans la sueur... Et il faut <strong>réparer</strong> tout ça après la séance ! Avec les <strong>bons nutriments</strong>, nous pouvons aider notre corps à <strong>récupérer plus rapidement</strong>.</SectionParagraph>
                <SectionParagraph>D'ailleurs, <Link href={'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4540168/'}><a aria-label="Étude sur le rôle de la nutrition chez le sportif">des études</a></Link> prouvent que de bonnes <strong>stratégies alimentaires</strong> facilitent la <strong>performance</strong> et la <strong>récupération</strong>.</SectionParagraph>
                <SectionParagraph><i>Convaincu de l'<strong>importance d'une bonne alimentation</strong> depuis de nombreuses années, je <strong>partage</strong> avec vous mes meilleures <strong>recettes et conseils</strong> ci-dessous, pour que la nutrition sportive n'ait plus de secrets pour vous !</i></SectionParagraph>
            </Section>
            <Section id="last-recipes" title="Les derniers articles" marginLR={120}>
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
            recipes: getAllArticlesAbout('nutrition'),
        },
    };
};