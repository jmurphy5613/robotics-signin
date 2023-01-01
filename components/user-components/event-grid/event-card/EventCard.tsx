import styles from './EventCard.module.css'
import CodeModal from '../code-modal/CodeModal';
import { useState } from 'react';
import { Event } from '../../../../utils/types';

type EventCardProps = {
    event: Event
}

const EventCard:React.FC<EventCardProps> = ({ event }) => {

    const [showCodeModal, setShowCodeModal] = useState(false)

    return (
        <>
            {showCodeModal && <CodeModal setShowModal={setShowCodeModal} />}
            <div className={styles.container}>
                <h1 className={styles.title}>{event.title}</h1>
                <h3 className={styles.description}>{event.description}</h3>
                <div className={styles["button-group"]}>
                    <button
                        className={styles.going}
                        onClick={() => {
                            setShowCodeModal(true);
                        }}
                    >
                        I'm here!
                    </button>
                    <button className={styles["not-going"]}>
                        Taking a rain check
                    </button>
                </div>
            </div>
        </>
    );
}

export default EventCard