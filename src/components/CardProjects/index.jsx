import icongit from "../../assets/git-icon.png"
import { projects } from "../../data/projects"
import styles from "./style.module.css"

export const CardProjects = () => {
    return (
        <>
            <ul className={styles.projectsUl}>
                {projects.map(card => (
                    <li key ={card.name} className={styles.projectsLi}>
                        <div className={styles.projectsDiv}>
                            <h1 className={styles.projectsTitle1}>{card.name}</h1>
                            <img src={icongit} alt="icon_github" />
                        </div>
                        <p className={styles.projectParagraph}>{card.description}</p>
                        <p className={styles.projectLink}>Saiba mais</p>
                    </li>
                ))}
            </ul>
        </>

    )
}