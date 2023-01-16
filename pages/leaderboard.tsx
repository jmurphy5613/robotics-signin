import { useEffect, useState } from "react"
import { getAllUsers } from "../utils/requests/users"
import styles from '../styles/Leaderboard.module.css'
import { User } from "../utils/types"


const Leaderboard = () => {

    const [users, setUsers] = useState<Array<User>>([])

    const getUserData = async () => {
        const users = await getAllUsers() as Array<User>
        users.sort((element1, element2) => {
            if(element1.eventsAttended.length < element2.eventsAttended.length) return 1
            else return -1
            return 0
        })
        setUsers(users)
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles["grid-header"]}>
                <h3 className={styles.title}>Robotics Member</h3>
                <h3 className={styles.title}>Meetings Attended</h3>
            </div>
            <div className={styles.divider} />
            {users.map((element:User, index:number) => {
                return (
                    <>
                        <div className={styles.member}>
                            <h2 className={styles.data}>
                                {index + 1}. {element.firstName}{" "}
                                {element.lastName}
                            </h2>
                            <h2 className={styles.number}>
                                {element.eventsAttended.length}
                            </h2>
                        </div>
                    </>
                );
            })}
        </div>
    );
}

export default Leaderboard