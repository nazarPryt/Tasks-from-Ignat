import React from 'react';
import {Link} from "react-router-dom";
import s from "../HW5.module.css";
import HW7 from "../../h7/HW7";
import HW8 from "../../h8/HW8";
import HW9 from "../../h9/HW9";
import HW10 from "../../h10/HW10";
import HW11 from "../../h11/HW11";
import Hw12Wrapper from "../../h12/HW12Wrapper";

const Junior = () => {
    return (
        <div>
            <Link className={s.navLink} to={'/'}>Turn Back</Link>
            junior
            <HW7/>
            <HW8/>
            <HW9/>
            <HW10/>
            <HW11/>
            <Hw12Wrapper/>
        </div>
    );
};

export default Junior;