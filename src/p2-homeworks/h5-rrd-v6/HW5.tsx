import React from 'react'
import {HashRouter, Routes, Route} from "react-router-dom";
import Header from "./Header";
import Pages from "./Pages";

function HW5() {
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path={'/'} element={<Header/>}/>
                    <Route path={'Pages'} element={<Pages/>}/>
                </Routes>
            </HashRouter>
        </div>
    )
}

export default HW5
