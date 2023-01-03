import "./App.css";
import React, { useCallback, useEffect, useRef } from "react";
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
import { motion, useScroll } from "framer-motion";
import ContactForm from "./infrastructure/views/statechangecomponents/ContactForm";
import TechSkills from "./infrastructure/views/statechangecomponents/TechSkills";
import ServicesStatistics from "./infrastructure/views/visualcomponents/ServicesStatistics";
import ServicesResume from "./infrastructure/views/visualcomponents/ServicesResume";
import Services from "./infrastructure/views/visualcomponents/Services";
import Portfolio from "./infrastructure/views/visualcomponents/Portfolio";
import About from "./infrastructure/views/visualcomponents/About";

function App() {
  const [loader, setLoader] = React.useState(false);
  const [y1, sety1] = React.useState(0);
  const [y2, sety2] = React.useState(0);
  const [y3, sety3] = React.useState(0);
  const [y4, sety4] = React.useState(0);
  const [y5, sety5] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 1500);
  }, []);

  const ref1 = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      sety1(node.getBoundingClientRect().top);
    }
  }, []);
  const ref2 = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      sety2(node.getBoundingClientRect().top);
    }
  }, []);
  const ref3 = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      sety3(node.getBoundingClientRect().top);
    }
  }, []);
  const ref4 = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      sety4(node.getBoundingClientRect().top);
    }
  }, []);
  const ref5 = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      sety5(node.getBoundingClientRect().top);
    }
  }, []);

  if (!loader) return <LoaderLogo />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div id="home" className="App">
        <NavBar positions={[0, y1, y2, y3, y4, y5]} />
        <Landing />
        <div ref={ref1}>
          <ContainerOfSections
            id={"about"}
            imgback="bg-[url(https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80)] bg-cover bg-no-repeat bg-center"
          >
            <About />
            <DinamicCube title="ABOUT" index="01" color="bg-lime-400" />
          </ContainerOfSections>
        </div>
        <div ref={ref2}>
          <ContainerOfSections
            id={"skills"}
            imgback="bg-[url(https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1039&q=80)] bg-cover bg-no-repeat bg-center"
          >
            <DinamicCube title="SKILLS" index="02" color="bg-violet-700" />

            <TechSkills />
          </ContainerOfSections>
        </div>
        <div ref={ref3}>
          <ContainerOfSections
            id={"portfolio"}
            imgback="bg-[url(https://images.unsplash.com/photo-1532529867795-3c83442c1e5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)] bg-cover bg-no-repeat bg-center"
          >
            <Portfolio />
            <DinamicCube title="PORTFOLIO" index="03" color="bg-sky-500" />
          </ContainerOfSections>
        </div>
        <div ref={ref4}>
          <ContainerOfSections
            id={"services"}
            imgback="bg-[url(https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=800)] bg-cover bg-no-repeat bg-center"
          >
            <DinamicCube title="SERVICES" index="04" color="bg-amber-400" />
            <Services />
          </ContainerOfSections>
        </div>
        <div ref={ref5}>
          <ContainerOfSections
            id={"contact"}
            imgback="bg-[url(https://images.unsplash.com/photo-1595776613215-fe04b78de7d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-no-repeat bg-center"
          >
            <ContactForm />

            <DinamicCube title="CONTACT" index="05" color="bg-pink-600" />
          </ContainerOfSections>
        </div>

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
