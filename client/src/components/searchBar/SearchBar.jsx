import React from "react";
import "./searchBar.css"
const SearchBar = ({ onSearch }) => {
  const handleClick = () => {
    // Aquí se agregar la lógica para realizar la búsqueda
    onSearch();
  };

  return (
  <div>
    <button className="button" onClick={handleClick}style={{ fontWeight: 1000 }}>Buscar</button>
    </div>
  );
};

export default SearchBar;