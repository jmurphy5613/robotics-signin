import styles from './CodeModal.module.css'
import { IconContext } from 'react-icons'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { BsXLg } from 'react-icons/bs'

type CodeModalType = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CodeModal:React.FC<CodeModalType> = ({ setShowModal }) => {
    return (
        <div className={styles.container}>
            <div className={styles["modal-container"]}>
                <div className={styles.exit} onClick={() => {
                    setShowModal(false)
                }}>
                    <div className={styles.background}></div>
                    <BsXLg className={styles.x} />
                </div>
                <IconContext.Provider value={{ color: "white", size: "60px" }}>
                    <AiOutlineQuestionCircle />
                </IconContext.Provider>
                <h3 className={styles.title}>
                    What's the code given at the metting?
                </h3>
                <input
                    className={styles["code-input"]}
                    placeholder="got the code?"
                />
                <button className={styles.submit}>Lets go!</button>
            </div>
        </div>
    );
}

export default CodeModal