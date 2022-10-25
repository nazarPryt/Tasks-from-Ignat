import React from 'react'
import s from './App.module.css'
import {Provider} from "react-redux";
import store from "../../../p2-homeworks/h10/bll/store";
import HW5 from "../../../p2-homeworks/h5-rrd-v6/HW5";
import HW13 from "../../../p2-homeworks/h13/HW13";

function App() {
    return (
        <Provider store={store}>
            <div className={s.App}>
                {/*<HW5/>*/}
                <HW13/>
            </div>
        </Provider>
    )
}

export default App
