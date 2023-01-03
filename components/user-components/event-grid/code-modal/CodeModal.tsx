import styles from './CodeModal.module.css'
import { IconContext } from 'react-icons'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { BsXLg } from 'react-icons/bs'
import { Event, User } from '../../../../utils/types';
import { useState } from 'react';
import { getUserByEmail, registerUserForEventByIds } from '../../../../utils/requests/users';
import { useUser } from '@auth0/nextjs-auth0/client'

type CodeModalType = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    event: Event
};

const CodeModal:React.FC<CodeModalType> = ({ setShowModal, event }) => {

    const [codeEntered, setCodeEntered] = useState<number>()

    const { user, isLoading } = useUser()

    const onSubmit = async () => {
        console.log(codeEntered, event.code)
        if(codeEntered === event.code && user?.email) {
            const userData = await getUserByEmail(user?.email) as User
            await registerUserForEventByIds(userData.id, event.id)
        }
    }

    if(isLoading) return <div></div>

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
                    type="number"
                    onChange={(e) => {
                        setCodeEntered(e.target.valueAsNumber)
                    }}
                />
                <button className={styles.submit} onClick={() => {
                    onSubmit()
                }}>Lets go!</button>
            </div>
        </div>
    );
}

export default CodeModal