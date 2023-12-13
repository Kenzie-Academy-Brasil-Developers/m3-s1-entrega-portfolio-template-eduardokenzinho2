import "../ProjectsSection/style.css"
import githubicon from "../../assets/git-icon.png"
export const ProjectsSection = () => {
    return (
        <div className="projects-div1">
          <h1 className="projects-title">Projetos</h1>
          <ul className="projects-ul">
            <li className="projects-li">
              <div className="projects-div">
                <h1 className="projects-title1">Projeto KenzieFlix</h1>
                <img src={githubicon} alt="icon_github" />
              </div>
              <p className="project-paragraph">Baseado na interface da Netflix</p>
              <a className="project-link" href="https://kenzie-academy-brasil-developers.github.io/m1-kenzie-flix-eduardokenzinho/">Saiba mais</a>
            </li>
            <li className="projects-li">
              <div className="projects-div">
                <h1 className="projects-title1">Projeto site institucional genérico</h1>
                <img src={githubicon} alt="icon_github" />
              </div>
              <p className="project-paragraph">Landing page de venda de curso</p>
              <a className="project-link" href="https://kenzie-academy-brasil-developers.github.io/m2-site-instituciona-generico-eduardokenzinho/">Saiba mais</a>
            </li>
            <li className="projects-li">
              <div className="projects-div">
                <h1 className="projects-title1">Projeto barbearia web</h1>
                <img src={githubicon} alt="icon_github" />
              </div>
              <p className="project-paragraph">Prática de funcionalidades JavaScript</p>
              <a className="project-link"href="https://kenzie-academy-brasil-developers.github.io/m1-barbearia-web-eduardokenzinho/">Saiba mais</a>
            </li>
            <li className="projects-li">
              <div className="projects-div">
                <h1 className="projects-title1">Projeto lista de tarefas</h1>
                <img src={githubicon} alt="icon_github" />
              </div>
              <p className="project-paragraph">Projeto lista de tárefas, manipulação com JavaScript DOM</p>
              <a className="project-link" href="https://kenzie-academy-brasil-developers.github.io/m2-lista-de-tarefas-eduardokenzinho/">Saiba mais</a>
            </li>
          </ul>
        </div>
    )
}