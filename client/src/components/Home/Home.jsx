import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../Redux/actions";
import Characters from "../Characters/Characters";
import NavBar from "../navBar/navBar";
import "./Home.css";

const Home = () => {
    const dispatch = useDispatch();
    const poke = useSelector((state) => state.characters);

    useEffect(() => {
        dispatch(getCharacters());
    }, [dispatch]);

    return (
        <div className="home">
             <NavBar />
             <h1 className="title">POKEMONES</h1>
            {poke && <Characters characters={poke} />}
           
        </div>
    )

}
export default Home;