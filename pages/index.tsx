import styles from "../styles/Home.module.css"
import MainTitle from "../components/user-components/main-title/MainTitle"
import AdminButtons from "../components/user-components/admin-buttons/AdminButtons";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getAllEvents } from "../utils/events";
import EventGrid from "../components/user-components/event-grid/EventGrid";
import { Event } from "../utils/types";

const Home = () => {

    const { user, isLoading } = useUser()

    const [events, setEvents] = useState<Array<Event>>([])

    const setEventsData = async () => {
        const allEvents = await getAllEvents()
        setEvents(allEvents)
    }

    useEffect(() => {
        setEventsData()
    }, [])

    if(isLoading) return <div></div>

    return (
        <div className={styles.container}>
            <MainTitle />
            {user?.email === "jmurphy5613@gmail.com" && <AdminButtons />}
            <EventGrid events={events} />
        </div>
    )
};

export default Home
