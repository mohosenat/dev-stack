import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>Curated tools, technologies, and resources for developers building modern software.</p>
          <div className="socials">
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4>PRODUCT</h4>
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
        </div>

        <div>
          <h4>COMPANY</h4>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#careers">Careers</a>
        </div>

        <div>
          <h4>LEGAL</h4>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Dev Stack. All rights reserved.</span>
        <div>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
