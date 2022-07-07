import { Link } from "react-router-dom";
import styles from "./TopicCard.module.css"
export function TopicCard({topic}) {
    const imageUrl = topic.poster_path;
    return (
    <li className={styles.TopicCard}>
        <Link to={"topics/" + topic.id}>
            <img width={230}
                height={345}
                className={styles.TopicImage}
                src={imageUrl}
                alt={topic.topic}
            />
            <div>{topic.topic}</div>
        </Link>
    </li>
    );
}
