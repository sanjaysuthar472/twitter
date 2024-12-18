import React from "react";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";

function App() {
  return (
    <>
      <div className="flex md:container mx-auto my-4">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </>
  );
}

export default App;
