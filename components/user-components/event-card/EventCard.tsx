import styles from './EventCard.module.css'
import CodeModal from '../code-modal/CodeModal';
import { useState } from 'react';

const EventCard = () => {

    const [showCodeModal, setShowCodeModal] = useState(false)

    return (
        <>
            {showCodeModal && <CodeModal setShowModal={setShowCodeModal} />}
            <div className={styles.container}>
                <h1 className={styles.title}>Robotics Meeting 12/25</h1>
                <h3 className={styles.description}>
                    1) Presenting designs from Thursday. Make sure you have
                    something to present. If you or your group can’t make it, we
                    will try and do a video call on discord so you can see the
                    other designs.
                </h3>
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