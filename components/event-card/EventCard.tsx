import styles from './EventCard.module.css'

const EventCard = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Robotics Meeting 12/25</h1>
            <h3 className={styles.description}>
                1) Presenting designs from Thursday. Make sure you have
                something to present. If you or your group can’t make it, we
                will try and do a video call on discord so you can see the other
                designs.{" "}
            </h3>
            <h3 className={styles.description}>
                2) Won't be one continuous session from 10AM-2PM and we won’t
                have a meeting Monday.
            </h3>
            <div className={styles["button-group"]}>
                <button className={styles.going}>I'll be there</button>
                <button className={styles["not-going"]}>Taking a rain check</button>
            </div>
        </div>
    );
}

export default EventCard