import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Bio from "./components/Bio/Bio";

const App = () => {
  return (
    <body className="w3-light-grey">
      <div className="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
        <div className="w3-row-padding">
          <div className="w3-third">
            <Bio />
          </div>
          <div className="w3-twothird">
            <Experience />
            <Education />
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
};

export default App;
