import { TopicCard } from "./TopicCard";
import topics from "./Topics.json"
import styles from "./TopicGrid.module.css";

export function TopicsGrid() {
    return (
    <ul className={styles.TopicsGrid}>
        {topics.map((topic) => 
            <TopicCard key={topic.id} topic={topic} />
        )}
    </ul>
    );
}
