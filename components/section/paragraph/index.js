import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Paragraph = styled.p`
    ${props => props.theme.p}
    text-align: ${props => props.center ? 'center' : 'justify'};

    & > a {
        ${props => props.theme.a}
    }
`;

const SectionParagraph = ({ children, center }) => {
    return (
        <Paragraph center={center}>{children}</Paragraph>);
};

SectionParagraph.propTypes = {
};

export default SectionParagraph;
