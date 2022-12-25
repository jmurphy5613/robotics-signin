import styles from "../styles/Home.module.css";
import MainTitle from "../components/main-title/MainTitle";
import EventCard from "../components/event-card/EventCard";

const Home = () => {
    return (
        <div className={styles.container}>
            <MainTitle />
            <EventCard />
        </div>
    )
};

export default Home
