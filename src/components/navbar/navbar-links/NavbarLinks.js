import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarLinks.css';

export const NavbarLinks = ({ url, title }) => {
    return (
        <li>
            <Link to={ url } className="nav-item">{ title }</Link>
        </li>
    )
}
