import { Link } from "react-router-dom";
import styles from "./ProfessorCard.module.css"
export function ProfessorCard({professor}) {
    const imageUrl = professor.poster_path;
    return (
    <li className={styles.ProfessorCard}>
        <Link to={"professor/" + professor.id}>
            <img width={230}
                height={345}
                className={styles.ProfessorImage}
                src={imageUrl}
                alt={professor.professor}
            />
            <div>{professor.professor}</div>
        </Link>
    </li>
    );
}
