import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/navbar/navbar-parent/Navbar';
import { Home } from '../components/principal-pages/home/Home';
import { Hobbies } from '../components/principal-pages/hobbies/Hobbies';
import { Projects } from '../components/principal-pages/projects/Projects';

export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/projects" element={ <Projects /> } />
                    <Route path="/hobbies" element={ <Hobbies /> } />
                    <Route path='*' element={ <Home /> } />
                </Routes>
            </BrowserRouter>
        </>
    )
}
