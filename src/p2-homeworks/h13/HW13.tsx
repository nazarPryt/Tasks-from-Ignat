import React from 'react';
import RequestComponent from "./RequestComponent";
import {Provider, useDispatch} from "react-redux";
import {storeHW13} from "./storHM13";


const HW13 = () => {

    const dispatch = useDispatch()


    return (
        <div>
            <Provider store={storeHW13}>
                <RequestComponent/>
            </Provider>
        </div>
    );
};

export default HW13;