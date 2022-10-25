import React from 'react';
import {Link} from "react-router-dom";
import s from "../HW5.module.css";
import HW13 from "../../h13/HW13";

const JuniorPlus = () => {
    return (
        <div>
            <Link className={s.navLink} to={'/'}>Turn Back</Link>
            JuniorPlus
            <HW13/>
        </div>
    );
};

export default JuniorPlus;