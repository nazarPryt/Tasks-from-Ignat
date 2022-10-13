import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import loadingImg from './bll/Loading_2.gif'

function HW10() {

    const dispatch = useDispatch()
    const loading = useSelector((state: AppStoreType) => state.loading.isLoading)

    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(()=>{
            dispatch(loadingAC())
        }, 2000)
    };

    return (
        <div>
            <hr/>
            <h2>
                homeworks 10
            </h2>


            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img src={loadingImg} alt="loading"/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
