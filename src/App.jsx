import "./styles/globalStyles.css"
import "../src/styles/reset.css"
import { Header } from "./components/Header"
import { Banner } from "../src/components/BannerSection"
import { AboutMeSection } from "./components/AboutMeSection"
import { Techsection } from "./components/TechSection"
import { ProjectsSection } from "./components/ProjectsSection"
import { Footer } from "./components/Footer"

function App() {

  return (
    <>
    <Header/>
    <Banner/>
    <AboutMeSection/>
    <Techsection/>
    <ProjectsSection/>
    <Footer/>
    </>
  )
}

export default App