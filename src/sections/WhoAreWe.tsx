// import logo from "./logo.svg";
import React from "react";
import "./whoAreWe.css";

export function WhoAreWeSection() {
  return (
    <div style={{ backgroundColor: "#282c34" }}>
      {/* <header className="App-header"> */}
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navigation-transparent w-nav"
      >
        <div className="container w-container">
          <a
            href="/"
            aria-current="page"
            className="aller-logo w-nav-brand w--current"
            aria-label="home"
          >
            <img
              src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a75384762cc85810b24a8a_Modu_Primary_Logo_Inverted_RGB.svg"
              className="logo-white"
            />
          </a>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <a
              href="#hero-video"
              className="nav-link-transparent w-nav-link w--current"
            >
              HOME
            </a>
            <a href="#about" className="nav-link-transparent w-nav-link">
              About
            </a>
            <a href="#what-we-do" className="nav-link-transparent w-nav-link">
              What We Do
            </a>
            <a
              href="#who-we-work-with"
              className="nav-link-transparent w-nav-link"
            >
              WHO WE WORK WITH
            </a>
            <a
              href="#leadership-team"
              className="nav-link-transparent w-nav-link"
            >
              Team
            </a>
            <a href="#work-with-us" className="nav-link-transparent w-nav-link">
              Work with us
            </a>
            <a href="#contact" className="nav-link-transparent w-nav-link">
              Contact
            </a>
          </nav>
          <div
            className="menu-button w-nav-button"
            aria-label="menu"
            role="button"
            tabIndex={0}
            aria-controls="w-nav-overlay-1"
            aria-haspopup="menu"
            aria-expanded="false"
          >
            <div className="icon-3 w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
      <div className="centered-container hero">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
        </style>

        <h1 className="hero-heading">
          We are a leading growth consultancy that integrates cutting edge
          thinking, design and delivery to enable any company to turn volatility
          from a challenge to an opportunity.
        </h1>
        <div className="hero-text">
          <strong>Our mission</strong> is to build the growth engine for the
          giants of tomorrow.
        </div>
        <a href="#about" className="button-2 yellow w-button">
          Learn more
        </a>
      </div>
      {/* </header> */}
    </div>
  );
}
