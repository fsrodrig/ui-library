import React from 'react'
import styled from 'styled-components'
import { Image } from '../images/Image';
import PropTypes from "prop-types";

/**
 Headers with simple "auth" states and brand options.
 **/

const Nav = styled.div`
position: absolute;
width: 1296px;
height: 200px;
left: 0px;
top: 396px;

background: #F4F5F7;

-webkit-box-shadow: inset 0px -1px 0px #DFE1E6;
        box-shadow: inset 0px -1px 0px #DFE1E6;
left: 11.42%;
right: 11.42%;
top: 34%;
bottom: 34%;
`;

const HeaderContainer = styled.div`
position: absolute;
left: 11.42%;
right: 11.42%;
top: 34%;
bottom: 34%;
display: flex;
justify-content: space-between;
padding-left: 20px;
padding-right: 20px;

background: #FFFFFF;
box-shadow: inset 0px -1px 0px #DFE1E6;
`;

const ContainerSide = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const Header = ({ brand = 'legalshield', auth = false }) => {

    let brandName;
    switch (brand) {
        case 'legalshield':
            brandName = 'LegalShield';
            break;
        case 'commercial':
            brandName = 'CommercialShield';
            break;
        case 'idshield':
            brandName = 'IDShield';
            break;
        default:
            brandName = 'LegalShield';
    }

    return (
        <Nav>
            <HeaderContainer>
                <ContainerSide>
                    <Image img='menu.svg' />
                    <Image img={brand + '-logo.svg'} />
                    <span>{brandName}</span>
                </ContainerSide>
                {auth === 'true' && (
                    <ContainerSide>
                        <Image img="bell.svg" />
                        <Image img="help.svg" />
                        <Image img="avatar-placeholder.svg" />
                    </ContainerSide>
                )}
            </HeaderContainer>
        </Nav>
    )
}

Header.propTypes = {
    brand: PropTypes.string,
    auth: PropTypes.bool
}
