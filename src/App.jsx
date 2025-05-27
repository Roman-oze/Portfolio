import AboutMe from "./components/AboutSection";
import CertificateSection from "./components/Certification";
import CounterSection from "./components/CounterSection";
import Expertise from "./components/Expertise";
import LogosMarquee from "./components/Feature";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectList from "./components/ProjectSection";
import SkillsProgress from "./components/SkillProgress";
import Skill from "./components/SkillSection";
import Experience from "./components/Experience";
import "./style.css";
import Footer from "./components/Footer";
import Academic from "./components/institution";

function App() {
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
