import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTag = styled.span`
    ${props => props.theme.p}
    width: fit-content;
    text-transform: uppercase;
    padding: 2px 10px;
    text-align: center;
    border-radius: 5px;
    letter-spacing: 3px;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    margin: 10px;
`;

const Tag = ({ color, backgroundColor, children }) => <StyledTag color={color} backgroundColor={backgroundColor
}>{children}</StyledTag>;

Tag.propTypes = {
};

export default Tag;
