import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
