import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SectionParagraph = styled.p`
    ${props => props.theme.p}

    & > a {
        ${props => props.theme.a}
    }
`;

const SectionTitle = ({ children }) => {
    return (
        <SectionParagraph>{children}</SectionParagraph>);
};

SectionTitle.propTypes = {
};

export default SectionTitle;
