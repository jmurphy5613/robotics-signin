import styles from './EventGrid.module.css'
import { Event } from '../../../utils/types'
import { IoIosAdd } from "react-icons/io/index";
import { IconContext } from 'react-icons';
import { useRouter } from 'next/router'

type EventGridProps = {
    events: Array<Event>
}

const EventGrid:React.FC<EventGridProps> = ({ events }) => {

    const router = useRouter()

    return (
        <div className={styles.grid}>
            <div className={styles.create} onClick={() => {
                router.push('/create')
            }}>
                <IconContext.Provider value={{ color: "#555", size: "30px" }}>
                    <IoIosAdd />
                </IconContext.Provider>
            </div>
            {events.map((element, index) => {
                return (
                    <div key={index} className={styles["grid-item"]} onClick={() => {
                        router.push(`/dashboard/${element.id}`)
                    }}>
                        <h1 className={styles.title}>{element.title}</h1>
                    </div>
                );
            })}
        </div>
    );
}

export default EventGrid