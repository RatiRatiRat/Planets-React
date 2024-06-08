import { useState } from "react";
import Navbar from "../../navbar/navbar";
import "./Saturn.css";
import planets from "../data.json";
import SaturnSVG from "./Saturn-images/Saturn.svg";
import SaturnSVG2 from "./Saturn-images/Saturn-Struct.svg";
import SaturnSVG3 from "./Saturn-images/Saturn-Geology.svg";



const Saturn = () => {
  const mercuryData = planets.find(
    (planet: Planet) => planet.name === "Saturn"
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
  const [currentImage, setCurrentImage] = useState(SaturnSVG);

  // Function to handle changing content and image
  const handleContentChange = (content: string, image: string) => {
    setCurrentContent(content);
    setCurrentImage(image);
  };

  return (
    <div>
      <Navbar />
      <div className="Saturn-Image">
        <img className="Saturn-Images" src={currentImage} alt="" />
      </div>
      <div className="Saturn-Testimonials">
        <h1 className="Saturn">{name}</h1>
        <p className="Saturn-p">{currentContent}</p>
      </div>
      <div className="Saturn-Buttons">
        <button
          className="Saturn-ovrewiev"
          onClick={() => handleContentChange(overview.content, SaturnSVG)}
        >
          01 Overview
        </button>
        <button
          className="Saturn-structure"
          onClick={() => handleContentChange(structure.content, SaturnSVG2)}
        >
          02 Internal Structure
        </button>
        <button
          className="Saturn-surface"
          onClick={() => handleContentChange(geology.content, SaturnSVG3)}
        >
          03 Surface Geology
        </button>
      </div>
      <div className="Saturn-Footer">
        <div className="Saturn-info">
          <h4 className="Saturn-H4">Rotation Time</h4>
          <span className="Saturn-Rotation">{rotation}</span>
        </div>
        <div className="Saturn-info">
          <h4 className="Saturn-H4">Revolution Time</h4>
          <span className="Saturn-Rotation">{revolution}</span>
        </div>
        <div className="Saturn-info">
          <h4 className="Saturn-H4">Radius</h4>
          <span className="Saturn-Rotation">{radius}</span>
        </div>
        <div className="Saturn-info">
          <h4 className="Saturn-H4">AVERAGE.TEMP</h4>
          <span className="Saturn-Rotation">{temperature}</span>
        </div>
      </div>
    </div>
  );
};

export default Saturn;
