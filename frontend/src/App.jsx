import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
// import TestPages from "./Pages/Testing";
import Events from "./Pages/Community Pages/Events";
function App (){ 
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Events" element={<Events/>} />
    {/* <Route path="/test" element={<TestPages />} /> This page line is only for testing */}
  </Routes>
}
export default App