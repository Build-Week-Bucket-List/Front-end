import axios from "axios"

export const REGISTER_USER_START = "REGISTER_USER_START"
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS"
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL"
export const LOGIN_USER_START = "LOGIN_USER_START"
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS"
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL"
export const LOGOUT_USER = "LOGOUT_USER"

const endPoint = ""

export const registerUser = regInfo => dispatch =>
{
    dispatch({ type: REGISTER_USER_START })

    axios
        .post(`${endPoint}/register`, regInfo)
        .then(res =>
            {
                console.log("res from registerUser:", res)
                dispatch({ type: REGISTER_USER_SUCCESS, payload: res })
            })
        .catch(err =>
            {
                console.log("err from registerUser", err)
                dispatch({ type: REGISTER_USER_FAIL, payload: err })
            })
}

export const loginUser = creds => dispatch =>
{
    dispatch({ type: LOGIN_USER_START })

    axios
        .post(`${endPoint}/login`, creds)
        .then(res =>
            {
                console.log("res from loginUser:", res)
                dispatch({ type: LOGIN_USER_SUCCESS, payload: res })
            })
        .catch(err =>
            {
                console.log("err from loginUser", err)
                dispatch({ type: LOGIN_USER_FAIL, payload: err })
            })
}

export const logoutUser = history => dispatch =>
{
    localStorage.removeItem('token')
    dispatch({ type: LOGOUT_USER })
    history.push('/')

}