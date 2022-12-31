import styles from './CodeModal.module.css'
import { BsCodeSlash } from 'react-icons/bs'
import { IconContext } from 'react-icons';

const CodeModal = () => {
    return (
        <div className={styles.container}>
            <div className={styles["modal-container"]}>
                <IconContext.Provider value={{ color: "white", size: "50px" }}>
                    <BsCodeSlash />
                </IconContext.Provider>
                <h3 className={styles.title}>Enter the code given at the meeting</h3>
                <input className={styles["code-input"]} placeholder='got the code?' />
            </div>
        </div>
    );
}

export default CodeModal