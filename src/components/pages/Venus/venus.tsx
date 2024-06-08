import { useState } from "react";
import Navbar from "../../navbar/navbar";
import "./Venus.css";
import planets from "../data.json";
import VenusSVG from "./venus-images/Venus.svg";
import VenusSVG2 from "./venus-images/Venus-Struct.svg";
import VenusSVG3 from "./venus-images/Venus-Geology.svg";
import "./venus"



const Venus = () => {
  const mercuryData = planets.find(
    (planet: Planet) => planet.name === "Venus"
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
  const [currentImage, setCurrentImage] = useState(VenusSVG);

  // Function to handle changing content and image
  const handleContentChange = (content: string, image: string) => {
    setCurrentContent(content);
    setCurrentImage(image);
  };

  return (
    <div>
      <Navbar />
      <div className="Venus-Image">
        <img className="Venus-Images" src={currentImage} alt="" />
      </div>
      <div className="Venus-Testimonials">
        <h1 className="Venus">{name}</h1>
        <p className="venus-p">{currentContent}</p>
      </div>
      <div className="Venus-Buttons">
        <button
          className="Venus-ovrewiev"
          onClick={() => handleContentChange(overview.content, VenusSVG)}
        >
          01 Overview
        </button>
        <button
          className="venus-structure"
          onClick={() => handleContentChange(structure.content, VenusSVG2)}
        >
          02 Internal Structure
        </button>
        <button
          className="venus-surface"
          onClick={() => handleContentChange(geology.content, VenusSVG3)}
        >
          03 Surface Geology
        </button>
      </div>
      <div className="Venus-Footer">
        <div className="venus-info">
          <h4 className="Venus-H4">Rotation Time</h4>
          <span className="Venus-Rotation">{rotation}</span>
        </div>
        <div className="venus-info">
          <h4 className="Venus-H4">Revolution Time</h4>
          <span className="Venus-Rotation">{revolution}</span>
        </div>
        <div className="venus-info">
          <h4 className="Venus-H4">Radius</h4>
          <span className="Venus-Rotation">{radius}</span>
        </div>
        <div className="venus-info">
          <h4 className="Venus-H4">AVERAGE.TEMP</h4>
          <span className="Venus-Rotation">{temperature}</span>
        </div>
      </div>
    </div>
  );
};

export default Venus;
