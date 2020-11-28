import styled from "styled-components";
import ArticleCard from 'components/ArticleCard';

const Container = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: center;
`;

const Articles = ({articles}) => {
    return (
        <Container>
            {articles.map(a => <ArticleCard key={a.slug} article={a} />)}
        </Container>
    );
};

export default Articles;
