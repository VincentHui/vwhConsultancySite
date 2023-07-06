import "./App.css";

function Footer() {
  return (
    <div className="fs-cc-components">
      <div fs-cc="banner" className="fs-cc-banner_component">
        <div className="fs-cc-banner_container">
          
          <div className="fs-cc-banner_buttons-wrapper">
            
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
        data-poster-url="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/5f67a32f01a9196fba1e0c50_WebRes-poster-00001.jpg"
        data-video-urls="https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/5f67a32f01a9196fba1e0c50_WebRes-transcode.mp4,https://uploads-ssl.webflow.com/5f679f64b6be43a8f3af1324/5f67a32f01a9196fba1e0c50_WebRes-transcode.webm"
        data-autoplay="true"
        data-loop="true"
        data-wf-ignore="true"
        id="hero-video"
        data-beta-bgvideo-upgrade="false"
        className="hero-home w-background-video w-background-video-atom"
      >
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
        
            
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
