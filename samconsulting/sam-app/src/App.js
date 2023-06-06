import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navigation-transparent w-nav">
          <div class="container w-container">
            <a
              href="/"
              aria-current="page"
              class="aller-logo w-nav-brand w--current"
              aria-label="home"
            >
              <img
                src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a75384762cc85810b24a8a_Modu_Primary_Logo_Inverted_RGB.svg"
                class="logo-white"
              />
            </a>
            <nav role="navigation" class="nav-menu w-nav-menu">
              <a
                href="#hero-video"
                class="nav-link-transparent w-nav-link w--current"
              >
                HOME
              </a>
              <a href="#about" class="nav-link-transparent w-nav-link">
                About
              </a>
              <a href="#what-we-do" class="nav-link-transparent w-nav-link">
                What We Do
              </a>
              <a
                href="#who-we-work-with"
                class="nav-link-transparent w-nav-link"
              >
                WHO WE WORK WITH
              </a>
              <a
                href="#leadership-team"
                class="nav-link-transparent w-nav-link"
              >
                Team
              </a>
              <a href="#work-with-us" class="nav-link-transparent w-nav-link">
                Work with us
              </a>
              <a href="#contact" class="nav-link-transparent w-nav-link">
                Contact
              </a>
            </nav>
            <div
              class="menu-button w-nav-button"
              aria-label="menu"
              role="button"
              tabindex="0"
              aria-controls="w-nav-overlay-1"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <div class="icon-3 w-icon-nav-menu"></div>
            </div>
          </div>
          </div>
        <div class="centered-container hero">
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
          </style>

          <h1 class="hero-heading">
            We are a leading growth consultancy that integrates cutting edge
            thinking, design and delivery to enable any company to turn
            volatility from a challenge to an opportunity.
          </h1>
          <div class="hero-text">
            <strong>Our mission</strong> is to build the growth engine for the
            giants of tomorrow.
          </div>
          <a href="#about" class="button-2 yellow w-button">
            Learn more
          </a>
        </div>
        </header>
        </div>
  );
}

export default App;
