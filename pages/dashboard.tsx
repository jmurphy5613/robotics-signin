import styles from '../styles/Dashboard.module.css'
import IntroTitle from '../components/dashboard-components/intro-title/IntroTitle'

const Dashboard = () => {
    return (
        <div className={styles.container}>
            <IntroTitle />
        </div>
    )
}

export default Dashboard