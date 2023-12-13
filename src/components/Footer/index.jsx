import "../Footer/style.css"
import whatsappicon from "../../assets/whatsapp-icon.png"
import linkedinicon from "../../assets/linkedin-icon.png"
import githubicon from "../../assets/github-icon.png"

export const Footer = () => {
    return (
        <>
            <div className="footer-div">
                <ul className="footer-ul">
                    <li className="footer-li">
                        <h1 className="contact-footer">Contato</h1>
                        <div className="footer-icon">
                        <img className="icon-img" src={whatsappicon} alt="whatsapp_icon" />
                        <img className="icon-img" src={linkedinicon} alt="linkedin_icon" />
                        <img className="icon-img" src={githubicon} alt="github_icon" />
                </div>
            </li>
            <li className="rights-li">
                <p>Todos os direitos reservados - Eduardo Fernandes</p>
            </li>
          </ul>
        </div>
      
        </>
    )
}