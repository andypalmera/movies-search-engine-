import React from 'react';
import './NavDrawer.css';
import NavDrawerItems from './NavDrawerItems';

const NavDrawer = (props) => {
    return (
        <section className="nav-drawer-container ">
            <ul className="nav-drawer-list">
                {props.datos.map((d) => (
                    <NavDrawerItems datos={d} />
                ))}
            </ul>
        </section>
    );
};

export default NavDrawer;
