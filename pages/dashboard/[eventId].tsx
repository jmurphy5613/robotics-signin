import { useEffect, useState } from 'react'
import styles from '../../styles/EventProfile.module.css'
import { getEventById } from '../../utils/requests/events'
import { useRouter } from 'next/router'
import { Event } from '../../utils/types'
import AttendenceChart from '../../components/dashboard-components/attendence-chart/AttendenceChart'

const EventPage = () => {

    const router = useRouter()

    const [event, setEvent] = useState<Event>()

    const setEventData = async (id: number) => {
        const eventData = await getEventById(id)
        setEvent(eventData)
        console.log(eventData)
    }

    useEffect(() => {
        const { eventId } = router.query
        if(eventId && !Array.isArray(eventId)) setEventData(parseInt(eventId))
    }, [router.isReady])

    if(!event) return <div></div>


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{event.title} (Code: {event.code})</h1>
            <h2 className={styles.time}>{event.startDate.toDateString()}, {event.startDate.toLocaleTimeString()} - {event.endDate.toLocaleTimeString()}</h2>
            <AttendenceChart attended={event.attendees} />
        </div>
    )
}

export default EventPage