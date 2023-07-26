import React from "react";
import { useDispatch } from "react-redux";
import { getCharacters } from "../../Redux/actions";
import "./Refrescar.css"

const Refrescar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getCharacters());
  };

  return <button className="boton30" onClick={handleClick}>resetear</button>;
  
};

export default Refrescar ;