// import MyNav from "./components/Mynav/MyNav";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Porfolio from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div >
      <NavBar/>
      <main className="main">
        <Home/>
        <SocialLinks/>
        <About/>
        <Porfolio/>
        <Experience/>
        <Contact/>
      </main>
      {/* <Home/>
      <SocialLinks/>
      <About/>
      <Porfolio/>
      <Experience/>
      <Contact/> */}
    </div>

  );
}

export default App;
