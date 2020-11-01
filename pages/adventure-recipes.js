import Link from 'next/link'
import Head from 'components/Head'
import Newsletter from 'components/Newsletter'
import Section from 'components/section'
import SectionParagraph from 'components/section/paragraph'
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AdventureRecipes() {
    return (
        <>
            <Head background={'https://picsum.photos/id/1039/1920/1080'} subtitle={"La recette d'un bon repas, c'est de le partager."}></Head>
            <Section id="why" title="Les dernières recettes">
                <SectionParagraph>En construction <FontAwesomeIcon icon={faTools} /> !</SectionParagraph>
                <SectionParagraph>Pour <Link href={'about'}><a>ne manquez aucune sortie</a></Link>, inscrit toi à la newsletter !</SectionParagraph>
                <Newsletter />
            </Section>
        </>
    )
}
