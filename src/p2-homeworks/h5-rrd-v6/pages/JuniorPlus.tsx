import React from 'react';
import {Link} from "react-router-dom";
import s from "../HW5.module.css";

const JuniorPlus = () => {
    return (
        <div>
            <Link className={s.navLink} to={'/'}>Turn Back</Link>
            JuniorPlus
        </div>
    );
};

export default JuniorPlus;