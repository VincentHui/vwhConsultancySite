import React from "react";
import { WhatWeDoSection } from "./sections/WhatWeDo";
import WhoAreWeSection from "./sections/WhoAreWe";
import ContactUsSection from "./sections/ContactUs";

function App() {
  return (
    <div>
      <WhoAreWeSection />
      <WhatWeDoSection />
      <ContactUsSection children={undefined} />
    </div>
  );
}
//
export default App;
