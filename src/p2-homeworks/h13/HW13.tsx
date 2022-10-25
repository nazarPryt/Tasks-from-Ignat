import React from 'react';
import RequestComponent from "./RequestComponent";
import {Provider, useDispatch} from "react-redux";
import {storeHW13} from "./storHM13";


const HW13 = () => {


    return (
        <div>
            <Provider store={storeHW13}>
                <hr/>
                <hr/>
                <h2>Home Work 13</h2>
                <RequestComponent/>
                <hr/>
                <hr/>
            </Provider>
        </div>
    );
};

export default HW13;