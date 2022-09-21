import React, {useState} from 'react';
import s from'./Burger.module.css'
import {Link} from "react-router-dom";
import {PATH} from "./Pages";
const Burger = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burgerBar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burgerBar clicked")
            setMenuClass("menu visible")
        } else {
            setBurgerClass("burgerBar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div>
            <nav className={s.nav}>
                <div className={s.burgerMenu} onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>

            </nav>

            <div className={`${menu_class}`}>
                <div className={s.navLink_Wrap}>
                <Link className={s.navLink} to={PATH.PRE_JUNIOR}>Pre-Junior</Link>
                <Link className={s.navLink} to={PATH.JUNIOR}>Junior</Link>
                <Link className={s.navLink} to={PATH.JUNIOR_PLUS}>Junior-PLUS</Link>
                </div>
            </div>
        </div>
    )
}


export default Burger;