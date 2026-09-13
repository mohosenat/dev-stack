import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "Technologies", "Projects", "About", "Contact"];

  return (
    <header className="navbar">
      <div className="nav-inner">
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <Logo />

        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className={link === "Home" ? "active" : ""}>
              {link}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#signin" className="signin">Sign In</a>
          <a href="#signup" className="signup">Sign Up</a>
        </div>
      </div>
    </header>
  );
}
