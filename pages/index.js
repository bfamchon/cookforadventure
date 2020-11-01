import Link from 'next/link'
import Head from 'components/Head'
import Newsletter from 'components/Newsletter'
import Section from 'components/section'
import SectionParagraph from 'components/section/paragraph'
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  return (
    <>
      <Head background={'https://picsum.photos/id/786/1920/1080'} subtitle={'Une recette, une aventure'}></Head>
      <Section id="why" title="Bienvenue sur Cook For Adventure">
        <SectionParagraph>Le contenu que je vais te proposer arrive bientôt <FontAwesomeIcon icon={faTools} /> !</SectionParagraph>
        <SectionParagraph>Alors... Pour <Link href={'about'}><a>ne manquez aucune sortie</a></Link>, inscrit toi à la newsletter !</SectionParagraph>
        <Newsletter />
      </Section>
    </>
  )
}
