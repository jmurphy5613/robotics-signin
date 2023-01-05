import styles from "./EventCard.module.css";
import CodeModal from "../code-modal/CodeModal";
import { useState, useRef, useEffect } from "react";
import { Event } from "../../../../utils/types";
import { useUser } from "@auth0/nextjs-auth0/client";
import { createUser, getUserByEmail } from "../../../../utils/requests/users"

type EventCardProps = {
    event: Event;
};

const EventCard: React.FC<EventCardProps> = ({ event }) => {
    const [showCodeModal, setShowCodeModal] = useState(false);
    const [disabled, setDisabled] = useState(false)

    const { user, isLoading } = useUser();

    const alreadyRegistered = () => {
        if (!user && event) return;
        for(const registeredUser of event.attendees) {
            if(registeredUser.email === user?.email) setDisabled(true)
        }
    }

    const createUserIfNeeded = async () => {
        if (!user?.email) return;
        /* 
        1. check if the user is in the database
        2. if he is, just continue
        3. if not, create that user

        There is a whole seperate set of logic for 
        determining if they get assigned so that wont be done here
        */

        const doesExist = await getUserByEmail(user?.email);
        if (doesExist.message) {
            
            await createUser(
                user.given_name as string,
                user.family_name as string,
                user.email
            );
        }
    };

    useEffect(() => {
        if(!isLoading) alreadyRegistered()
    }, [isLoading])

    if (isLoading) return <div></div>;

    return (
        <>
            {showCodeModal && (
                <CodeModal event={event} setShowModal={setShowCodeModal} />
            )}
            <div className={styles.container}>
                {disabled && <h3 className={styles.attended}>you attended!</h3>}
                <h1 className={styles.title}>{event.title}</h1>
                <h3 className={styles.description}>{event.description}</h3>
                <div className={styles["button-group"]}>
                    <button
                        disabled={disabled}
                        className={styles.going}
                        onClick={() => {
                            setShowCodeModal(true);
                            createUserIfNeeded();
                        }}
                    >
                        I'm here!
                    </button>
                    {/* <button
                        disabled={disabled}
                        className={styles["not-going"]}>
                            Taking a rain check
                    </button> */}
                </div>
            </div>
        </>
    );
};

export default EventCard;
