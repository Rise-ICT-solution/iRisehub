import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Events from "./Pages/Community Pages/Events";
// import TestPages from "./Pages/Testing";
import News from "../src/Pages/Community Pages/News"
function App (){ 
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/news" element={< News/>} />
    <Route path="/events" element={<Events />} /> {/* This page line is for community pages */}
    {/* <Route path="/test" element={<TestPages />} /> This page line is only for testing */}
  </Routes>
}
export default App