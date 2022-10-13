import React from 'react';
import HW12 from "./HW12";
import {Provider} from "react-redux";
import {store} from "./bll/store";


const Hw12Wrapper = () => {
    return (
        <div>
            <Provider store={store}>
                <HW12/>
            </Provider>

        </div>
    );
};

export default Hw12Wrapper;