import React from 'react'
import s from './App.module.css'
import {Provider} from "react-redux";
import store from "../../../p2-homeworks/h10/bll/store";
import Hw12Wrapper from "../../../p2-homeworks/h12/HW12Wrapper";

function App() {
    return (
        <Provider store={store}>
            <div className={s.App}>
                {/*<HW5/>*/}
                <Hw12Wrapper/>
            </div>
        </Provider>
    )
}

export default App
