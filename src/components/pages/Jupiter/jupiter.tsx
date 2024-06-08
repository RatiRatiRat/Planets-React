import { useState } from "react";
import Navbar from "../../navbar/navbar";
import "./Jupiter.css";
import planets from "../data.json";
import JupiterSVG from "./Jupiter-images/Jupiter.svg";
import JupiterSVG2 from "./Jupiter-images/Jupiter-Struct.svg";
import JupiterSVG3 from "./Jupiter-images/Jupiter-Geology.svg";

interface Planet {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
}

const Jupiter = () => {
  const mercuryData = planets.find(
    (planet: Planet) => planet.name === "Jupiter"
  );
  const {
    name,
    overview,
    structure,
    geology,
    rotation,
    revolution,
    radius,
    temperature,
  } = mercuryData as Planet;

  // State to manage which content and image to display
  const [currentContent, setCurrentContent] = useState(overview.content);
  const [currentImage, setCurrentImage] = useState(JupiterSVG);

  // Function to handle changing content and image
  const handleContentChange = (content: string, image: string) => {
    setCurrentContent(content);
    setCurrentImage(image);
  };

  return (
    <div>
      <Navbar />
      <div className="Jupiter-Image">
        <img className="Jupiter-Images" src={currentImage} alt="" />
      </div>
      <div className="Jupiter-Testimonials">
        <h1 className="Jupiter">{name}</h1>
        <p className="Jupiter-p">{currentContent}</p>
      </div>
      <div className="Jupiter-Buttons">
        <button
          className="Jupiter-ovrewiev"
          onClick={() => handleContentChange(overview.content, JupiterSVG)}
        >
          01 Overview
        </button>
        <button
          className="Jupiter-structure"
          onClick={() => handleContentChange(structure.content, JupiterSVG2)}
        >
          02 Internal Structure
        </button>
        <button
          className="Jupiter-surface"
          onClick={() => handleContentChange(geology.content, JupiterSVG3)}
        >
          03 Surface Geology
        </button>
      </div>
      <div className="Jupiter-Footer">
        <div className="Jupiter-info">
          <h4 className="Jupiter-H4">Rotation Time</h4>
          <span className="Jupiter-Rotation">{rotation}</span>
        </div>
        <div className="Jupiter-info">
          <h4 className="Jupiter-H4">Revolution Time</h4>
          <span className="Jupiter-Rotation">{revolution}</span>
        </div>
        <div className="Jupiter-info">
          <h4 className="Jupiter-H4">Radius</h4>
          <span className="Jupiter-Rotation">{radius}</span>
        </div>
        <div className="Jupiter-info">
          <h4 className="Jupiter-H4">AVERAGE.TEMP</h4>
          <span className="Jupiter-Rotation">{temperature}</span>
        </div>
      </div>
    </div>
  );
};

export default Jupiter;
