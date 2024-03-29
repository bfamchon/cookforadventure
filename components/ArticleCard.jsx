import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { faArrowRight, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const Spacer = styled.div`
    margin: 20px;

    & > a {
        text-decoration: none;

        :hover, :focus {
            text-decoration: underline;
            text-decoration-color: white;
        }
    }
`;
const Container = styled.article`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    height: 410px;
    box-shadow: 0px 0px 3px 0px white;
`;

const ImageContainer = styled.div`
    display: flex;
    object-fit: cover;
    width: 100%;    
    height: 100%;    
    max-height: 200px;
`;

const CardContent = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    color: ${props => props.theme.colors.BLACK};
    background-color: white;
`;

const Title = styled.h4`
    font-size: 16px;
    text-transform: uppercase;
    color: ${props => props.theme.colors.WHITE};
    background-color: ${props => props.theme.colors.BLACK};
    margin: 0;
    padding: 20px;
`;

const DescriptionContainer = styled.div`
    display: flex;
    flex: 1;
    margin: 10px;
`;

const Description = styled.p`
    ${props => props.theme.p}
    margin: 0;
    font-size: 15px;
    flex: 1;
`;

const Footer = styled.p`
    margin: 15px;
    display: flex;
    justify-content: flex-end;
    transition: all 0.2s ease-out;

    ${Spacer}:hover & {
        transform: translateX(5px);
    }
`;

const ArticleCard = ({ article : {link, slug, title, img, desc, draft}}) => {
    let responsiveIMG = img.split('.');
    responsiveIMG.splice(1, 0, '-tablet.');
    responsiveIMG = responsiveIMG.join('');
    return (
        <Spacer>
            {!draft && <Link href={link} >
                <a>
                    <Container>
                        <ImageContainer>
                            <Image width="320" height="200" src={responsiveIMG} id={slug} alt={`Image de l'article "${title}"`}/>
                        </ImageContainer>
                        <CardContent>
                            <Title>{title}</Title>
                            <DescriptionContainer>
                                <Description>{desc}</Description>
                            </DescriptionContainer>
                            <Footer><FontAwesomeIcon icon={faArrowRight} size="lg" /></Footer>
                        </CardContent>
                    </Container>
                </a>
            </Link>}
            {draft && <Container>
                        <Image layout='fill' src={img} id={slug} />
                        <CardContent>
                            <Title>{title}</Title>
                            <DescriptionContainer>
                                <Description>{desc} <FontAwesomeIcon icon={faTools} size="lg" /></Description>
                            </DescriptionContainer>
                        </CardContent>
                    </Container>}
        </Spacer>
    );
};

 ArticleCard.propTypes = {
    article: PropTypes.shape({
        link: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        desc: PropTypes.string,
        draft: PropTypes.bool,
    }).isRequired,
};

export default ArticleCard;
