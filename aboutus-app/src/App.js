import "./App.css";

function Footer() {
  return (
    <div className="fs-cc-components">
      <div fs-cc="banner" className="fs-cc-banner_component">
        <div className="fs-cc-banner_container">
          <div className="fs-cc-banner_text">
            By using this website, you agree to the storing of cookies on your
            device to enhance site navigation, analyse site usage, and assist in
            our marketing efforts. View our{" "}
            <a href="/privacy-policy">Privacy Policy</a>
            for more information.
          </div>
          <div className="fs-cc-banner_buttons-wrapper">
            <a fs-cc="allow" href="#" className="fs-cc-banner_button w-button">
              Got it!
            </a>
          </div>
        </div>
        <div fs-cc="interaction" className="fs-cc-banner_trigger"></div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="body">
      <div
        data-w-id="70f478b7-63de-7ab7-d587-46a760f56c36"
        className="preloader"
        data-ix="preloader"
      >
        <img
          src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/5f679f642baf7ce2c3eab5c2_oval.svg"
          width="50"
          alt=""
        />
      </div>
      <div
        data-animation="default"
        className="navigation-fixed w-nav"
        data-easing2="ease"
        data-easing="ease"
        data-collapse="medium"
        data-w-id="c3439578-02a4-f77f-f45a-01217f2a7517"
        role="banner"
        data-duration="400"
      >
        <div className="container w-container">
          <a
            href="/"
            aria-current="page"
            className="aller-logo w-nav-brand w--current"
          >
            <img
              src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a753ccc763725c35d2ba00_Modu_Primary_Logo_Full_Colour_RGB.svg"
              width="120"
              alt=""
              className="logo-black"
            />
          </a>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <a href="#hero-video" className="nav-link w-nav-link">
              HOME
            </a>
            <a href="#about" className="nav-link w-nav-link">
              About
            </a>
            <a href="#what-we-do" className="nav-link w-nav-link">
              WHAT WE DO
            </a>
            <a href="#who-we-work-with" className="nav-link w-nav-link">
              WHO WE WORK WITH
            </a>
            <a href="#leadership-team" className="nav-link w-nav-link">
              Team
            </a>
            <a href="#work-with-us" className="nav-link w-nav-link">
              Work with us
            </a>
            <a href="#contact" className="nav-link w-nav-link">
              Contact
            </a>
          </nav>
          <div className="menu-button w-nav-button">
            <div className="w-icon-nav-menu"></div>
            <div className="wf-section"></div>
          </div>
        </div>
      </div>
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
          >
            <img
              src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a75384762cc85810b24a8a_Modu_Primary_Logo_Inverted_RGB.svg"
              width="120"
              alt=""
              className="logo-white"
            />
          </a>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <a href="#hero-video" className="nav-link-transparent w-nav-link">
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
          <div className="menu-button w-nav-button">
            <div className="icon-3 w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
      <div
        data-poster-url="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/5f67a32f01a9196fba1e0c50_WebRes-poster-00001.jpg"
        data-video-urls="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/5f67a32f01a9196fba1e0c50_WebRes-transcode.mp4,https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/5f67a32f01a9196fba1e0c50_WebRes-transcode.webm"
        data-autoplay="true"
        data-loop="true"
        data-wf-ignore="true"
        id="hero-video"
        data-beta-bgvideo-upgrade="false"
        className="hero-home w-background-video w-background-video-atom"
      >
        <video
          id="e695e1f4-6854-04f9-e4ca-d3310a825097-video"
          autoplay=""
          loop=""
          muted=""
          playsinline=""
          data-wf-ignore="true"
          data-object-fit="cover"
        >
          <source
            src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/5f67a32f01a9196fba1e0c50_WebRes-transcode.mp4"
            data-wf-ignore="true"
          />
          <source
            src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/5f67a32f01a9196fba1e0c50_WebRes-transcode.webm"
            data-wf-ignore="true"
          />
        </video>
        <div className="centered-container hero">
          <h1 className="hero-heading">
            We are a leading growth consultancy that integrates cutting edge
            thinking, design and delivery to enable any company to turn
            volatility from a challenge to an opportunity.
          </h1>
          <div className="hero-text">
            <strong>Our mission</strong>
            is to build the growth engine for the giants of tomorrow.
          </div>
          <a href="#about" className="button-2 yellow w-button">
            Learn more
          </a>
        </div>
      </div>
      <div data-w-id="1ed91721-7108-eb29-28b5-6002547fc472">
        <div className="yellow-line wf-section"></div>
        <div id="about" className="about-section wf-section">
          <div className="image-text-col-wrapper">
            <div className="_2-col-text-content">
              <div className="subtitle subtitle-blue">ABOUT US</div>
              <h2 className="heading">
                Headquartered in Spitalfields, London, modu’s mission is to
                build the growth engine for the giants of tomorrow.
              </h2>
              <div className="section-text black">
                As a consultancy, we believe uncertainty and volatility defines
                much of the dynamics of business in the 21st century and our
                expertise lies in enabling companies to turn this volatility
                from a challenge into an opportunity.
                <br />
                <br />
                We do this by helping our clients identify growth opportunities
                and helping them build better products and experiences. Our
                method involves breaking down data, insight, industry expertise
                and consumer behaviour into patterns, or ‘units of thinking’ to
                identify opportunities and create a blueprint for growth.
                <br />
                <br />
                This blueprint is then executed through{" "}
                <strong>
                  modular impact, breaking down the big goals and challenges
                  into small actions and adaptations
                </strong>
                , enabling businesses to respond to the market as it changes,
                instead of reacting. Growth is unlocked through a 60 day outcome
                process, rapidly creating an impact.
              </div>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a75c02e4ee5215811d7409_About%20Us.jpg"
              loading="lazy"
              sizes="(max-width: 666px) 90vw, 600px"
              srcset="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a75c02e4ee5215811d7409_About%20Us-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a75c02e4ee5215811d7409_About%20Us.jpg 600w"
              alt="two men talking and looking at a mobile tablet"
              className="rounded-image"
            />
          </div>
        </div>
        <div id="what-we-do" className="our-services-section wf-section">
          <div className="centered-container services">
            <div className="centered-container-small">
              <div className="subtitle subtitle-blue">WHAT WE DO</div>
              <h2 className="heading-2 h2-center">
                We partner with our customers across three core disciplines
              </h2>
            </div>
            <div className="services-columns">
              <div className="service-wrapper">
                <div>
                  <img
                    src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a7a12c7cb1e59f7ee4d34d_noun_Brain_2998851.svg"
                    loading="lazy"
                    alt=""
                    className="focus-image"
                  />
                  <div className="section-text black services white">
                    <strong className="bold-text white roboto-mono-title">
                      Thinking
                    </strong>
                    <br />
                    <br />
                    ‍<br />
                    Unique perspectives to deliver unique outcomes. Rich
                    perspectives and thinking which operate in new ways.
                    Leveraging experience, research, data and insight to unlock
                    opportunities
                    <br />
                  </div>
                </div>
              </div>
              <div className="service-wrapper">
                <div>
                  <img
                    src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a7a12c7687e256955b5d90_noun_Technology_2626059%20(4).svg"
                    loading="lazy"
                    alt=""
                    className="global-connection-image"
                  />
                  <div className="section-text black services white">
                    <strong className="bold-text white roboto-mono-title">
                      Design
                    </strong>
                    <br />
                    <br />
                    <br />
                    Every journey begins with a single step. We’re iterating
                    endlessly in Creative and Design, Product Experience,
                    Customer Insights, UX and Service Design
                    <br />
                  </div>
                </div>
              </div>
              <div className="service-wrapper">
                <div>
                  <img
                    src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a7a12c2e49a6801005e409_noun_supply_4133986%20(2).svg"
                    loading="lazy"
                    alt=""
                    className="people-image"
                  />
                  <div className="section-text black services white">
                    <strong className="bold-text white roboto-mono-title">
                      Delivery
                    </strong>
                    <br />
                    <br />
                    <br />
                    Building new &amp;optimising existing products
                    &amp;services. Harnessing the power of MACH architecture to
                    accelerate delivery daily and achieve outcomes every 60 days
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="Who-we-work-with"
          className="about-section who-we-work-with wf-section"
        >
          <div id="who-we-work-with" className="wrapper about-wrapper">
            <div className="centered-container-small">
              <div className="subtitle subtitle-blue subtitle-m-60">
                WHO WE WORK WITH
              </div>
            </div>
            <div className="div-block-3">
              <div className="client-logo-wrapper _5">
                <div
                  id="w-node-c8704171-6e3f-0226-7699-890be6fddcc1-07eab589"
                  className="client-logo-card"
                >
                  <a
                    href="https://www.10xbanking.com/"
                    target="_blank"
                    className="link-block-2 w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d2363ccc07eb32fb919_10xbanking-logo.svg"
                      loading="lazy"
                      alt="10x Logo"
                      className="client-logo client-logo-s"
                    />
                  </a>
                </div>
                <div
                  id="w-node-c8704171-6e3f-0226-7699-890be6fddcc4-07eab589"
                  className="client-logo-card"
                >
                  <a
                    href="https://www.natwest.com/"
                    target="_blank"
                    className="link-block-2 w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78e63dfdf5e5e585ad3e7_Natwest_logo_Horizontal.svg"
                      loading="lazy"
                      alt="10x Logo"
                      className="client-logo"
                    />
                  </a>
                </div>
                <div
                  id="w-node-c8704171-6e3f-0226-7699-890be6fddcc7-07eab589"
                  className="client-logo-card"
                >
                  <a
                    href="https://www.11onze.cat/en/"
                    target="_blank"
                    className="link-block-2 w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d233e6730704c61df78_11Onze-logo.jpeg"
                      loading="lazy"
                      alt="10x Logo"
                      className="client-logo client-logo-xs"
                    />
                  </a>
                </div>
                <div
                  id="w-node-c8704171-6e3f-0226-7699-890be6fddcca-07eab589"
                  className="client-logo-card"
                >
                  <a
                    href="https://www.deloittedigital.com/"
                    target="_blank"
                    className="link-block-2 w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d238028087bf3106e64_Deloitte_Digital_Logo.jpeg"
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 26vw, (max-width: 991px) 11vw, 14vw"
                      srcset="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d238028087bf3106e64_Deloitte_Digital_Logo-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d238028087bf3106e64_Deloitte_Digital_Logo.jpeg 789w"
                      alt="10x Logo"
                      className="client-logo client-logo-s"
                    />
                  </a>
                </div>
                <div
                  id="w-node-_77617b36-5de4-2dd5-e66c-e3ea0c28874d-07eab589"
                  className="client-logo-card"
                >
                  <a
                    href="https://www.naturealpha.ai/"
                    target="_blank"
                    className="link-block-2 w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a8cc950ce07fbaa353ff3e_Nature%20Alpha-logo.png"
                      loading="lazy"
                      alt="Nature Alpha Logo"
                      className="client-logo client-logo-xxs"
                    />
                  </a>
                </div>
                <div
                  id="w-node-_08c1e257-d63d-0d91-5990-a4c56c117507-07eab589"
                  className="client-logo-card"
                >
                  <a
                    href="#"
                    target="_blank"
                    className="link-block-2 w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d23df7a2d19fd8610f8_Economyz-logo.png"
                      loading="lazy"
                      alt="Economyz Logo"
                      className="client-logo"
                    />
                  </a>
                </div>
                <div
                  id="w-node-_37954005-f3d0-459e-4170-ee5da97e8480-07eab589"
                  className="client-logo-card"
                >
                  <a
                    href="https://www.allica.bank/"
                    target="_blank"
                    className="link-block-2 w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d23f13f297da737b710_AllicaBank_OrangeBlue_RGB-002-sponsor-logo.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 30vw, (max-width: 991px) 11vw, 15vw"
                      srcset="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d23f13f297da737b710_AllicaBank_OrangeBlue_RGB-002-sponsor-logo-p-500.png 500w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d23f13f297da737b710_AllicaBank_OrangeBlue_RGB-002-sponsor-logo-p-800.png 800w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d23f13f297da737b710_AllicaBank_OrangeBlue_RGB-002-sponsor-logo-p-1080.png 1080w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d23f13f297da737b710_AllicaBank_OrangeBlue_RGB-002-sponsor-logo-p-1600.png 1600w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d23f13f297da737b710_AllicaBank_OrangeBlue_RGB-002-sponsor-logo.png 5098w"
                      alt="Allica Bank Logo"
                      className="client-logo"
                    />
                  </a>
                </div>
                <div
                  id="w-node-_7eeef7e7-b085-e25a-5771-dac73065679c-07eab589"
                  className="client-logo-card"
                >
                  <a
                    href="https://www.limejump.com/"
                    target="_blank"
                    className="link-block-2 w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d248363f61b5b8ff627_Limejump-Logo.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 30vw, (max-width: 991px) 11vw, 15vw"
                      srcset="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d248363f61b5b8ff627_Limejump-Logo-p-500.png 500w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d248363f61b5b8ff627_Limejump-Logo-p-800.png 800w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d248363f61b5b8ff627_Limejump-Logo-p-1080.png 1080w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d248363f61b5b8ff627_Limejump-Logo-p-1600.png 1600w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d248363f61b5b8ff627_Limejump-Logo-p-2000.png 2000w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d248363f61b5b8ff627_Limejump-Logo-p-2600.png 2600w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d248363f61b5b8ff627_Limejump-Logo-p-3200.png 3200w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d248363f61b5b8ff627_Limejump-Logo.png 4698w"
                      alt="Limejump Logo"
                      className="client-logo"
                    />
                  </a>
                </div>
                <div
                  id="w-node-c909b590-5464-b3fd-ae62-6584f07ad8aa-07eab589"
                  className="client-logo-card"
                >
                  <a
                    href="https://www.bain.com/"
                    target="_blank"
                    className="link-block-2 w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d23df7a2d1cfa8610f7_1280px-Bain_%26_Company_logo.svg.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 31vw, (max-width: 991px) 11vw, 16vw"
                      srcset="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d23df7a2d1cfa8610f7_1280px-Bain_%26_Company_logo.svg-p-500.png 500w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d23df7a2d1cfa8610f7_1280px-Bain_%26_Company_logo.svg-p-800.png 800w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d23df7a2d1cfa8610f7_1280px-Bain_%26_Company_logo.svg-p-1080.png 1080w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d23df7a2d1cfa8610f7_1280px-Bain_%26_Company_logo.svg.png 1280w"
                      alt="Bain &amp; Company Logo"
                      className="client-logo client-logo-l"
                    />
                  </a>
                </div>
                <div
                  id="w-node-f458c217-eec3-c867-5bec-42cfb1fc23a7-07eab589"
                  className="client-logo-card"
                >
                  <a
                    href="https://www.weave.works/"
                    target="_blank"
                    className="link-block-2 w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d23b05b98f347cc05b1_WeaveWorks-logo.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 31vw, (max-width: 991px) 11vw, 16vw"
                      srcset="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d23b05b98f347cc05b1_WeaveWorks-logo-p-500.png 500w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d23b05b98f347cc05b1_WeaveWorks-logo-p-800.png 800w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d23b05b98f347cc05b1_WeaveWorks-logo-p-1080.png 1080w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d23b05b98f347cc05b1_WeaveWorks-logo.png 1200w"
                      alt="Weave Works Logo"
                      className="client-logo client-logo-l"
                    />
                  </a>
                </div>
                <div
                  id="w-node-_4ab28a2c-77cc-7f13-8db2-5152984f1d67-07eab589"
                  className="client-logo-card"
                >
                  <a
                    href="https://www.mettle.co.uk/"
                    target="_blank"
                    className="link-block-2 w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d23c1d07cd2dbef25ad_Mettle-Logo-Black.png"
                      loading="lazy"
                      alt="Mettle Logo"
                      className="client-logo client-logo-s"
                    />
                  </a>
                </div>
                <div
                  id="w-node-dccc81ee-1620-b401-c797-9e7da1f1e9f6-07eab589"
                  className="client-logo-card"
                >
                  <a
                    href="https://www.dekopay.com/"
                    target="_blank"
                    className="link-block-2 w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d2381c35f60816db32a_deco-logo.jpeg"
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 26vw, (max-width: 991px) 11vw, 14vw"
                      srcset="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d2381c35f60816db32a_deco-logo-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d2381c35f60816db32a_deco-logo-p-800.jpeg 800w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d2381c35f60816db32a_deco-logo-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d2381c35f60816db32a_deco-logo.jpeg 1457w"
                      alt="Deko Logo"
                      className="client-logo client-logo-s"
                    />
                  </a>
                </div>
                <div
                  id="w-node-c64c7481-3565-6a96-973b-3c385a9a1733-07eab589"
                  className="client-logo-card"
                >
                  <a
                    href="https://www.vodeno.com/"
                    target="_blank"
                    className="link-block-2 w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d23cbad4fb82686c046_Vodeno-logo.png"
                      loading="lazy"
                      alt="Vodeno Logo"
                      className="client-logo"
                    />
                  </a>
                </div>
                <div
                  id="w-node-f26373d2-15a6-151d-e374-16041044d668-07eab589"
                  className="client-logo-card"
                >
                  <a
                    href="https://www.infogrid.io/"
                    target="_blank"
                    className="link-block-2 w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d241a81d8219c90b833_Infogrid-logo.png"
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 30vw, (max-width: 991px) 11vw, 15vw"
                      srcset="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d241a81d8219c90b833_Infogrid-logo-p-500.png 500w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d241a81d8219c90b833_Infogrid-logo-p-800.png 800w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d241a81d8219c90b833_Infogrid-logo-p-1080.png 1080w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a78d241a81d8219c90b833_Infogrid-logo.png 1986w"
                      alt="Infogrid Logo"
                      className="client-logo"
                    />
                  </a>
                </div>
                <div
                  id="w-node-_79841a13-931b-0c80-1602-21b768ca49ee-07eab589"
                  className="client-logo-card"
                >
                  <a
                    href="https://www.118118money.com/"
                    target="_blank"
                    className="link-block-2 w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a8cd201719c61390fd114b_118118-money-logo-2.png"
                      loading="lazy"
                      alt="118 118 Money Logo"
                      className="client-logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="leadership-team" className="team-section wf-section">
          <div className="centered-container team">
            <div className="centered-container-small">
              <div className="subtitle subtitle-blue">OUR PEOPLE</div>
              <h2 className="heading-2 h2-center">
                We are a diverse team of client-side practitioners who are
                rethinking everything
              </h2>
            </div>
            <div className="members">
              <div className="member-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61deefa284641e12c7569487_Tom.png"
                  loading="lazy"
                  alt="Tom Barnett Headshot"
                  className="profile-image"
                />
                <div className="member-name">Tom Barnett</div>
                <div className="member-position">COO &amp;Co-Founder</div>
              </div>
              <div className="member-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61deefa19d5e43ed2434e3d6_Darren.png"
                  loading="lazy"
                  alt="Darren Linden Headshot"
                  className="profile-image"
                />
                <div className="member-name">Darren Linden</div>
                <div className="member-position">CEO</div>
              </div>
              <div className="member-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/63dcf07404488e44da47a563_Angie_Main.png"
                  loading="lazy"
                  alt="Angie Main Headshot"
                  className="profile-image"
                />
                <div className="member-name">Angie Main</div>
                <div className="member-position">
                  Organisational Development Coach &amp;Consultant
                </div>
              </div>
              <div className="member-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61deefa1b875fb064b036a8b_Chris.png"
                  loading="lazy"
                  alt="Chris Geldard Headshot"
                  className="profile-image"
                />
                <div className="member-name">Chris Geldard</div>
                <div className="member-position">Chairman &amp;Co-Founder</div>
              </div>
            </div>
            <div className="members">
              <div className="member-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/627bbab4fca8065faacfb52c_Sacha%20Rook.png"
                  loading="lazy"
                  alt="Sacha Rook Headshot"
                  className="profile-image"
                />
                <div className="member-name">Sacha Rook</div>
                <div className="member-position">Non-Executive Director</div>
              </div>
              <div className="member-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/62bc26b187dfff5a1962db41_Roy%20Aston.png"
                  loading="lazy"
                  alt="Roy Aston&#x27;s  Headshot"
                  className="profile-image"
                />
                <div className="member-name">
                  <strong>Roy Aston</strong>
                </div>
                <div className="member-position">Non-Executive Director</div>
              </div>
              <div className="member-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/633574ae4d24bc12d4171679_Colin%20McQuade.png"
                  loading="lazy"
                  alt="Colin McQuade Headshot"
                  className="profile-image"
                />
                <div className="member-name">Colin McQuade</div>
                <div className="member-position">Non-Executive Director</div>
              </div>
            </div>
            <div className="members">
              <div className="member-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61deefa1e8dcc543c4a6db0a_David.png"
                  loading="lazy"
                  alt="David Laing Headshot"
                  className="profile-image"
                />
                <div className="member-name">David Laing</div>
                <div className="member-position">CFO</div>
              </div>
              <div className="member-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/63356785c6014d01a8f9e412_Honor%20Paddock.png"
                  loading="lazy"
                  alt="Honor Paddock Headshot"
                  className="profile-image"
                />
                <div className="member-name">Honor Paddock</div>
                <div className="member-position">Head of Marketing</div>
              </div>
              <div className="member-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/63dceccd1bb0b7e805edabf4_Toby_Sexton.png"
                  loading="lazy"
                  alt="Toby Sexton Headshot"
                  className="profile-image"
                />
                <div className="member-name">Toby Sexton</div>
                <div className="member-position">Operations Lead</div>
              </div>
              <div className="member-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/6269368337318ce39396209f_Ann-Marie.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 67vw, (max-width: 767px) 13vw, 14vw"
                  srcset="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/6269368337318ce39396209f_Ann-Marie-p-500.png 500w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/6269368337318ce39396209f_Ann-Marie.png 600w"
                  alt="Annie O’Brien Headshot"
                  className="profile-image"
                />
                <div className="member-name">Annie O’Brien</div>
                <div className="member-position">People Operations Manager</div>
              </div>
            </div>
            <div className="members">
              <div className="member-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/63356726a5a560256be91810_Kelly%20Brazier.png"
                  loading="lazy"
                  alt="Kelly Brazier Headshot"
                  className="profile-image"
                />
                <div className="member-name">Kelly Brazier</div>
                <div className="member-position">Finance Manager</div>
              </div>
              <div className="member-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/63dceccdb8eaaf09b756f708_Jen_Robson.png"
                  loading="lazy"
                  alt="Jen Robson Headshot"
                  className="profile-image"
                />
                <div className="member-name">Jen Robson</div>
                <div className="member-position">
                  Talent Acquisition Manager
                </div>
              </div>
              <div className="member-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/6269162034540dcdec9f27b2_Ross.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 67vw, (max-width: 767px) 13vw, 14vw"
                  srcset="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/6269162034540dcdec9f27b2_Ross-p-500.png 500w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/6269162034540dcdec9f27b2_Ross.png 600w"
                  alt="Ross Headshot"
                  className="profile-image-copy"
                />
                <div className="member-name">
                  ‍<strong>Ross Butler</strong>
                </div>
                <div className="member-position">Talent Sourcer</div>
              </div>
              <div className="member-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/6447b58daf782d56c0b6d031_Charlotte_Robinson%20.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 67vw, (max-width: 767px) 13vw, 14vw"
                  srcset="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/6447b58daf782d56c0b6d031_Charlotte_Robinson%20-p-500.png 500w, https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/6447b58daf782d56c0b6d031_Charlotte_Robinson%20.png 600w"
                  alt="Charlotte Robinson Headshot"
                  className="profile-image-copy"
                />
                <div className="member-name">
                  ‍<strong>Charlotte Robinson</strong>
                </div>
                <div className="member-position">
                  Talent Acquisition Associate
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="work-with-us" className="work-with-us wf-section">
          <div className="centered-container why-us">
            <div className="wrapper">
              <div className="centered-container-small">
                <div className="subtitle subtitle-yellow">WORK WITH US</div>
                <h2 className="heading-2 h2-center white">
                  We are growing our digital consulting &amp;delivery
                  organisation and we &#x27;re always keen to work with new
                  people.
                </h2>
              </div>
              <div className="section-text">
                We &#x27;d love to hear from you if you think you can help us
                rethink how things are done and create a new whitespace.
                <br />
                <br />
                We are looking for:
              </div>
              <div className="w-layout-grid roles-grid">
                <div
                  id="w-node-_790fd235-7fa1-c797-1cf0-33d083ee4326-07eab589"
                  className="roles-card"
                >
                  <div className="roles-text">
                    Strategic
                    <br />
                    Thinkers
                  </div>
                </div>
                <div
                  id="w-node-a49ff584-224f-b37c-6368-aed4f7897c7d-07eab589"
                  className="roles-card"
                >
                  <div className="roles-text">Delivery Leads</div>
                </div>
                <div
                  id="w-node-_6309550d-6512-f1fe-2ef9-b2045b3ed8c6-07eab589"
                  className="roles-card"
                >
                  <div className="roles-text">Tech Leads</div>
                </div>
                <div
                  id="w-node-_8d31b421-05ac-d123-8617-91fd88639660-07eab589"
                  className="roles-card"
                >
                  <div className="roles-text">Product Managers</div>
                </div>
                <div
                  id="w-node-_7dee52e9-cb06-86ff-0747-4f4ec538738b-07eab589"
                  className="roles-card"
                >
                  <div className="roles-text">
                    Software
                    <br />
                    Engineers
                  </div>
                </div>
                <div
                  id="w-node-cf7668f7-0014-872c-51c1-0b5a5a7d91ca-07eab589"
                  className="roles-card"
                >
                  <div className="roles-text">UX/UI Designers</div>
                </div>
              </div>
              <a
                href="https://careers.modu.digital/"
                target="_blank"
                className="button-2 yellow blue w-button"
              >
                Find out more
              </a>
            </div>
          </div>
        </div>
        <div id="contact" className="contact-section wf-section">
          <div className="centered-container contact">
            <h1 className="section-heading">Get in touch today</h1>
            <a href="mailto:hello@modu.digital" className="button-2 w-button">
              Email us
            </a>
            <div className="sm-links">
              <a
                href="https://www.linkedin.com/company/modudigital/?viewAsMember=true"
                target="_blank"
                className="sm-link"
              >
                
              </a>
              <a
                href="https://twitter.com/ModuDigital"
                target="_blank"
                className="sm-link"
              >
                
              </a>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/61a7a58ad71d4e494e9dce8e_Modu_Brand_Mark_Inverted_RGB.svg"
              loading="lazy"
              alt=""
              className="brand-icon"
            />
            <div className="text-block address address-white">
              <strong>London Office - </strong>
              68-80 Hanbury Street, London, E1 5JL
            </div>
            <div className="text-block">
              <a href="/modern-slavery-policy" className="policies">
                Modern Slavery Policy
              </a>
              |{" "}
              <a href="/privacy-policy" className="policies">
                Privacy Policy
              </a>
              | Copyright © 2023 Modu.Digital. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
