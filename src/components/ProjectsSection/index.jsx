import "../ProjectsSection/style.module.css"
import githubicon from "../../assets/git-icon.png"
export const ProjectsSection = () => {
    return (
        <div className={styles.projectsDiv1}>
          <h1 className={styles.projectsTitle}>Projetos</h1>
          <ul className={styles.projectsUl}>
            <li className={styles.projectsLi}>
              <div className={styles.projectsDiv}>
                <h1 className={styles.projectsTitle1}>Projeto KenzieFlix</h1>
                <img src={githubicon} alt="icon_github" />
              </div>
              <p className={styles.projectParagraph}>Baseado na interface da Netflix</p>
              <a className={styles.projectLink} href="https://kenzie-academy-brasil-developers.github.io/m1-kenzie-flix-eduardokenzinho/">Saiba mais</a>
            </li>
            <li className={styles.projectsLi}>
              <div className={styles.projectsDiv}>
                <h1 className={styles.projectsTitle1}>Projeto site institucional genérico</h1>
                <img src={githubicon} alt="icon_github" />
              </div>
              <p className={styles.projectParagraph}>Landing page de venda de curso</p>
              <a className={styles.projectLink} href="https://kenzie-academy-brasil-developers.github.io/m2-site-instituciona-generico-eduardokenzinho/">Saiba mais</a>
            </li>
            <li className={styles.projectsLi}>
              <div className={styles.projectsDiv}>
                <h1 className={styles.projectsTitle1}>Projeto barbearia web</h1>
                <img src={githubicon} alt="icon_github" />
              </div>
              <p className={styles.projectParagraph}>Prática de funcionalidades JavaScript</p>
              <a className={styles.projectLink} href="https://kenzie-academy-brasil-developers.github.io/m1-barbearia-web-eduardokenzinho/">Saiba mais</a>
            </li>
            <li className={styles.projectsLi}>
              <div className={styles.projectsDiv}>
                <h1 className={styles.projectsTitle1}>Projeto lista de tarefas</h1>
                <img src={githubicon} alt="icon_github" />
              </div>
              <p className={styles.projectParagraph}>Projeto lista de tárefas, manipulação com JavaScript DOM</p>
              <a className={styles.projectLink} href="https://kenzie-academy-brasil-developers.github.io/m2-lista-de-tarefas-eduardokenzinho/">Saiba mais</a>
            </li>
          </ul>
        </div>
    )
}