import "../Header/style.module.css"
import Portfolio from "../../assets/portfolio.png"
export const Header = () => {
    return (
        <div className={styles.headerClass}>
            <img className={styles.portfolioImg} src={Portfolio} alt="portfolio" />
            <div className={styles.headerdivList}>
                <p>Sobre</p>
                <p>Stack</p>
                <p>Projetos</p>
            </div>
            <button className={styles.buttonContact}>Contato</button>
        </div>
    )
}