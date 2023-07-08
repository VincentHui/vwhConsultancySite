import React from "react";
import { WhatWeDoSection } from "./sections/WhatWeDo";
import { WhoAreWeSection } from "./sections/WhoAreWe";
import { WorkWithUsSection } from "./sections/WorkWithUs";

function App() {
  return (
    <div>
      <WhoAreWeSection />
      <WhatWeDoSection />
      <WorkWithUsSection />
    </div>
  );
}

export default App;
