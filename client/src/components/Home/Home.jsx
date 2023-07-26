import React, { useEffect , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByName, getCharacters, getTypes } from "../../Redux/actions";
import Characters from "../Characters/Characters";
import NavBar from "../navBar/navBar";
import Paginado from "./Paginado/Paginado";
import Ordenamiento from "../ordenamiento/Ordenamiento";
import Filter from "../Filter/Filter";
import Refrescar from "../Refrescar/Refrescar";
import "./Home.css";

const Home = () => {
    const[name ] = useState("");
    const dispatch = useDispatch();
    const poke = useSelector((state) => state.characters);
function onseach(event){
    event.preventDefault();
    dispatch(getByName(name));
}
    useEffect(() => {
        dispatch(getCharacters());
        dispatch(getTypes());
    }, [dispatch]);
    
    return (
      <div className="home">
        <NavBar onSearch={onseach} />
        <h1 className="title">POKEMONES</h1>
        <Filter />
        <Ordenamiento />
        <Refrescar />
        <Characters />
        <Paginado characters={poke} />
      </div>
    );
  };
export default Home;