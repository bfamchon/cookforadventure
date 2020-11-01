import Link from 'next/link'
import Head from 'components/Head'
import Newsletter from 'components/Newsletter'
import Section from 'components/section'
import SectionParagraph from 'components/section/paragraph'
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AdventureProducts() {
    return (
        <>
            <Head background={'https://picsum.photos/id/1039/1920/1080'} subtitle={"Partir à l'aventure avec les bons outils, c'est essentiel."}></Head>
            <Section id="why" title="Les derniers produits testés">
                <SectionParagraph>En construction <FontAwesomeIcon icon={faTools}/> !</SectionParagraph>
                <SectionParagraph>Pour <Link href={'about'}><a>ne manquez aucune sortie</a></Link>, inscrit toi à la newsletter !</SectionParagraph>
                <Newsletter />
            </Section>
        </>
    )
}
