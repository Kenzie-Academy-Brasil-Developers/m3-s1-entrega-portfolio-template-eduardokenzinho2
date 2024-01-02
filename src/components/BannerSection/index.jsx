import styles from "../BannerSection/style.module.css"
import bannerimg from "../../assets/banner-img.png"
export const Banner = () => {
    return (
        <div className={styles.bannerSectionDiv}>
            <div className={styles.bannerDivList}>
                <p className={styles.bannerName} >EDUARDOFERNANDES</p>
                <h1 className={styles.welcomePortfolio} >Bem vindo ao meu portfólio</h1>
                <p className={styles.phraseBanner} >Não é a linguagem de programação que define o programador, mas sim sua lógica.</p>
                <button className={styles.knowMore} >Saiba mais</button>
            </div>
            <img className={styles.bannerImg} src={bannerimg} alt="banner" />
        </div>
    )
}