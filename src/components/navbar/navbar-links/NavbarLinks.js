import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarLinks.css';

export const NavbarLinks = React.memo(({ url, title, clickFuntion = function(){} }) => {
    return (
        <li>
            <Link 
                to={ url } 
                className="nav-item"
                onClick={ () => clickFuntion( false ) }>
                    { title }
                </Link>
        </li>
    )
});
