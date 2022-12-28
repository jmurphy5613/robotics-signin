import styles from './LoginLogout.module.css'
import { useRouter } from 'next/router'

type LoginLogoutProps = {
    login: boolean
}

const LoginLogout:React.FC<LoginLogoutProps> = () => {

    const router = useRouter()

    return (
        <div>
            <button onClick={() => {
                router.push('/api/auth/login')
            }} className={styles.login}>Login</button>
        </div>
    )
}

export default LoginLogout