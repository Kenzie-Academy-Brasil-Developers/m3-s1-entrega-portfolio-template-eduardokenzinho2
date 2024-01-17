import {projects} from "../../data/projects.js"
import styles from "../ProjectsSection/style.module.css"
import { CardProjects } from "../CardProjects"
export const ProjectsSection = () => {
    return (
        <div className={styles.projectsDiv1}>
          <h1 className={styles.projectsTitle}>Projetos</h1>
              <CardProjects projects={projects}/>
        </div>
    )
}