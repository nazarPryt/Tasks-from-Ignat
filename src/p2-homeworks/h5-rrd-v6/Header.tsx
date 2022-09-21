import React from 'react'
import {Link} from "react-router-dom";
import {PATH} from "./Pages";
import s from './HW5.module.css'
import Burger from "./Burger";


function Header() {
    return (
        <div>
            {/*<nav className={s.navWrap}>*/}
            {/*    <Link className={s.navLink} to={PATH.PRE_JUNIOR}>Pre-Junior</Link>*/}
            {/*    <Link className={s.navLink} to={PATH.JUNIOR}>Junior</Link>*/}
            {/*    <Link className={s.navLink} to={PATH.JUNIOR_PLUS}>Junior-PLUS</Link>*/}
            {/*</nav>*/}
            <Burger/>
        </div>
    )
}

export default Header
