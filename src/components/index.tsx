import { useState } from 'react'
import { Route, Link, Routes, useSearchParams } from "react-router-dom";
import Header from './header'
import PageHello from './pageHello';
import Footer from './footer';
import About from './about';



export default function Index() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="*" element={<h1>404</h1>} />
                <Route path="/" element={<PageHello />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer/>
        </>
    )
}

