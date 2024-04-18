import axios from "axios"
import {
    loginStart,
    loginSuccess,
    loginFailed
} from './UserSlice.js'

export const login = async (dispatch, user) => {
    try {
        dispatch(loginStart())
        const res = await axios.post("http://localhost:8000/api/auth/login", user)
        // console.log(res.data);
        const userdata = res.data
        localStorage.setItem("user", JSON.stringify(userdata))
        const token = res.data.accessToken
        localStorage.setItem("accessToken", token)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailed(error))
        console.log(error);
    }
}