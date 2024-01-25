// import MyNav from "./components/Mynav/MyNav";

import NavBar from "./components/NavBar";
import About from "./Pages/About";


import Home from "./Pages/Home";
import { Route, Routes } from "react-router";
import Portfolio from "./Pages/Portfolio";

function App() {
  return (
    <div >
      {/* <MyNav/> */}
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>

    </div>

  );
}

export default App;
