import "../Footer/style.module.css"
import whatsappicon from "../../assets/whatsapp-icon.png"
import linkedinicon from "../../assets/linkedin-icon.png"
import githubicon from "../../assets/github-icon.png"

export const Footer = () => {
    return (
        <>
            <div className={styles.footerDiv}>
                <ul className={styles.footerUl}>
                    <li className={styles.footerLi}>
                        <h1 className={styles.contactFooter}>Contato</h1>
                        <div className={styles.footerIcon}>
                            <img className={styles.iconImg} src={whatsappicon} alt="whatsapp_icon" />
                            <img className={styles.iconImg} src={linkedinicon} alt="linkedin_icon" />
                            <img className={styles.iconImg} src={githubicon} alt="github_icon" />
                        </div>
                    </li>
                    <li className={styles.rightsLi}>
                        <p>Todos os direitos reservados - Eduardo Fernandes</p>
                    </li>
                </ul>
            </div>
        </>
    )
}