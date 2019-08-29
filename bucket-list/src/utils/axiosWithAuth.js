import axios from 'axios'

export const axiosWithAuth = () =>
{
    const token = `Bearer ${localStorage.getItem('token')}`

    return axios.create({
        headers:
        {
            // 'Content-Type': 'application/json',
            'Authorization': token
        }
    })
}

export const axiosWithAuthFriend = () =>
{
    const token = `Bearer ${localStorage.getItem('token')}`

    return axios.create({
        headers:
        {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
}