import EventCard from './event-card/EventCard'
import styles from './EventGrid.module.css'

type EventGridProps = {
    events: Array<Event>
}

const EventGrid:React.FC<EventGridProps> = ({ events }) => {
    return (
        <div className={styles.grid}>
            {events.map((element, index) => {
                return (
                    <EventCard />
                )
            })}
        </div>
    )
}

export default EventGrid