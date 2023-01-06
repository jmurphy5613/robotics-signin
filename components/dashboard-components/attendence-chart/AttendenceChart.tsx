import { User } from '../../../utils/types';
import styles from './AttendenceChart.module.css'

type AttendenceChartProps = {
    attended: Array<User>
};

const AttendenceChart:React.FC<AttendenceChartProps> = ({ attended }) => {
    return (
        <div>

        </div>
    )
}

export default AttendenceChart