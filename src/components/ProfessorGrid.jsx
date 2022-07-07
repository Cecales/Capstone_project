import { ProfessorCard } from "./ProfessorCard";
import professor from "../pages/professor.json"
import styles from "./ProfessorGrid.module.css";

export function ProfessorGrid() {
    return (
    <ul className={styles.ProfessorGrid}>
        {professor.map((professor) => 
            <ProfessorCard key={professor.id} professor={professor} />
        )}
    </ul>
    );
}
