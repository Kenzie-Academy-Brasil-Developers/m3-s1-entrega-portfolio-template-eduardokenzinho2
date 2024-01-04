import styles from "../TechSection/style.module.css"
import { CardTechnology } from "../CardTechnology"
export const Techsection = () => {
    return (
        <div className={styles.techDiv}> 
          <p className={styles.techParagraph}>Tecnologias</p>
            <CardTechnology/>
        </div>
    )
}