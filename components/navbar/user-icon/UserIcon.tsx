import { useState } from 'react'
import LoginLogout from '../loginlogout/LoginLogout'
import styles from './UserIcon.module.css'

type UserIconProps = {
    image: string | undefined
}

const UserIcon:React.FC<UserIconProps> = ({ image }) => {

    const [showPopup, setShowPopup] = useState(true)

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} />
            {showPopup && (
                <div className={styles["popup-container"]}>
                    <LoginLogout login={false} />
                </div>
            )}
        </div>
    );
}

export default UserIcon