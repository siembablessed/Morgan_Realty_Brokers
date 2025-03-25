import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Manage from "./pages/Manage";
import Lease from "./pages/Lease";
import BuySell from "./pages/BuySell";
import Contact from "./pages/Contact";
import './App.css';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/lease" element={<Lease />} />
        <Route path="/buy-sell" element={<BuySell />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
