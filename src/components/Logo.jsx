import React from "react";
import logo from "../assets/logo-text.png";

export default function Logo() {
  return (
    <a className="logo" href="#home">
      <img src={logo} alt="Dev Stack Logo" />
    </a>
  );
}
