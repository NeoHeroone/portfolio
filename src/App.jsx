import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Asosiy from "./components/asosiy";
import Contact from "./components/Contact";
import Navbar from "./components/navbar";
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