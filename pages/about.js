import Link from 'next/link'
import Head from 'components/Head'
import Newsletter from 'components/Newsletter'
import Section from 'components/section'
import SectionParagraph from 'components/section/paragraph'
import Megnature from 'components/Megnature'
import {NextSeo} from 'next-seo';

export default function About() {
    return (
        <>
            <NextSeo
                title="À propos du blog | Cook For Adventure"
                description="En savoir plus sur mes motivations et sur le blog Cook For Adventure !"
                canonical={`https://cookforadventure.com/about`}
                openGraph={{
                    type: 'website',
                    locale: 'fr_FR',
                    url: 'https://cookforadventure.com/about',
                    title:
                        "À propos du blog | Cook For Adventure",
                    description:
                        "En savoir plus sur mes motivations et sur le blog Cook For Adventure !",
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
            <Head background={'/static/images/about.webp'} subtitle={'Aventuriers, Épicuriens, ce site est fait pour vous.'}></Head>
            <Section id="why" title="Manifesto">
                <SectionParagraph>As-tu déjà ressenti cette sensation de ne <strong>pas savoir quoi manger pendant le sport</strong> ? De ne <strong>pas avoir assez de calories</strong> pour tes entraînements ? Ou sur tes randonnées de plusieurs jours ?</SectionParagraph>
                <SectionParagraph>C'était mon cas. Et mis à part les produits que l'on retrouvait dans les grandes enseignes (repas lyophilisés, snacks healthy...), souvent incomplets sur le plan nutritionnel, je ne savais pas quoi manger. Plutôt dommage étant donné que le progrès vient avec le <strong>repos et l'alimentation.</strong></SectionParagraph>
                <SectionParagraph>C'est de là que <strong>Cook For Adventure</strong> a vu le jour: <i>pourquoi ne pas proposer ce qui me manque aujourd'hui et le partager autour de moi ?</i></SectionParagraph>
            </Section>
            <Section id="made-for-you" title="Fait pour vous">
                <SectionParagraph>Si tu es arrivé sur Cook For Adventure, c’est que nous avons déjà plein de choses en commun. On aime l’aventure, on aime les bons plats, les plats rapides à préparer et on s’intéresse aux apports de ce que l’on consomme pendant le sport.</SectionParagraph>
                <SectionParagraph>Ça tombe bien : je te présente ici des <Link href={'/nutrition'}><a aria-label="recettes">recettes simples</a></Link>, des recettes enrichies d’informations nutritionnelles, des recettes que j’ai testées personnellement sur mes <Link href={'/adventures'}><a aria-label="récits d'aventure">randonnées et trails en autosuffisance.</a></Link> Et si tu te demandes comment cuisiner et transporter tes vivres quand tu pars à l'aventure, les <Link href={'/adventure-products'}><a aria-label="tests de produits">tests de produits</a></Link> répondront à tes attentes !</SectionParagraph>
                <SectionParagraph>Alors... Pour ne manquez aucune sortie, accéder à du contenu exclusif et faire partie de la communauté... Inscrit toi à la newsletter !</SectionParagraph> 
                <Newsletter />
            </Section>
            <Megnature/>
        </>
    )
}
