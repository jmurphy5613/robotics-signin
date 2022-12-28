import styles from './AdminButtons.module.css'
import { AiOutlineArrowRight } from 'react-icons/ai/index'
import { useRouter } from 'next/router'

const AdminButtons = () => {

    const router = useRouter()

    return (
        <div className={styles.container}>
            <button onClick={() => {
                router.push('/dashboard')
            }} className={styles.button}>Go to Dashboard <AiOutlineArrowRight className={styles.icon} /> </button>
        </div> 
    )
}

export default AdminButtons