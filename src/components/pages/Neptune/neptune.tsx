import { useState } from "react";
import Navbar from "../../navbar/navbar";
import "./neptune.css";
import planets from "../data.json";
import NeptuneSVG from "./Neptune-images/Neptune.svg";
import NeptuneSVG2 from "./Neptune-images/Neptune-Struct.svg";
import NeptuneSVG3 from "./Neptune-images/Neptune-Geology.svg";

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

const Neptune = () => {
  const mercuryData = planets.find(
    (planet: Planet) => planet.name === "Neptune"
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
  const [currentImage, setCurrentImage] = useState(NeptuneSVG);

  // 
  const handleContentChange = (content: string, image: string) => {
    setCurrentContent(content);
    setCurrentImage(image);
  };

  return (
    <div>
      <Navbar />
      <div className="Neptune-Image">
        <img className="Neptune-Images" src={currentImage} alt="" />
      </div>
      <div className="Neptune-Testimonials">
        <h1 className="Neptune">{name}</h1>
        <p className="Neptune-p">{currentContent}</p>
      </div>
      <div className="Neptune-Buttons">
        <button
          className="Neptune-ovrewiev"
          onClick={() => handleContentChange(overview.content, NeptuneSVG )}
        >
          01 Overview
        </button>
        <button
          className="Neptune-structure"
          onClick={() => handleContentChange(structure.content, NeptuneSVG2)}
        >
          02 Internal Structure
        </button>
        <button
          className="Neptune-surface"
          onClick={() => handleContentChange(geology.content,NeptuneSVG3)}
        >
          03 Surface Geology
        </button>
      </div>
      <div className="Neptune-Footer">
        <div className="Neptune-info">
          <h4 className="Neptune-H4">Rotation Time</h4>
          <span className="Neptune-Rotation">{rotation}</span>
        </div>
        <div className="Neptune-info">
          <h4 className="Neptune-H4">Revolution Time</h4>
          <span className="Neptune-Rotation">{revolution}</span>
        </div>
        <div className="Neptune-info">
          <h4 className="Neptune-H4">Radius</h4>
          <span className="Neptune-Rotation">{radius}</span>
        </div>
        <div className="Neptune-info">
          <h4 className="Neptune-H4">AVERAGE.TEMP</h4>
          <span className="Neptune-Rotation">{temperature}</span>
        </div>
      </div>
    </div>
  );
};

export default Neptune;


