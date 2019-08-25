import axios from 'axios'

export const axiosWithauth = () =>
{
    const token = localStorage.getItem('token')

    return axios.create({
        headers:
        {
            //'Content-Type': 'application/json',
            'Authorization': token
        }
    })
}