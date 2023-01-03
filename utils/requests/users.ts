import axios from "axios"
import { apiURL } from "../constants"

export const createUser = async (
    firstName: string,
    lastName: string,
    email: string
) => {
    await axios.post(`${apiURL}/users/create`, {
        firstName: firstName,
        lastName: lastName,
        email: email
    })
}

export const getUserByEmail = async (email: string) => {
    const res = await axios.get(`${apiURL}/users/get-by-email/${email}`)
    return res.data
}

export const registerUserForEventByIds = async (userId: number, eventId: number) => {
    await axios.post(`${apiURL}/users/register-by-ids/${userId}/${eventId}`)
}