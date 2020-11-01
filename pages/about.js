import Link from 'next/link'
import Head from 'components/Head'
import Newsletter from 'components/Newsletter'
import Section from 'components/section'
import SectionParagraph from 'components/section/paragraph'

export default function About() {
    return (
        <>
            <Head background={'https://picsum.photos/id/1039/1920/1080'} subtitle={'Aventuriers Épicuriens, ce site est fait pour vous.'}></Head>
            <Section id="why" title="Fait pour vous">
                <SectionParagraph>Si tu es arrivé sur Cook For Adventure, c’est que nous avons déjà plein de choses en commun.</SectionParagraph>
                <SectionParagraph>On aime l’aventure, on aime les bons plats, les plats rapides à préparer et on s’intéresse aux apports de ce que l’on consomme pendant le sport.</SectionParagraph>
                <SectionParagraph>Ça tombe bien : je te présente ici des <Link href={'/adventure-recipes'}><a>recettes simples</a></Link>, des recettes enrichies d’informations nutritionnelles, des recettes que j’ai testées personnellement sur mes randonnées et trails en autosuffisance.</SectionParagraph>
                <SectionParagraph>Et si tu te demandes comment cuisiner quand on part à l'aventure, les <Link href={'/adventure-products'}><a>tests de produits</a></Link> répondront à tes attentes !</SectionParagraph>
                <SectionParagraph>Alors... Pour ne manquez aucune sortie et accéder à du contenu exclusif, inscrit toi à la newsletter !</SectionParagraph> 
                <Newsletter />
            </Section>
        </>
    )
}
