import styles from '../styles/Create.module.css'

const Create = () => {

    //year, month, day, hour, minute --> year, month, day, hour, minute

    return (
        <div className={styles.container}>
            <div className={styles["form-container"]}>
                <input
                    placeholder="Event name"
                    className={styles["string-input"]}
                />
                <textarea
                    placeholder="Event description"
                    className={styles.textarea}
                />
                <label>Start Date</label>
                <div className={styles.date}>
                    <input
                        placeholder="Year"
                        className={styles["date-input"]}
                    />
                    <input
                        placeholder="Month"
                        className={styles["date-input"]}
                    />
                    <input placeholder="Day" className={styles["date-input"]} />
                    <input
                        placeholder="Hour"
                        className={styles["date-input"]}
                    />
                    <input
                        placeholder="Minute"
                        className={styles["date-input"]}
                    />
                </div>
                <label>End Date</label>
                <div className={styles.date}>
                    <input
                        placeholder="Year"
                        className={styles["date-input"]}
                    />
                    <input
                        placeholder="Month"
                        className={styles["date-input"]}
                    />
                    <input placeholder="Day" className={styles["date-input"]} />
                    <input
                        placeholder="Hour"
                        className={styles["date-input"]}
                    />
                    <input
                        placeholder="Minute"
                        className={styles["date-input"]}
                    />
                </div>
                <button className={styles.button}>Create Event</button>
            </div>
        </div>
    );
}

export default Create