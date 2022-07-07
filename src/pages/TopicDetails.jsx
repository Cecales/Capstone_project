import professor from "./professor.json";
import styles from "../components/TopicDetails.module.css"
export function TopicDetails() {
    const imageUrl =  professor.poster_path;
    return <div className={styles.detailsContainer}>
        <img className={`${styles.col} ${styles.topicImage}`} src={imageUrl} alt={professor.name} />
        <div className={`${styles.col} ${styles.topicdetails}`}>
            <p className={styles.firstItem}>
                <strong>Name:</strong> {professor.name}
            </p>
            <p>
                <strong>Phone:</strong>{" "}
                {professor.phone.map(phone => phone.name).join(", ")}
            </p>
            <p>
                <strong>Description:</strong> {professor.catchPhrase}
            </p>
        </div>
    </div>;
}
