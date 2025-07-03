import { useEffect } from "react";
import AboutMe from "./components/AboutSection";
import CertificateSection from "./components/Certification";
import CounterSection from "./components/CounterSection";
import Expertise from "./components/Expertise";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectList from "./components/ProjectSection";
import SkillsProgress from "./components/SkillProgress";
import Skill from "./components/SkillSection";
import Experience from "./components/Experience";
import "./style.css";
import Footer from "./components/Footer";
import Academic from "./components/Academic";
import favicon from "./assets/image/website-icon.png";

function App() {
  
  useEffect(() => {
    document.title = "Portfolio";
    document.querySelector("link[rel='icon']").href = favicon;
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <Expertise />
      <Skill />
      <AboutMe />
      <Academic />
      <CounterSection />
      <SkillsProgress />
      <ProjectList />
      <CertificateSection />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
