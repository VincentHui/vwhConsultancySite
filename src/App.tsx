import React from "react";
import { WhatWeDoSection } from "./sections/WhatWeDo";
import { WhoAreWeSection } from "./sections/WhoAreWe";
import { AboutUs } from "./sections/AboutUs";

function App() {
  return (
    <div>
      <WhoAreWeSection />
      <AboutUs />
      <WhatWeDoSection />
    </div>
  );
}

export default App;
