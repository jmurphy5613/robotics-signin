import axios from 'axios';
import { useState } from 'react';
import styles from '../styles/Create.module.css'
import { createEvent } from '../utils/events';
import { useRouter } from 'next/router';

const Create = () => {

    const router = useRouter()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const [startYear, setStartYear] = useState<number>(0)
    const [startMonth, setStartMonth] = useState<number>(0)
    const [startDay, setStartDay] = useState<number>(0)
    const [startHour, setStartHour] = useState<number>(0)
    const [startMinute, setStartMinute] = useState<number>(0)

    const [endYear, setEndYear] = useState<number>(0)
    const [endMonth, setEndMonth] = useState<number>(0)
    const [endDay, setEndDay] = useState<number>(0)
    const [endHour, setEndHour] = useState<number>(0)
    const [endMinute, setEndMinute] = useState<number>(0)

    const onSubmit = async () => {
        await createEvent(
            name,
            description,
            startYear,
            startMonth,
            startDay,
            startHour,
            startMinute,
            endYear,
            endMonth,
            endDay,
            endHour,
            endMinute
        )
        router.push('/dashboard')
    }

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
                        type="number"
                        placeholder="Year"
                        className={styles["date-input"]}
                        onChange={(e) => {
                            setStartYear(e.target.valueAsNumber);
                        }}
                    />
                    <input
                        type="number"
                        placeholder="Month"
                        className={styles["date-input"]}
                        onChange={(e) => {
                            setStartMonth(e.target.valueAsNumber);
                        }}
                    />
                    <input
                        type="number"
                        placeholder="Day"
                        className={styles["date-input"]}
                        onChange={(e) => {
                            setStartDay(e.target.valueAsNumber);
                        }}
                    />
                    <input
                        type="number"
                        placeholder="Hour"
                        className={styles["date-input"]}
                        onChange={(e) => {
                            setStartHour(e.target.valueAsNumber);
                        }}
                    />
                    <input
                        type="number"
                        placeholder="Minute"
                        className={styles["date-input"]}
                        onChange={(e) => {
                            setStartMinute(e.target.valueAsNumber);
                        }}
                    />
                </div>
                <label>End Date</label>
                <div className={styles.date}>
                    <input
                        type="number"
                        placeholder="Year"
                        className={styles["date-input"]}
                        onChange={(e) => {
                            setEndYear(e.target.valueAsNumber);
                        }}
                    />
                    <input
                        type="number"
                        placeholder="Month"
                        className={styles["date-input"]}
                        onChange={(e) => {
                            setEndMonth(e.target.valueAsNumber);
                        }}
                    />
                    <input
                        type="number"
                        placeholder="Day"
                        className={styles["date-input"]}
                        onChange={(e) => {
                            setEndDay(e.target.valueAsNumber);
                        }}
                    />
                    <input
                        type="number"
                        placeholder="Hour"
                        className={styles["date-input"]}
                        onChange={(e) => {
                            setEndHour(e.target.valueAsNumber);
                        }}
                    />
                    <input
                        type="number"
                        placeholder="Minute"
                        className={styles["date-input"]}
                        onChange={(e) => {
                            setEndMinute(e.target.valueAsNumber);
                        }}
                    />
                </div>
                <button className={styles.button} onClick={onSubmit}>
                    Create Event
                </button>
            </div>
        </div>
    );
}

export default Create