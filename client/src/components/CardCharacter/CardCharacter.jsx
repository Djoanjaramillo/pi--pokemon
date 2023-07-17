import { Link } from "react-router-dom";
import "./cardCharacter.css";
const CardCharacter = ({ name, id, image, types }) => {

    return (
        <div className="imagecentro" >
            <div className="atributes" >
                <div className="cardCharacter"  >
                    <Link to={`/detail/${id}`}>
                        <img className="image" src={image} alt={name} />

                    </Link>
                    <h1 className="name">{name}</h1>
                    <h2 className="types">{types}</h2>

                </div>
            </div>
        </div>

    )
}
export default CardCharacter;
