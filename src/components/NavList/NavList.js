import React from 'react';
import NavItem from '../NavItem/NavItem.js';
import './NavList.css';

const NavList = props => {
    return (
        <ul className="nav-list">
            {props.datos.map(d => (
                <NavItem datos={d} />
            ))}
        </ul>
    );
};

export default NavList;
