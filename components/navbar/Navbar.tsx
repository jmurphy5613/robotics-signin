import styles from './Navbar.module.css'
import LoginLogout from './loginlogout/LoginLogout';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.name}>Jordan: Sign in and Out</h1>
            <div className={styles["align-right"]}>
                <LoginLogout />
            </div>
        </div>
    );
}

export default Navbar