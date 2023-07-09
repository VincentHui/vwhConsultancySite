import React from "react";
import { WhatWeDoSection } from "./sections/WhatWeDo";
import { WhoAreWeSection } from "./sections/WhoAreWe";
import { AboutUs } from "./sections/AboutUs";
import { ContactUsSection } from "./sections/ContactUs";

function App() {
  return (
    <div>
      <WhoAreWeSection />
      <AboutUs />
      <WhatWeDoSection />
      <ContactUsSection />
    </div>
  );
}
export default App;
