// import MyNav from "./components/Mynav/MyNav";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Porfolio from "./components/Porfolio";

function App() {
  return (
    <div >
      {/* <MyNav/> */}
      <NavBar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Porfolio/>
    </div>
  );
}

export default App;
