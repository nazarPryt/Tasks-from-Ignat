import React from 'react'
import s from './App.module.css'
import {Provider} from "react-redux";
import store from "../../../p2-homeworks/h10/bll/store";
import HW11 from "../../../p2-homeworks/h11/HW11";

function App() {
    return (
        <Provider store={store}>
            <div className={s.App}>
                {/*<HW5/>*/}
                <HW11/>
            </div>
        </Provider>


    )
}

export default App
