import './navbar.css'; 
import { Link } from "react-router-dom";
const navbar =() => {
  return (
    <div className="navbar">
      <h1>The Planets</h1>
      <div className="links">
      <Link to="/Mercury">Mercury</Link>
        <Link to="/Venus">Venus</Link>
        <Link to="/">Earth</Link>
        <Link to="/Mars">Mars</Link>
        <Link to="/Jupiter">Jupiter</Link>
        <Link to="/Saturn">Saturn</Link>
        <Link to="/Uranus">Uranus</Link>
        <Link to="/neptune">Neptune</Link>
      </div>
    </div>
  )
}

export default navbar
