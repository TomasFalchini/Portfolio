import "./App.css";
import React from "react";
import NavBar from "./infrastructure/views/statechangecomponents/NavBar";
import Footer from "./infrastructure/views/visualcomponents/Footer";
import FooterButton from "./infrastructure/views/visualcomponents/FooterButton";
import LoaderLogo from "./infrastructure/views/visualcomponents/LoaderLogo";
import { BsLinkedin } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { MdOutgoingMail } from "react-icons/md";
import Logo from "./infrastructure/views/visualcomponents/Logo";
import Landing from "./infrastructure/views/visualcomponents/Landing";
import ContainerOfSections from "./infrastructure/views/visualcomponents/ContainerOfSections";
import DinamicCube from "./infrastructure/views/visualcomponents/DinamicCube";
import SectionSideForCube from "./infrastructure/views/visualcomponents/SectionSideForCube";
import TextCube from "./infrastructure/views/visualcomponents/TextCube";
import Images from "./infrastructure/views/visualcomponents/Images";
import { motion } from "framer-motion";
import ContactForm from "./infrastructure/views/statechangecomponents/ContactForm";
import TechSkills from "./infrastructure/views/statechangecomponents/TechSkills";
import ServicesStatistics from "./infrastructure/views/visualcomponents/ServicesStatistics";
import ServicesResume from "./infrastructure/views/visualcomponents/ServicesResume";
import Services from "./infrastructure/views/visualcomponents/Services";
import Portfolio from "./infrastructure/views/visualcomponents/Portfolio";
import About from "./infrastructure/views/visualcomponents/About";

function App() {
  const [color, setColor] = React.useState("bg-lime-400");

  const [loader, setLoader] = React.useState(false);

  const choseColor: (id: string) => void = (id) => {
    if (id === "about") {
      setColor("bg-lime-400");
    }
    if (id === "skills") {
      setColor("bg-violet-700");
    }
    if (id === "portfolio") {
      setColor("bg-sky-500");
    }
    if (id === "services") {
      setColor("bg-amber-400");
    }
    if (id === "contact") {
      setColor("bg-pink-600");
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 1500);
  }, []);

  if (!loader) return <LoaderLogo />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div id="home" className="App">
        <NavBar color={color} />
        {/* <LoaderLogo /> */}
        <Landing />
        <ContainerOfSections
          setColor={choseColor}
          id={"about"}
          imgback="fullescabio"
        >
          <About />
          <DinamicCube title="ABOUT" index="01" color="bg-lime-400" />
        </ContainerOfSections>
        <ContainerOfSections
          setColor={choseColor}
          id={"skills"}
          imgback="fullescabio"
        >
          <DinamicCube title="SKILLS" index="02" color="bg-violet-700" />
          <TechSkills />
        </ContainerOfSections>
        <ContainerOfSections
          setColor={choseColor}
          id={"portfolio"}
          imgback="fullescabio"
        >
          <Portfolio />
          <DinamicCube title="PORTFOLIO" index="03" color="bg-sky-500" />
        </ContainerOfSections>

        <ContainerOfSections
          setColor={choseColor}
          id={"services"}
          imgback="fullescabio"
        >
          <DinamicCube title="SERVICES" index="04" color="bg-amber-400" />
          <Services />
        </ContainerOfSections>
        <ContainerOfSections
          setColor={choseColor}
          id={"contact"}
          imgback="fullescabio"
        >
          <SectionSideForCube>
            <ContactForm />
          </SectionSideForCube>
          <DinamicCube title="CONTACT" index="05" color="bg-pink-600" />
        </ContainerOfSections>

        <Footer>
          <FooterButton link={"https://www.linkedin.com/in/tomasfalchini/"}>
            <BsLinkedin />
          </FooterButton>
          <FooterButton link={"https://github.com/TomasFalchini"}>
            <FiGithub />
          </FooterButton>
          <FooterButton link={"mailto:tomasfalchini@gmail.com"}>
            <MdOutgoingMail />
          </FooterButton>
        </Footer>
      </div>
    </motion.div>
  );
}

export default App;
