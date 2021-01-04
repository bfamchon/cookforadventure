import Link from 'next/link'
import Head from 'components/Head'
import Newsletter from 'components/Newsletter'
import Section from 'components/section'
import SectionParagraph from 'components/section/paragraph'
import styled from 'styled-components';
import {NextSeo} from 'next-seo';

const Image = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 0 auto;
    box-shadow: 0 8px 24px 0 rgb(72 88 101 / 22%);
    margin-bottom: 20px;
`;

export default function About() {
    return (
        <>
            <NextSeo
                title="À propos"
                description="En savoir plus sur mes motivations et sur Cook For Adventure !"
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
            <Section id="made-with-love" title="Fait par un passionné">
                <Image src="/static/images/megnature.webp" />
                <SectionParagraph center><i>J'me présente, je m'appelle Baptiste !</i></SectionParagraph>
                <SectionParagraph>Et comme toi, j'aime les <strong>choses simples</strong> de la vie: partir à l'aventure et manger. Ce blog en est la bonne représentation !</SectionParagraph>
                <SectionParagraph>La nutrition de l'effort est un sujet qui m'intéresse depuis ces années où je suis passé de 110 à 70kg en quelques mois, grâce à un <strong>rééquilibrage alimentaire et au sport</strong>: vélo et course à pieds.</SectionParagraph>
                <SectionParagraph>Pour moi, la cuisine est d'abord un <strong>moyen de partager</strong>, faire plaisir et se <strong>faire plaisir</strong>. En l'associant au sport, je te partage ici mes deux passions à travers une multitude d'articles: la nutrition sportive n'aura plus de secrets pour toi !</SectionParagraph>
            </Section>
        </>
    )
}
