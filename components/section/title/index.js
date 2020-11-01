import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const H3 = styled.h3`
    ${props => props.theme.h3}
`;

const SectionTitle = ({ text }) => {
    return (
        <H3>{text}</H3>);
};

SectionTitle.propTypes = {
    text: PropTypes.string.isRequired
};

export default SectionTitle;
