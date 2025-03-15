import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioWebsite from "./PortfolioWebsite";
import AboutMe from "./AboutMe";
import Work from "./Work";

//import Works from "./pages/Works"
//import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        

        {/* Routes */}
        <Routes>
          <Route path="/" element={<PortfolioWebsite />} />
          
          <Route path="/about" element={<AboutMe />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
