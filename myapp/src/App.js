import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import MyProjects from "./components/MyProjects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
    <NavBar />
    <Home />
    <About />
    <MyProjects />
    <Experience />
    <Contact />
    <SocialLinks />
    </div>
  );
}

export default App;
