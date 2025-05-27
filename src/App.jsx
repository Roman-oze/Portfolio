import AboutMe from "./components/AboutSection";
import CertificateSection from "./components/Certification";
import CounterSection from "./components/CounterSection";
import Feature from "./components/Feature";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Academic from "./components/institution";
import ProjectList from "./components/ProjectSection";
import SkillsProgress from "./components/SkillProgress";
import Skill from "./components/SkillSection";
import "./style.css";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Feature />
      <Skill />
      <AboutMe />
      <CounterSection />
      <Academic />
      <SkillsProgress />
      <ProjectList />
      <CertificateSection />
      
    </>
  );
}

export default App;
