import React from 'react';
import {Link} from "react-router-dom";
import s from "../HW5.module.css";
import HW7 from "../../h7/HW7";
import HW8 from "../../h8/HW8";
import HW9 from "../../h9/HW9";

const Junior = () => {
    return (
        <div>
            <Link className={s.navLink} to={'/'}>Turn Back</Link>

            junior
            <HW7/>
            <HW8/>
            <HW9/>
        </div>
    );
};

export default Junior;