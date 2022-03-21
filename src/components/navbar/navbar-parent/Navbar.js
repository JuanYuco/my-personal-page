import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { NavbarLinks } from '../navbar-links/NavbarLinks';
import './Navbar.css';

export const Navbar = () => {
    const [ showMenu, setShowMenu ] = useState( false );

    const handleBuMenuButoon = useCallback( ( state ) => {
        setShowMenu( ( value ) => {
            if ( state === undefined || state === null ) {
                return !value;
            }

            return state;
        });
    }, [ setShowMenu ] );

    let buttonMenuClass = "fas fa-bars";
    let ulClass = "nav-options-hidde";
    if ( showMenu ) {
        buttonMenuClass = "fas fa-times";
        ulClass = "nav-options-show";
    }

    return (
        <>
            <nav className="nav">
                <Link to="/" className="namePage">Juan Fernando Yuco Jimenez</Link>
                <div className="nav-options">
                    <button
                        className="menu-button"
                        onClick={ () => handleBuMenuButoon() }
                    >
                        <i className={ buttonMenuClass }></i>
                    </button>
                    <ul
                        className={ ulClass } 
                    >
                        <NavbarLinks 
                            url="/"
                            title="Conocimientos"
                            clickFuntion={ handleBuMenuButoon }
                        />
                        <NavbarLinks
                            url="/projects"
                            title="Experiencia"
                            clickFuntion={ handleBuMenuButoon }
                        />
                        <NavbarLinks
                            url="/hobbies"
                            title="Hobbies"
                            clickFuntion={ handleBuMenuButoon }
                        />
                    </ul>
                </div>
            </nav>
        </>
    )
}
