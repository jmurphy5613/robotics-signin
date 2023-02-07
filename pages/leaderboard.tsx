import { useEffect, useState } from "react"
import { getAllUsers } from "../utils/requests/users"
import styles from '../styles/Leaderboard.module.css'
import { Event, User } from "../utils/types"


const Leaderboard = () => {

    const [users, setUsers] = useState<Array<User>>([])

    const getUserData = async () => {
        const users = await getAllUsers() as Array<User>
        users.sort((element1, element2) => {
            if(element1.eventsAttended.length < element2.eventsAttended.length) return 1
            else return -1
        })
        setUsers(users)
    }

    const getTotalNumberOfHours = (users: Array<User>) => {
        let hours = 0;
        for(const user of users) {
            hours += getNumberOfHours(user.eventsAttended)

        }
        return hours
    }

    const getNumberOfHours = (events: Array<Event>) => {
        let hours = 0;
        for(const event of events) {
            let start = new Date(event.startDate)
            let end = new Date(event.endDate)
            hours += end.getHours()-start.getHours()
        }
        return hours
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <div className={styles.container}>
            <h3 className={styles["total-hours"]}>Total Hours Spent at Robotics: {getTotalNumberOfHours(users)}</h3>
            <div className={styles["grid-header"]}>
                <h3 className={styles.title}>Robotics Member</h3>
                <h3 className={styles.title}>Meetings Attended</h3>
            </div>
            <div className={styles.divider} />
            {users.map((element:User, index:number) => {
                const hours = getNumberOfHours(element.eventsAttended)
                return (
                    <>
                        <div className={styles.member}>
                            <h2 className={styles.data}>
                                {index + 1}. {element.firstName}{" "}
                                {element.lastName}
                            </h2>
                            <h2 className={styles.number}>
                                {element.eventsAttended.length}
                                ({hours} hours)
                            </h2>
                        </div>
                    </>
                );
            })}
        </div>
    );
}

export default Leaderboard