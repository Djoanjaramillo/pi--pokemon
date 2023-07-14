import { getCharacterDetail, cleanDetail } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const CharacterDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const CharacterDetail = useSelector((state) => state.CharacterDetail);
    useEffect(() => {
        dispatch(getCharacterDetail(id));
        return () => dispatch(cleanDetail());
            
    }, [dispatch , id]);
    return (
        <div>
            <img src={CharacterDetail?.image} alt="" />
            <h1>{CharacterDetail?.name}</h1>
            <label style={{ fontWeight: 800 }}>vida</label>
            <p>{CharacterDetail?.life}</p>
            <label style={{ fontWeight: 800 }}>tipo</label>
            <p>{CharacterDetail?.types}</p>
            <label style={{ fontWeight: 800 }}>ataque</label>
            <p>{CharacterDetail?.attack}</p>
            <button>
                <Link to="/home">Volver</Link>
            </button>
            </div>
    )
    }
    export default CharacterDetail;
    
