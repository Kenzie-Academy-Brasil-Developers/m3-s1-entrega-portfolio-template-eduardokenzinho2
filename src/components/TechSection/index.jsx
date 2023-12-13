import "../TechSection/index.css"
import htmlimg from "../../assets/html-icon.png"
import cssimg from "../../assets/css-icon.png"
import jsimg from "../../assets/js-icon.png"
import reactimg from "../../assets/react-icon.png"
export const Techsection = () => {
    return (
        <div className="tech-div"> 
          <p className="tech-paragraph">Tecnologias</p>
          <ul className="techsection-list">
            <li className="tech-li">
                <img src={htmlimg} alt="icon_html" />
                <p className="tech-name">HTML</p>
            </li>
            <li className="tech-li">
                <img src={cssimg} alt="icon_css" />
                <p className="tech-name">CSS</p>
            </li>
            <li className="tech-li">
                <img src={jsimg} alt="icon_js" />
                <p className="tech-name">JavaScript</p>
            </li>
            <li className="tech-li">
                <img src={reactimg} alt="icon_react" />
                <p className="tech-name">React</p>
            </li>
          </ul>
        </div>
    )
}