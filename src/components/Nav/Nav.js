import React from 'react';
import './Nav.css';
import NavList from '../NavList/NavList.js';

const Nav = (props) => {
    return (
        <nav className="nav">
            <NavList datos={props.datos} />
        </nav>
    );
};

export default Nav;
