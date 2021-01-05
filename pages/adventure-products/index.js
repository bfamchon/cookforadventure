import Link from 'next/link'
import Head from 'components/Head'
import Newsletter from 'components/Newsletter'
import Section from 'components/section'
import SectionParagraph from 'components/section/paragraph'
import Articles from 'components/Articles'
import { getAllProducts } from 'lib/products';

export default function AdventureProducts({ products }) {
    return (
        <>
            <NextSeo
                title="Tests produits"
                description="Vous retrouverez ici tous les tests de produits dédiés à l'aventure !"
                canonical='https://cookforadventure.com/adventure-products'
            />
            <Head background={'/static/images/adventure-products.webp'} subtitle={"Emporte avec toi le minimum, mais choisis ce minimum avec beaucoup d'importance !"}/>
            <Section id="last-products" title="Les dernières produits testés">
                {products && <Articles articles={products} />}
                {products.length === 0 && <SectionParagraph center>En cours d'écriture !</SectionParagraph>}
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
            products: getAllProducts(),
        },
    };
};