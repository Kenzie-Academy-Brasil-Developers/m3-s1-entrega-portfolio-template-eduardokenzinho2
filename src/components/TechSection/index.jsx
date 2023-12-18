import "../TechSection/style.module.css"
import htmlimg from "../../assets/html-icon.png"
import cssimg from "../../assets/css-icon.png"
import jsimg from "../../assets/js-icon.png"
import reactimg from "../../assets/react-icon.png"
export const Techsection = () => {
    return (
        <div className={styles.techDiv}> 
          <p className={styles.techParagraph}>Tecnologias</p>
          <ul className={styles.techsectionList}>
            <li className={styles.techLi}>
                <img src={htmlimg} alt="icon_html" />
                <p className={styles.techName}>HTML</p>
            </li>
            <li className={styles.techLi}>
                <img src={cssimg} alt="icon_css" />
                <p className={styles.techName}>CSS</p>
            </li>
            <li className={styles.techLi}>
                <img src={jsimg} alt="icon_js" />
                <p className={styles.techName}>JavaScript</p>
            </li>
            <li className={styles.techLi}>
                <img src={reactimg} alt="icon_react" />
                <p className={styles.techName}>React</p>
            </li>
          </ul>
        </div>
    )
}