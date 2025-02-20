import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import TestPages from "./Pages/Testing";
import Ecosystem from "./Pages/Ecosystem";
function App (){ 
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/test" element={<TestPages />} /> {/*This page line is only for testing */}
    <Route path="/Ecosystem" element={<Ecosystem />} /> 
  </Routes>
}
export default App