import React from 'react';
import './NavItem.css';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
    return (
        <li className="nav-item">
            <Link
                to={{
                    pathname: `${props.datos.href}`,
                }}
                className="nav-link"
            >
                <div className="nav-link-wrap">
                    {props.datos.svg()}
                    <span>{props.datos.span}</span>
                </div>
            </Link>
        </li>
    );
};

export default NavItem;
