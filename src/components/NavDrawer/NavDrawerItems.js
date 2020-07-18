import React from 'react';
import { Link } from 'react-router-dom';
import './NavDrawerItems.css';

const NavDrawerItems = (props) => {
    return (
        <li className="nav-drawer-item">
            <Link
                to={{
                    pathname: `${props.datos.href}`,
                }}
                className="nav-drawer-link"
            >
                <div className="nav-link-drawer-wrap">
                    {props.datos.svg()}
                    <span>{props.datos.span}</span>
                </div>
            </Link>
        </li>
    );
};

export default NavDrawerItems;
