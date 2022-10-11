import React from 'react'
import s from './App.module.css'
import HW10 from "../../../p2-homeworks/h10/HW10";
import {Provider} from "react-redux";
import store from "../../../p2-homeworks/h10/bll/store";

function App() {
    return (
        <Provider store={store}>
            <div className={s.App}>
                {/*<HW5/>*/}
                <HW10/>
            </div>
        </Provider>


    )
}

export default App
