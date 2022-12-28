import styles from './LoginLogout.module.css'
import { useRouter } from 'next/router'

type LoginLogoutProps = {
    login: boolean
}

const LoginLogout:React.FC<LoginLogoutProps> = ({ login }) => {

    const router = useRouter()

    return (
        <div>
            {login ? <button onClick={() => {
                router.push('/api/auth/login')
            }} className={styles.login}>Login</button>
            :
            <button className={styles.logout} onClick={() => {
                router.push('/api/auth/logout')
            }}>Logout</button>
            }
        </div>
    )
}

export default LoginLogout