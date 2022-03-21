import React from 'react';
import { DefaultSection } from '../../default-section/DefaultSection';
import { BioDescription } from './bio-description/BioDescription';
import './Home.css';

export const Home = () => {
    return (
        <>
            <div className="home">
                <DefaultSection ChildComponent={ BioDescription } cssClass="background-purple" />
            </div>
        </>
    )
}
