import { User } from '../../../utils/types';
import styles from './AttendenceChart.module.css'

type AttendenceChartProps = {
    attended: Array<User>
};

const AttendenceChart:React.FC<AttendenceChartProps> = ({ attended }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Attended</h2>
            <input placeholder='Find people' className={styles.search} />
            <div className={styles.grid}>
                {attended.map((element, index) => {
                    return (
                        <div className={styles["grid-item"]}>
                            <h3 className={styles.name}>{element.firstName} {element.lastName}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AttendenceChart