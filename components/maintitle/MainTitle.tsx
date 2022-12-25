import styles from './MainTitle.module.css'

const MainTitle = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Robotics Events Schedule</h1>
            <h3 className={styles.description}>Click on different events scheduled by 484 Roboforce and RSVP to contribute to your personal attendence quotas to attend compeitions and more</h3>
        </div>
    )
}

export default MainTitle