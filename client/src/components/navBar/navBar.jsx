import "../navBar/navBar.css";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
const NavBar = () => {
  return (
    <div className="container">
      <div className="botones">
      
        <Link to="/home">Home</Link>
      </div>
      <div className="botones">
        <Link to="/create">CREAR</Link>
      </div>
      <div className="botones">
        <Link to="/">ATRAS</Link>
      </div>
      <SearchBar/>
    </div>
  );
};

export default NavBar;