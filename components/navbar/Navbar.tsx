import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.name}>Jordan: Sign in and Out</h1>
            <div className={styles["align-right"]}>
                <button>hey</button>
            </div>
        </div>
    );
}

export default Navbar