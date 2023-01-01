import axios from "axios"
import { NextRouter } from "next/router"
import { apiURL } from "./constants"


export const createEvent = async (
    name: string,
    description: string,
    startYear: number,
    startMonth: number,
    startDay: number,
    startHour: number,
    startMinute: number,
    endYear: number,
    endMonth: number,
    endDay: number,
    endHour: number,
    endMinute: number,
    router: NextRouter
) => {
    const startDate = new Date(startYear, startMonth-1, startDay, startHour, startMinute)
    const endDate = new Date(endYear, endMonth-1, endDay, endHour, endMinute)

    //create random 5 digit code
    const code = Math.floor(Math.random()*90000) + 10000

    axios.post(`${apiURL}/events/create`, {
        startDate: startDate,
        endDate: endDate,
        code: code,
        title: name,
        description: description
    }).then(res => {
        router.push('/dashboard')
    });
}

export const getAllEvents = async () => {
    const response = await axios.get(`${apiURL}/events/get-all`)
    return response.data
}

export const getEventById = async (id: number) => {
    const response = await axios.get(`${apiURL}/events/get-by-id/${id}`)
    return response.data
}