import "./App.css";
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

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <LoaderLogo /> */}
      <Landing />
      <ContainerOfSections imgback="fullescabio">
        <SectionSideForCube>
          <TextCube text="I'm Tomás, a Junior Software Developer taking his first steps into the tech World. I'm a passionate about technology, exploring the world of development. I like to create new things, and I know that learning is a never-ending road of discovery, challenge and inspiration, so I'm always learning. In this profile you can find all the proyects I have been working on.">
            <div></div>
          </TextCube>
          {/* <Images size={"large"} link={"..."} /> */}
        </SectionSideForCube>
        <DinamicCube title="ABOUT" index="01" color="bg-lime-400" />
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
  );
}

export default App;
