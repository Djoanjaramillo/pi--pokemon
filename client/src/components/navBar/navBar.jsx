import "../navBar/navBar.css";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

const NavBar = (onseach) => {
  return (
    
    <div className="containerBar">
       <div className="botones">
        <Link to="/">INICIO</Link>
      </div>
      <div className="botones">
        <Link to="/create">CREAR</Link>
      </div>
      <SearchBar onseach={onseach} />
    </div>
  );
};

export default NavBar;