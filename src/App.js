import Navbar from "./components/layout/Navbar";
import Home from "./components/section/Home";
import About from "./components/section/About";
import Skills from "./components/section/Skills";
import Work from "./components/section/Work";
import Contact from "./components/section/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Work/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
