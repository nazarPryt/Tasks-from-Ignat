import React from 'react'
import {NavLink } from "react-router-dom";
import {PATH} from "./Pages";


function Header() {
    return (
        <div>
            // add NavLinks(HEADER|)
            <NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
            <NavLink to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}>Junior-Plus</NavLink>
        </div>
    )
}

export default Header
