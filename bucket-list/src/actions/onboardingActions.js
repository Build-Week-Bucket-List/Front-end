import axios from "axios"

export const REGISTER_USER_START = "REGISTER_USER_START"
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS"
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL"
export const LOGIN_USER_START = "LOGIN_USER_START"
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS"
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL"
export const LOGOUT_USER = "LOGOUT_USER"


export const registerUser = (regInfo, history) => dispatch =>
{
    dispatch({ type: REGISTER_USER_START })

    axios
        .post(`https://hypedupharris-bucketlist.herokuapp.com/signup`, regInfo)
        .then(res =>
            {
                console.log("res from registerUser:", res)
                dispatch({ type: REGISTER_USER_SUCCESS, payload: res })
                history.push("/")
            })
        // .then(dispatch(loginUser(regInfo, history)))

        .catch(err =>
            {
                console.log("err from registerUser", err)
                dispatch({ type: REGISTER_USER_FAIL, payload: err.response })
            })
}

export function loginUser(creds, history) {

    return dispatch =>
    {
        dispatch({ type: LOGIN_USER_START })

        axios
            .post(`https://hypedupharris-bucketlist.herokuapp.com/login`, `grant_type=password&username=${creds.username}&password=${creds.password}`, {
                headers: {
                    Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                    }
            })
            .then(res =>
                {
                    console.log("res from loginUser:", res)
                    localStorage.setItem('token', JSON.stringify(res.data.access_token))
                    dispatch({ type: LOGIN_USER_SUCCESS, payload: res })
                    history.push('/home')
                })
            .catch(err =>
                {
                    console.log("err from loginUser", err)
                    dispatch({ type: LOGIN_USER_FAIL, payload: err })
                })
    }
}

export const logoutUser = history => dispatch =>
{
    localStorage.removeItem('token')
    dispatch({ type: LOGOUT_USER })
    history.push('/')

}
