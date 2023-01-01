import { useEffect, useState } from 'react'
import styles from '../../styles/EventProfile.module.css'
import { getEventById } from '../../utils/requests/events'
import { useRouter } from 'next/router'

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

    return (
        <div className={styles.container}>
            
        </div>
    )
}

export default EventPage