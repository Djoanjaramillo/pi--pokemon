import { getCharacterDetail, cleanDetail, } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./CharacterDetail.css"

const CharacterDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const CharacterDetail = useSelector((state) => state.characterDetail);
    useEffect(() => {
        dispatch(getCharacterDetail(id));
        dispatch(cleanDetail());
    }, [dispatch, id]);
    return (
        <div className="detail">
            <img src={CharacterDetail?.image} alt="" />
            <div >
            <h1>{CharacterDetail?.id}</h1>
            <h2 style={{ fontWeight: 800 }}>name:{CharacterDetail.name}</h2>
            <h2 style={{ fontWeight: 800 }}>vida:{CharacterDetail.health}</h2>
            <h2 style={{ fontWeight: 800 }}>tipo:{CharacterDetail.types}</h2>
            <h2 style={{ fontWeight: 800 }}>ataque:{CharacterDetail.attack}</h2>
            <h2 style={{ fontWeight: 800 }}>defensa:{CharacterDetail.defense}</h2>
            <h2 style={{ fontWeight: 800 }}>velocidad:{CharacterDetail.speed}</h2>
            <h2 style={{ fontWeight: 800 }}>altura:{CharacterDetail.height}</h2>
            <h2 style={{ fontWeight: 800 }}>peso:{CharacterDetail.weight}</h2>
            <button className="boton">
                <Link to="/home">Volver</Link>
            </button>
            </div>
        </div>
    )
}
export default CharacterDetail;

