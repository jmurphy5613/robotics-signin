export type User = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    eventsAttended: Array<Event>
}

export type Event = {
    id: number,
    startDate: Date,
    endDate: Date,
    title: string,
    code: number,
    description: string,
    attendees: Array<User>
}