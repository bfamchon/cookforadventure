import Link from 'next/link'
import Head from 'components/Head'
import Newsletter from 'components/Newsletter'
import Section from 'components/section'
import SectionParagraph from 'components/section/paragraph'
import Articles from 'components/Articles'
import { getLatestPosts } from 'lib/articles';

export default function Home({articles}) {
  return (
    <>
      <Head background={'https://cfa-images.s3.eu-west-3.amazonaws.com/20201010_142205.jpg'} subtitle={'Une recette, une aventure'}></Head>
      <Section id="made-for-you" title="Fait pour vous">
        <SectionParagraph>Si tu es arrivé sur Cook For Adventure, c’est que nous avons déjà plein de choses en commun. On aime l’aventure, on aime les bons plats, les plats rapides à préparer et on s’intéresse aux apports de ce que l’on consomme pendant le sport.</SectionParagraph>
        <SectionParagraph>Ça tombe bien : je te présente ici des <Link href={'/adventure-recipes'}><a aria-label="recettes">recettes simples</a></Link>, des recettes enrichies d’informations nutritionnelles, des recettes que j’ai testées personnellement sur mes <Link href={'/adventures'}><a aria-label="récits d'aventure">randonnées et trails en autosuffisance.</a></Link> Et si tu te demandes comment cuisiner et transporter tes vivres quand tu pars à l'aventure, les <Link href={'/adventure-products'}><a aria-label="tests de produits">tests de produits</a></Link> répondront à tes attentes !</SectionParagraph>
        <SectionParagraph><Link href={'/about'}><a aria-label="à propos"><i>En savoir plus sur mes motivations...</i></a></Link></SectionParagraph>
        <SectionParagraph>Alors... Pour ne manquez aucune sortie, accéder à du contenu exclusif et faire partie de la communauté... Inscrit toi à la newsletter !</SectionParagraph>
      </Section>
      <Section id="newsletter" title="200% aventure, 0% spam">
        <Newsletter />
      </Section>
      <Section id="latest" title="Les dernières sorties">
        <Articles articles={articles} />
      </Section>
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      articles: getLatestPosts(3),
    },
  };
};
