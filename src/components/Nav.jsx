import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion';

const NavWrap = styled.div`
    ${tw('fixed')};
    bottom:1rem;
    right:1rem;
    z-index:5;
`
const NavList = styled.ul`
     ${tw('list-reset flex text-white m-0')};
     /* li{
         margin-left:1rem;
     } */
     a{
         padding:.5rem;
         ${tw('font-serif')};
     }
`
const Nav = () =>
    <NavWrap>
        <NavList>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
        </NavList>
    </NavWrap>
    ;



export default Nav;