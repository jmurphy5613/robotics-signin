import styles from './Navbar.module.css'
import LoginLogout from './loginlogout/LoginLogout'
import UserIcon from './user-icon/UserIcon';
import { useUser } from '@auth0/nextjs-auth0/client';

const Navbar = () => {

    const { user, isLoading } = useUser()

    if(isLoading) return <div></div>

    return (
        <div className={styles.container}>
            <h1 className={styles.name}>Jordan: Sign in and Out</h1>
            <div className={styles["align-right"]}>
                { user?.picture ? <UserIcon image={user.picture} /> : <LoginLogout login={true} />}
            </div>
        </div>
    );
}

export default Navbar