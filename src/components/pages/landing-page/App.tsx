import "./Earth.css";
import { useState } from "react";
import EaarthSVG from "./Earth-images/Earth.svg";
import EarthSVG2 from "./Earth-images/Earth-Struct.svg";
import EarthSVG3 from "./Earth-images/Earth-Geology.svg";
import planets from "../data.json";
import Navbar from '../../navbar/navbar'; // Adjust the path accordingly


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

const App = () => {
  const mercuryData = planets.find(
    (planet: Planet) => planet.name === "Earth"
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
  const [currentImage, setCurrentImage] = useState(EaarthSVG);

  // Function to handle changing content and image
  const handleContentChange = (content: string, image: string) => {
    setCurrentContent(content);
    setCurrentImage(image);
  };

  return (
    <div>
      <Navbar />
      <div className="Earth-Image">
        <img className="Earth-Images" src={currentImage} alt="" />
      </div>
      <div className="Earth-Testimonials">
        <h1 className="Earth">{name}</h1>
        <p className="Earth-p">{currentContent}</p>
      </div>
      <div className="Earth-Buttons">
        <button
          className="Earth-ovrewiev"
          onClick={() => handleContentChange(overview.content, EaarthSVG)}
        >
          01 Overview
        </button>
        <button
          className="Earth-structure"
          onClick={() => handleContentChange(structure.content,EarthSVG2)}
        >
          02 Internal Structure
        </button>
        <button
          className="Earth-surface"
          onClick={() => handleContentChange(geology.content,EarthSVG3)}
        >
          03 Surface Geology
        </button>
      </div>
      <div className="Earth-Footer">
        <div className="Earth-info">
          <h4 className="Earth-H4">Rotation Time</h4>
          <span className="Earth-Rotation">{rotation}</span>
        </div>
        <div className="Earth-info">
          <h4 className="Earth-H4">Revolution Time</h4>
          <span className="Earth-Rotation">{revolution}</span>
        </div>
        <div className="Earth-info">
          <h4 className="Earth-H4">Radius</h4>
          <span className="Earth-Rotation">{radius}</span>
        </div>
        <div className="Earth-info">
          <h4 className="Earth-H4">AVERAGE.TEMP</h4>
          <span className="Earth-Rotation">{temperature}</span>
        </div>
      </div>
    </div>
  );
};

export default App;

