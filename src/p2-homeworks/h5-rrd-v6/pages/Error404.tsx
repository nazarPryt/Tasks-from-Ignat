import React from 'react'
import s from './Error404.module.css'
import {Link} from "react-router-dom";

function Error404() {
    return (
        <div className={s.Body}>
            <Link to={'/'}>Turn Back</Link>
                <header className={s.toPheader}>
                </header>


                <div>
                    <div className={s.starsec}></div>
                    <div className={s.starthird}></div>
                    <div className={s.starfourth}></div>
                    <div className={s.starfifth}></div>
                </div>




                <div className={s.lamp__wrap}>
                    <div className={s.lamp}>
                        <div className={s.cable}></div>
                        <div className={s.cover}></div>
                        <div className={s.inCover}>
                            <div className={s.bulb}></div>
                        </div>
                        <div className={s.light}></div>
                    </div>
                </div>

                <section className={s.error}>

                    <div className={s.error__content}>
                        <div className={`${s.error__message} ${s.message}`}>
                            <h1 className={s.message__title}>Page Not Found</h1>
                            <p className={s.message__text}>We're sorry, the page you were looking for isn't found here.
                                The link you followed may either be broken or no longer exists. Please try again, or
                                take a look at our.</p>
                        </div>
                        <div className={`${s.error__nav} ${s.eNav}`}>

                            <Link to={'/'} className={s.eNav__link}>HOME</Link>
                        </div>
                    </div>


                </section>


        </div>
    )
}

export default Error404
