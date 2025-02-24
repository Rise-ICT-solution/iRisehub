import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import News from "./Pages/Community Pages/News"
import Events from "./Pages/Community Pages/Events"
import Header from "./Components/Header";
// import TestPages from "./Pages/Testing";
function App (){ 
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/news" element={<News />} />
    <Route path="/events" element={<Events />} />
    <Route path="/header" element={<Header />} />

    {/* <Route path="/test" element={<TestPages />} /> This page line is only for testing */}
  </Routes>
} 
export default App