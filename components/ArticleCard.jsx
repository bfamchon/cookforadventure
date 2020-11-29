import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    flex-direction: column;
    max-width: 100%;
    width: 320px;
    height: 400px;
    box-shadow: 0px 0px 3px 0px white;
`;

const Image = styled.img`
    object-fit: cover;
    width: 100%;    
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

const ArticleCard = ({ article : {link, slug, title, img, desc}}) => {
    return (
        <Spacer>
            <Link href={link} >
                <a>
                    <Container>
                        <Image src={img} id={slug} />
                        <CardContent>
                            <Title>{title}</Title>
                            <DescriptionContainer>
                                <Description>{desc}</Description>
                            </DescriptionContainer>
                            <Footer><FontAwesomeIcon icon={faArrowRight} size="lg" /></Footer>
                        </CardContent>
                    </Container>
                </a>
            </Link>
        </Spacer>
    );
};

 ArticleCard.propTypes = {
    article: PropTypes.objectOf({
        link: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        lang: PropTypes.string,
        desc: PropTypes.string,
    }).isRequired,
};

export default ArticleCard;
