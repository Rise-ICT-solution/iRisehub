import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import News from "./Pages/Community Pages/News"
import Events from "./Pages/Community Pages/Events"
import Header from "./Components/Header";
import MogadishuTechSummit from "./Pages/Ecosystem-Pages/MogadishuTechSummit";
import Kobciye from "./Pages/Ecosystem-Pages/Kobciye";

function App (){ 
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/news" element={<News />} />
    <Route path="/events" element={<Events />} />
    <Route path="/header" element={<Header />} />
    <Route path="/mogadishuTech" element={<MogadishuTechSummit />} />
    <Route path="/kobciye" element={<Kobciye />} />
   

    {/* <Route path="/test" element={<TestPages />} /> This page line is only for testing */}
  </Routes>
} 
// import Kobciye from "./Pages/Ecosystem-Pages/Kobciye";
export default App