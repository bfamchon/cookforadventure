import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Separator from 'components/section/separator';

const H3 = styled.h3`
    ${props => props.theme.h3}
`;

const BlogSectionTitle = ({text}) => {
    return (<>
        <H3>{text}</H3>
        <Separator />
    </>);
};

BlogSectionTitle.propTypes = {
    text: PropTypes.string.isRequired
};

export default BlogSectionTitle;
