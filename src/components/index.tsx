import { useState } from 'react'
import Header from './header'
import { Route, Link, Routes, useSearchParams } from "react-router-dom";
import PageHello from './pageHello';

export default function Index() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="*" element={<h1>404</h1>} />
                <Route path="/" element={<PageHello />} />
            </Routes>
        </>
    )
}

