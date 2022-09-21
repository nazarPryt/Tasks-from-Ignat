import React from 'react'
import {BrowserRouter} from "react-router-dom";
import Pages from "./Pages";


function HW5() {
    return (
        <div>
            <BrowserRouter>
               <Pages/>
            </BrowserRouter>
        </div>
    )
}

export default HW5
