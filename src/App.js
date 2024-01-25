// import MyNav from "./components/Mynav/MyNav";

import NavBar from "./components/NavBar";
import PAbout from "./Pages/PAbout";


import PHome from "./Pages/PHome";
import { Route, Routes } from "react-router";
import PPortfolio from "./Pages/PPortfolio";

function App() {
  return (
    <div >
      {/* <MyNav/> */}
      <NavBar/>
      <Routes>
        <Route path="/" element={<PHome/>}/>
        <Route path="/about" element={<PAbout/>}/>
        <Route  path="/portfolio" element={<PPortfolio/>}/>
      </Routes>

    </div>

  );
}

export default App;
