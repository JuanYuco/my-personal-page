import React from 'react';
import photo from '../../../../img/link.jpg';
import './BioDescription.css';

export const BioDescription = () => {
    return (
        <div className="bio-spacing">
            <img src={ photo } alt="Mi foto" />
            <div className="bio-text">
                <h3>Hola y bienvenido</h3>
                <hr />
                <p>
                    Soy Juan Fernando Yuco Jimenez desarrollador FullStack y vivo en la ciudad 
                    de <strong>Santiago de Cali</strong> en <strong>Colombia</strong>. 
                    Me gradué de tecnología de Sistemas y también de Ingeniería de Sistemas.
                    En esta página encontraras a detalle información de mis <strong>habilidades</strong> y <strong>motivaciones</strong>.
                </p>
            </div>
        </div>
    )
}
