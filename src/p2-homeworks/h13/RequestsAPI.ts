import axios from "axios";


export const RequestsAPI = {
    makeRequest(value: boolean){
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test',{success: value})
    }
}
