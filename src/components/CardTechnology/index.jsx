import { Technologies } from "./Technologies"
import { technologies } from "../../data/technologies"
import styles from "../CardTechnology/style.module.css"

export const CardTechnology = () => {
    return (
        <>
            <ul className={styles.techSectionList}>
                {technologies.map(techcard => (
                    <li className={styles.techLi} key={techcard.name}>
                        <Technologies src = {techcard.img}><p className={styles.techName}>{techcard.name}</p></Technologies>            </li>
                ))}
            </ul>
        </>

    )
}