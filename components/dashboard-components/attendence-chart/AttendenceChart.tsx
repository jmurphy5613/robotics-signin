import { useState } from 'react';
import { User } from '../../../utils/types';
import styles from './AttendenceChart.module.css'
import { unregisterUserForEventByIds } from "../../../utils/requests/users";

type AttendenceChartProps = {
    attended: Array<User>,
    eventId: number
};

const AttendenceChart:React.FC<AttendenceChartProps> = ({ attended, eventId }) => {

    const [serachParam, setSearchParam] = useState<string>('')

    const shownAttendees = attended.filter(element => {
        const fullName = `${element.firstName} ${element.lastName}`
        return fullName.toLowerCase().includes(serachParam)
    })

    const remove = async (element: User) => {
        await unregisterUserForEventByIds(element.id, eventId)
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Attended</h2>
            <input placeholder='Find people' className={styles.search} onChange={(e) => {
                setSearchParam(e.target.value)
            }} />
            <div className={styles.grid}>
                {shownAttendees.map((element, index) => {
                    return (
                        <div key={index} className={styles["grid-item"]}>
                            <h3 className={styles.name}>{element.firstName} {element.lastName}</h3>
                            <button className={styles.remove} onClick={() => remove(element)}>remove</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AttendenceChart