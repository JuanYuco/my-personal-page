import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../components/home/Home';
import { Navbar } from '../components/navbar/navbar-parent/Navbar';

export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path='*' element={ <Home /> } />
                </Routes>
            </BrowserRouter>
        </>
    )
}
