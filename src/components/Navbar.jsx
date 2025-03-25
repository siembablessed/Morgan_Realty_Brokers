import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LogoPicture from "../images/logo 2.png";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current route

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path ? "active-link" : "";

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={LogoPicture} alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-nav">
          <Link to="/" className={isActive("/")}>Home</Link>
          <Link to="/manage" className={isActive("/manage")}>Manage</Link>
          <Link to="/lease" className={isActive("/lease")}>Lease</Link>
          <Link to="/buy-sell" className={isActive("/buy-sell")}>Buy & Sell</Link>
          <Link to="/contact" className={`navbar-contact ${isActive("/contact")}`}>Get in Touch</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(true)} className="menu-button">
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar Menu */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button onClick={() => setIsOpen(false)} className="sidebar-close">
          <X size={28} />
        </button>
        <nav className="sidebar-nav">
          <Link to="/" onClick={() => setIsOpen(false)} className={isActive("/")}>Home</Link>
          <Link to="/manage" onClick={() => setIsOpen(false)} className={isActive("/manage")}>Manage</Link>
          <Link to="/lease" onClick={() => setIsOpen(false)} className={isActive("/lease")}>Lease</Link>
          <Link to="/buy-sell" onClick={() => setIsOpen(false)} className={isActive("/buy-sell")}>Buy & Sell</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={`sidebar-contact ${isActive("/contact")}`}>Get in Touch</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
