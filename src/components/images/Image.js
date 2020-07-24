import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Img = styled.img`
margin: 0 10px;
height: 30px;
width: auto;
`;


const assets = '../../assets/img/';

export const Image = ({ img = 'legalshield-logo.svg' }) => {

    return (
        <Img src={assets + img} alt={img} />
    );
}

Image.propTypes = {
    img: PropTypes.string.isRequired
}
