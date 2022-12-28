import styles from "../styles/Home.module.css"
import MainTitle from "../components/main-title/MainTitle"
import EventCard from "../components/event-card/EventCard"
import AdminButtons from "../components/admin-buttons/AdminButtons";
import { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

const Home = () => {
    return (
        <div className={styles.container}>
            <MainTitle />
            <AdminButtons />
            <EventCard />
        </div>
    )
};

export default Home
