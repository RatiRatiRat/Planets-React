import { useState } from "react";
import Navbar from "../../navbar/navbar";
import "./mercury.css";
import planets from "../data.json";
import MercurySVG from "./images/Mercury.svg";
import MercurySVG2 from "./images/Mercury-Struct.svg";
import MercurySVG3 from "./images/Mercury-Geology.svg";

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

const Mercury = () => {
  const mercuryData = planets.find(
    (planet: Planet) => planet.name === "Mercury"
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
  const [currentImage, setCurrentImage] = useState(MercurySVG);

  // Function to handle changing content and image
  const handleContentChange = (content: string, image: string) => {
    setCurrentContent(content);
    setCurrentImage(image);
  };

  return (
    <div>
      <Navbar />
      <div className="Mercury-Image">
        <img className="Mercury-Images" src={currentImage} alt="" />
      </div>
      <div className="Mercury-Testimonials">
        <h1 className="Mercury">{name}</h1>
        <p className="mercury-p">{currentContent}</p>
      </div>
      <div className="Mercury-Buttons">
        <button
          className="mercury-ovrewiev"
          onClick={() => handleContentChange(overview.content, MercurySVG)}
        >
          01 Overview
        </button>
        <button
          className="mercury-ovrewiev"
          onClick={() => handleContentChange(structure.content, MercurySVG2)}
        >
          02 Internal Structure
        </button>
        <button
          className="mercury-ovrewiev"
          onClick={() => handleContentChange(geology.content, MercurySVG3)}
        >
          03 Surface Geology
        </button>
      </div>
      <div className="Mercury-Footer">
        <div className="mercury-info">
          <h4 className="Mercury-H4">Rotation Time</h4>
          <span className="Mercury-Rotation">{rotation}</span>
        </div>
        <div className="mercury-info">
          <h4 className="Mercury-H4">Revolution Time</h4>
          <span className="Mercury-Rotation">{revolution}</span>
        </div>
        <div className="mercury-info">
          <h4 className="Mercury-H4">Radius</h4>
          <span className="Mercury-Rotation">{radius}</span>
        </div>
        <div className="mercury-info">
          <h4 className="Mercury-H4">AVERAGE.TEMP</h4>
          <span className="Mercury-Rotation">{temperature}</span>
        </div>
      </div>
    </div>
  );
};

export default Mercury;
