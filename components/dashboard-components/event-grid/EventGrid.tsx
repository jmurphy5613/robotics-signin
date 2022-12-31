import styles from './EventGrid.module.css'
import { Event } from '../../../utils/types'

type EventGridProps = {
    events: Array<Event>
}

const EventGrid:React.FC<EventGridProps> = ({ events }) => {
    return (
        <div className={styles.grid}>

        </div>
    )
}

export default EventGrid