import "../../styles/globalStyles.css"
import "../Header/style.css"
import Portfolio from "../../assets/portfolio.png"
export const Header = () => {
    return (
        <div className="headerclass">
            <img className="portfolio-img" src={Portfolio} alt="portfolio" />
            <div className="header-div-list">
                <p>Sobre</p>
                <p>Stack</p>
                <p>Projetos</p>
            </div>
            <button className="button-contact">Contato</button>
        </div>
    )
}