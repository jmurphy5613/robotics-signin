import styles from './EventGrid.module.css'
import { Event } from '../../../utils/types'
import { IoIosAdd } from "react-icons/io/index";
import { IconContext } from 'react-icons';

type EventGridProps = {
    events: Array<Event>
}

const EventGrid:React.FC<EventGridProps> = ({ events }) => {
    return (
        <div className={styles.grid}>
            <div className={styles.create}>
                <IconContext.Provider value={{ color: "#555", size: "30px" }}>
                    <IoIosAdd />
                </IconContext.Provider>
            </div>
            {events.map((element, index) => {
                return (
                    <div className={styles["grid-item"]}>
                        <h1 className={styles.title}>{element.title}</h1>
                    </div>
                );
            })}
        </div>
    );
}

export default EventGrid