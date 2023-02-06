import styles from "../styles/Home.module.css"
import MainTitle from "../components/user-components/main-title/MainTitle"
import AdminButtons from "../components/user-components/admin-buttons/AdminButtons";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getAllEvents } from "../utils/requests/events";
import EventGrid from "../components/user-components/event-grid/EventGrid";
import { Event } from "../utils/types";

const Home = () => {

    const { user, isLoading } = useUser()

    const [events, setEvents] = useState<Array<Event>>([])

    const setEventsData = async () => {
        const allEvents = await getAllEvents() as Array<Event>
        allEvents.sort((a, b) => {
            if(a.startDate < b.startDate) {
                return 1;
            } else {
                return -1;``
            }
            return 0
        })
        setEvents(allEvents)
    }

    useEffect(() => {
        setEventsData()
    }, [])

    if(isLoading) return <div></div>

    // if(!user) {
    //     return (
    //         <div className={styles.container}>
    //             <div className={styles.center}>
    //                 <h1 className={styles.title}>Please login</h1>
    //             </div>
    //         </div>
    //     );
    // }

    return (
        <div className={styles.container}>
            <MainTitle />
            {user?.email === "jmurphy5613@gmail.com" && <AdminButtons />}
            <EventGrid events={events} />
        </div>
    )
};

export default Home
