import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Asosiy from "./components/Asosiy";
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Asosiy />} />
          <Route path="/men-haqimda" element={<AboutMe />} />
          <Route path="/aloqa" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;