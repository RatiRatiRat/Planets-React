import Navbar from '../../navbar/navbar'
import { useState } from "react";

import "./Mars.css";
import planets from "../data.json";
import MarsSVG from "./Mars-images/Mars.svg";
import MarsSVG2 from "./Mars-images/Mars-Struct.svg";
import MarsSVG3 from "./Mars-images/Mars-Geology.svg";


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

const mars = () => {
  const mercuryData = planets.find(
    (planet: Planet) => planet.name === "Mars"
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
  const [currentImage, setCurrentImage] = useState(MarsSVG);

  // Function to handle changing content and image
  const handleContentChange = (content: string, image: string) => {
    setCurrentContent(content);
    setCurrentImage(image);
  };

  return (
    <div>
      <Navbar />
      <div className="Mars-Image">
        <img className="Mars-Images" src={currentImage} alt="" />
      </div>
      <div className="Mars-Testimonials">
        <h1 className="Mars">{name}</h1>
        <p className="Mars-p">{currentContent}</p>
      </div>
      <div className="Mars-Buttons">
        <button
          className="Mars-ovrewiev"
          onClick={() => handleContentChange(overview.content, MarsSVG)}
        >
          01 Overview
        </button>
        <button
          className="Mars-structure"
          onClick={() => handleContentChange(structure.content,MarsSVG2)}
        >
          02 Internal Structure
        </button>
        <button
          className="Mars-surface"
          onClick={() => handleContentChange(geology.content, MarsSVG3)}
        >
          03 Surface Geology
        </button>
      </div>
      <div className="Mars-Footer">
        <div className="Mars-info">
          <h4 className="Mars-H4">Rotation Time</h4>
          <span className="Mars-Rotation">{rotation}</span>
        </div>
        <div className="Mars-info">
          <h4 className="Mars-H4">Revolution Time</h4>
          <span className="Mars-Rotation">{revolution}</span>
        </div>
        <div className="Mars-info">
          <h4 className="Mars-H4">Radius</h4>
          <span className="Mars-Rotation">{radius}</span>
        </div>
        <div className="Mars-info">
          <h4 className="Mars-H4">AVERAGE.TEMP</h4>
          <span className="Mars-Rotation">{temperature}</span>
        </div>
      </div>
    </div>
  );
};

export default mars;

