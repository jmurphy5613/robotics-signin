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

export const doesUserExist = async (email: string) => {
    const res = await axios.get(`${apiURL}/users/get-by-email/${email}`)
    if(res.data.message) return false
    return true
}