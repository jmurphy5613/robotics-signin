import styles from "../styles/Home.module.css"
import MainTitle from "../components/user-components/main-title/MainTitle"
import EventCard from "../components/user-components/event-card/EventCard"
import AdminButtons from "../components/user-components/admin-buttons/AdminButtons";
import { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

const Home = () => {

    const { user, isLoading } = useUser()

    if(isLoading) return <div></div>

    return (
        <div className={styles.container}>
            <MainTitle />
            {user?.email === "jmurphy5613@gmail.com" && <AdminButtons />}
            <EventCard />
        </div>
    )
};

export default Home
