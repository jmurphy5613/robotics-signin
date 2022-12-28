import styles from './IntroTitle.module.css'

const IntroTitle = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Events</h1>
            <h3 className={styles.description}>Here you can add/inspect events</h3>
        </div>
    )
}

export default IntroTitle