import axios from "axios";


export const RequestsAPI = {
    makeRequest(value: boolean){
        return axios.post<responseType<{success: boolean}>>('https://neko-cafe-back.herokuapp.com/auth/test',{success: value})
    }
}
type responseType<D = {}>= {
    errorText: string
    info: string
    yourBody: D
    yourQuery: any
}