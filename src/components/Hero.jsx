import React from "react";
import heroImage from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-copy">
        <h1>Build Your Ideal<br /><span>Development Stack</span></h1>
        <p className="hero-text">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="hero-buttons">
          <a className="primary-btn" href="#technologies">Explore Technologies</a>
          <a className="outline-btn" href="#about">Learn More</a>
        </div>
      </div>

      <div className="hero-art" aria-label="Isometric technology stack illustration">
        <div>
          <img src={heroImage} alt="Modern technology illustration" className="hero-image" />
        </div>
      </div>
    </section>
  );
}
