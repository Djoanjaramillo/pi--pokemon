import { Link } from "react-router-dom";
import "./cardCharacter.css";
import { useDispatch } from "react-redux";
import {deleteCharacter} from "../../Redux/actions";

const CardCharacter = ({ name, id, image, types }) => {
    const dispatch = useDispatch();
    const handleclick = (id) => {
        dispatch(deleteCharacter(id));
       
    }
    return (
        <div className="imagecentro" >
            <div className="atributes" >
                <div className="cardCharacter"  >
                    <Link to={`/detail/${id}`}>
                        <img className="image" src={image} alt={name} />

                    </Link>
                    <h1 className="name">{name}</h1>
                    <h2 className="types">{types}
            
                    </h2>
                    <button onclick={()=>handleclick(id) } >borrar</button>

                </div>
            </div>
        </div>

    )
}
export default CardCharacter;
