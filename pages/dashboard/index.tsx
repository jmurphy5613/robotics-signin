import styles from "../../styles/Dashboard.module.css";
import IntroTitle from "../../components/dashboard-components/intro-title/IntroTitle";
import EventGrid from "../../components/dashboard-components/event-grid/EventGrid";
import { Event } from "../../utils/types";
import { getAllEvents } from "../../utils/events";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [allEvents, setAllEvents] = useState<Array<Event>>();

    const setEvents = async () => {
        const events = await getAllEvents();
        setAllEvents(events);
    };

    useEffect(() => {
        setEvents();
    }, []);

    if (!allEvents) return <div></div>;

    return (
        <div className={styles.container}>
            <IntroTitle />
            <EventGrid events={allEvents} />
        </div>
    );
};

export default Dashboard;
