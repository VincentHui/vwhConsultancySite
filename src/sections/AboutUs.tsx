import "./AboutUs.css";

export function AboutUs() {
  return (
    <div>
      <div>
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
              alt="two men talking and looking at a mobile tablet"
              className="rounded-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
