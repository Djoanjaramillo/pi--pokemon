import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../Redux/actions";
import Characters from "../Characters/Characters";

const Home = () => {
    const dispatch = useDispatch();
    const poke = useSelector((state) => state.characters);

    useEffect(() => {
        dispatch(getCharacters());
    }, [dispatch]);

    return (
        <div>
            {poke && <Characters characters={poke} />}
        </div>
    )

}
export default Home;