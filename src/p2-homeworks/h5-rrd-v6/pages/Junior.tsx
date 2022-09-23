import React from 'react';
import {Link} from "react-router-dom";
import s from "../HW5.module.css";
import HW7 from "../../h7/HW7";

const Junior = () => {
    return (
        <div>
            <Link className={s.navLink} to={'/'}>Turn Back</Link>

            junior
            <HW7/>
        </div>
    );
};

export default Junior;