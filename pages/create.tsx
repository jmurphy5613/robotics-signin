import { useState } from 'react';
import styles from '../styles/Create.module.css'

const Create = () => {

    //year, month, day, hour, minute --> year, month, day, hour, minute

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const [startYear, setStartYear] = useState('')
    const [startMonth, setStartMonth] = useState('')
    const [startDay, setStartDay] = useState('')
    const [startHour, setStartHour] = useState('')
    const [startMinute, setStartMinute] = useState('')

    const [endYear, setEndYear] = useState('')
    const [endMonth, setEndMonth] = useState('')
    const [endDay, setEndDay] = useState('')
    const [endHour, setEndHour] = useState('')
    const [endMinute, setEndMinute] = useState('')

    return (
        <div className={styles.container}>
            <div className={styles["form-container"]}>
                <label>Event name</label>
                <input
                    placeholder="Some random meeting lol"
                    className={styles["string-input"]}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <label>Event description</label>
                <textarea
                    placeholder="We're going to do soooo much work..."
                    className={styles.textarea}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                />
                <label>Start Date</label>
                <div className={styles.date}>
                    <input
                        placeholder="Year"
                        className={styles["date-input"]}
                        onChange={(e) => {
                            setStartYear(e.target.value);
                        }}
                    />
                    <input
                        placeholder="Month"
                        className={styles["date-input"]}
                        onChange={(e) => {
                            setStartMonth(e.target.value);
                        }}
                    />
                    <input
                        placeholder="Day"
                        className={styles["date-input"]}
                        onChange={(e) => {
                            setStartDay(e.target.value);
                        }}
                    />
                    <input
                        placeholder="Hour"
                        className={styles["date-input"]}
                        onChange={(e) => {
                            setStartHour(e.target.value);
                        }}
                    />
                    <input
                        placeholder="Minute"
                        className={styles["date-input"]}
                        onChange={(e) => {
                            setStartMinute(e.target.value);
                        }}
                    />
                </div>
                <label>End Date</label>
                <div className={styles.date}>
                    <input
                        placeholder="Year"
                        className={styles["date-input"]}
                        onChange={(e) => {
                            setEndYear(e.target.value);
                        }}
                    />
                    <input
                        placeholder="Month"
                        className={styles["date-input"]}
                        onChange={(e) => {
                            setEndMonth(e.target.value);
                        }}
                    />
                    <input
                        placeholder="Day"
                        className={styles["date-input"]}
                        onChange={(e) => {
                            setEndDay(e.target.value);
                        }}
                    />
                    <input
                        placeholder="Hour"
                        className={styles["date-input"]}
                        onChange={(e) => {
                            setEndHour(e.target.value);
                        }}
                    />
                    <input
                        placeholder="Minute"
                        className={styles["date-input"]}
                        onChange={(e) => {
                            setEndMinute(e.target.value);
                        }}
                    />
                </div>
                <button className={styles.button}>Create Event</button>
            </div>
        </div>
    );
}

export default Create