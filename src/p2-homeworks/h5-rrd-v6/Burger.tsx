import React, {useState} from 'react';
import s from './Burger.module.css'
import {Link} from "react-router-dom";
import {PATH} from "./Pages";
import logo from './cheeseburger.png'

const Burger = () => {

const [click , setClick] = useState<boolean>(true)
    console.log(click)



    const onClickHandler = () => {
        setClick(!click)
    }
    return (
        <div className={click ? `${s.burgerWrap_open}` : `${s.burgerWrap_close}`}>
            <nav className={s.navLink_Wrap}>
                <Link className={s.navLink} to={PATH.PRE_JUNIOR}>Pre-Junior</Link>
                <Link className={s.navLink} to={PATH.JUNIOR}>Junior</Link>
                <Link className={s.navLink} to={PATH.JUNIOR_PLUS}>Junior-PLUS</Link>
            </nav>
            <div className={s.burgerIcon} onClick={onClickHandler}>
                <img src={logo} alt=""/>
            </div>
        </div>
    )
}


export default Burger;