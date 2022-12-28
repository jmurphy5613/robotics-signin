import axios from "axios"
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
    endMinute: number
) => {
    const startDate = new Date(startYear, startMonth, startDay, startHour, startMinute)
    const endDate = new Date(endYear, endMonth, endDay, endHour, endMinute)

    //create random 5 digit code
    const code = Math.floor(Math.random()*90000) + 10000

    fetch(apiURL, {
        method: 'POST',
        headers: {

        }
    }).then(res => {
        console.log(res)
    })
}