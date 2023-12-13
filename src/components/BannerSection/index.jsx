// import "../../styles/globalStyles.css"
import "../BannerSection/style.css"
import bannerimg from "../../assets/banner-img.png"
export const Banner = () => {
    return (
    <div className="banner-section-div">
        <div className="banner-div-list">
            <p className="banner-name" >EDUARDOFERNANDES</p>
            <h1 className="welcome-portfolio" >Bem vindo ao meu portfólio</h1>
            <p className="phrase-banner" >Não é a linguagem de programação que define o programador, mas sim sua lógica.</p>
            <button className="know-more" >Saiba mais</button>
        </div>
        <img className="banner-img" src={bannerimg} alt="banner"/>
    </div>
       
    )
}