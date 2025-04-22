import Nav from "./Components/Nav"
import About from "./Components/About"
import Skills from "./Components/Skills"
import { useRef } from "react";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import Certificates from "./Components/Certificates";
import Organizations from "./Components/Organizations";
import Contact from "./Components/Contact";
function App() {
  const AboutSec = useRef(null);
  const SkillsSec = useRef(null);
  const ProjectsSec = useRef(null);
  const CertificatesSec = useRef(null);
  const ResumeSec = useRef(null);
  const ContactSec = useRef(null);

  const scrollTo = (sec)=>{
    const offset = 80; 
    const elementPosition = sec.current.offsetTop;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
  const sections = [
    { ref: AboutSec, label: "About" },
    { ref: SkillsSec, label: "Skills" },
    { ref: ProjectsSec, label: "Projects" },
    { ref: CertificatesSec, label: "Certificates" },
    { ref: ResumeSec, label: "Resume" },
    { ref: ContactSec, label: "Contact" },
  ];
  return (
    <>
      <Nav scrollFun={scrollTo} sections={sections} />
      <About ref={AboutSec}/>
      <Skills  ref={SkillsSec}/>
      <Projects  ref={ProjectsSec}/>
      <Certificates ref={CertificatesSec}/>
      <Resume ref={ResumeSec}/>
      <Organizations/>
      <Contact ref={ContactSec}/>
    </>
  )
}

export default App
