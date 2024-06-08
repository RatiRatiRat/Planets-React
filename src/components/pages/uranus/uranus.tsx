import { useState } from "react";
import Navbar from "../../navbar/navbar";
import "./uranus.css";
import planets from "../data.json";
import UranusSVG from "./Uranus-images/Uranus.svg";
import UranusSVG2 from "./Uranus-images/Uranus-struct.svg";
import UranusSVG3 from "./Uranus-images/Uranus-Geology.svg";

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

const uranus = () => {
  const mercuryData = planets.find(
    (planet: Planet) => planet.name === "Uranus"
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
  const [currentImage, setCurrentImage] = useState(UranusSVG);

  // Function to handle changing content and image
  const handleContentChange = (content: string, image: string) => {
    setCurrentContent(content);
    setCurrentImage(image);
  };

  return (
    <div>
      <Navbar />
      <div className="Uranus-Image">
        <img className="Uranus-Images" src={currentImage} alt="" />
      </div>
      <div className="Uranus-Testimonials">
        <h1 className="Uranus">{name}</h1>
        <p className="Uranus-p">{currentContent}</p>
      </div>
      <div className="Uranus-Buttons">
        <button
          className="Uranus-ovrewiev"
          onClick={() => handleContentChange(overview.content, UranusSVG )}
        >
          01 Overview
        </button>
        <button
          className="Uranus-structure"
          onClick={() => handleContentChange(structure.content, UranusSVG2)}
        >
          02 Internal Structure
        </button>
        <button
          className="Uranus-surface"
          onClick={() => handleContentChange(geology.content, UranusSVG3)}
        >
          03 Surface Geology
        </button>
      </div>
      <div className="Uranus-Footer">
        <div className="Uranus-info">
          <h4 className="Uranus-H4">Rotation Time</h4>
          <span className="Uranus-Rotation">{rotation}</span>
        </div>
        <div className="Uranus-info">
          <h4 className="Uranus-H4">Revolution Time</h4>
          <span className="Uranus-Rotation">{revolution}</span>
        </div>
        <div className="Uranus-info">
          <h4 className="Uranus-H4">Radius</h4>
          <span className="Uranus-Rotation">{radius}</span>
        </div>
        <div className="Uranus-info">
          <h4 className="Uranus-H4">AVERAGE.TEMP</h4>
          <span className="Uranus-Rotation">{temperature}</span>
        </div>
      </div>
    </div>
  );
};

export default uranus;
