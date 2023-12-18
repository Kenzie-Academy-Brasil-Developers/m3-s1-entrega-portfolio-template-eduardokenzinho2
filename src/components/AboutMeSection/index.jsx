import styles from "../AboutMeSection/style.module.css"
export const AboutMeSection = () => {
    return (
        <>
            <div className= {styles.aboutmeDiv}>
                <h2 className= {styles.aboutmeTitle}>Sobre mim</h2>
                <p className= {styles.aboutmeParagraph}>Sou um desenvolvedor Full Stack em formação pela Kenzie Academy Brasil,
                    estou desenvolvendo habilidades em tecnologias como HTML, CSS, JavaScript, React e Node.js.
                    Meu objetivo é aplicar essas habilidades para criar soluções inovadoras e eficientes para os
                    desafios do mundo real. Estou ansioso para trabalhar em projetos desafiadores e aprender
                    com outros desenvolvedores experientes enquanto continuo a aprimorar minhas habilidades técnicas e colaborativas.
                </p>
            </div>
        </>
    )
}