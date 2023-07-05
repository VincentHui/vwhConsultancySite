import React from "react";
import "./ContactUs.css";

interface Props {
  children: React.ReactNode;
}

const Section = ({ children }: Props) => (
  <section
    style={{
      backgroundColor: "#272727",
      color: "white",
      padding: "2rem",
    }}
  >
    <div style={{ padding: "1rem 0" }}></div>
    <h2 style={{ textAlign: "center", fontSize: "2.5rem" }}>
      Get in touch today
    </h2>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "1rem 0",
      }}
    >
      {children}
      <button
        style={{
          backgroundColor: "transparent",
          border: "2px solid white",
          borderRadius: "25px",
          color: "white",
          padding: "20px 70px",
          marginTop: "15px",
          fontSize: "01rem",
          marginLeft: "15px",
          marginRight: "15px",
          fontFamily: "Roboto Mono, monospace",
        }}
        onMouseEnter={() => {
          document.getElementById("button")!.style.backgroundColor = "white";
          document.getElementById("button")!.style.color = "grey";
        }}
        onMouseLeave={() => {
          document.getElementById("button")!.style.backgroundColor =
            "transparent";
          document.getElementById("button")!.style.color = "white";
        }}
        id="button"
      >
        Email us
      </button>
      <h1></h1>
      <h1></h1>
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        src="https://iconsplace.com/wp-content/uploads/_icons/ffe500/256/png/linkedin-2-icon-19-256.png"
        alt="linkedin"
        style={{ width: "50px", margin: "0 40px 0 0" }}
      />
      <img
        src="https://iconsplace.com/wp-content/uploads/_icons/ffff00/256/png/twitter-2-icon-256.png"
        alt="twitter"
        style={{ width: "50px", margin: 0 }}
      />
    </div>
    <p>
      <p></p>
    </p>
    <p></p>
    <h1></h1>
    <img
      src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a7a58ad71d4e494e9dce8e_Modu_Brand_Mark_Inverted_RGB.svg"
      alt="modu-digital-icon"
      style={{ width: "40px", margin: "100px auto", display: "block" }}
    />
    <h1></h1>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "1rem",
          marginRight: "0.5rem",
          display: "inline-block",
        }}
      >
        London Office -
      </h2>
      <p style={{ display: "inline-block", margin: 0 }}>
        68-80 Hanbury Street, London, E1 5JL
      </p>
    </div>
    <h1></h1>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.9rem",
      }}
    >
      <p style={{ display: "inline-block", margin: 0, color: "lightblue" }}>
        <a href="#modern-slavery-policy" style={{ color: "lightblue" }}>
          Modern Slavery Policy
        </a>{" "}
        |{" "}
        <a href="#privacy-policy" style={{ color: "lightblue" }}>
          Privacy Policy
        </a>{" "}
        |{" "}
        <span style={{ color: "lightblue" }}>
          Copyright © 2023 Modu.Digital. All Rights Reserved.
        </span>
      </p>
    </div>
  </section>
);

export default Section;
