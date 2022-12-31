import styles from './CodeModal.module.css'
import { BsCodeSlash } from 'react-icons/bs'
import { IconContext } from 'react-icons';
import { AiOutlineQuestionCircle } from 'react-icons/ai'

const CodeModal = () => {
    return (
        <div className={styles.container}>
            <div className={styles["modal-container"]}>
                <IconContext.Provider value={{ color: "white", size: "60px" }}>
                    <AiOutlineQuestionCircle />
                </IconContext.Provider>
                <h3 className={styles.title}>What's the code given at the metting?</h3>
                <input className={styles["code-input"]} placeholder='got the code?' />
                <button className={styles.submit}>Lets go!</button>
            </div>
        </div>
    );
}

export default CodeModal