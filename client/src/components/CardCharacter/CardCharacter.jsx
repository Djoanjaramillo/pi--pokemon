import { Link } from "react-router-dom";
import "./cardCharacter.css";
const CardCharacter = ({ name, id, image, life, attack, defense, speed, height, weight, types }) => {
    console.log(types , name , image);
    return (
        <div className="cardCharacter">
            <Link to={`/detail/${id}`}>
                <img src={image} alt={name}   />
     
            </Link>
            <h1>{name}</h1> 
            <h2>{types}</h2>
            <div className="cardCharacter.atributes">
        <h2>{name}</h2>
        <h2>{types}</h2>
      </div>
           
        </div>
        
    )
}
export default CardCharacter;
