import React from "react";
import "./searchBar.css"
import { getByName, getCharacters } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (!isNaN(name)) {
      dispatch(getCharacters(name));
    } else {
      dispatch(getByName(name));
    }
    setName("");
  };

  return (
    <div className="buscador" >
      <h3 >busca tu pokemon</h3>
      <input
        type="text"
        onChange={(e) => {handleInputChange(e);}} className="input" />
      <button className="button"  onClick={handleInputSubmit} > buscar</button>
    </div>
  );
};

export default SearchBar;