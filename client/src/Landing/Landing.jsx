import { Link } from "react-router-dom";
import"./Landing.css"
 const Landing = () => {
    return (
        <div className="boton1" >
            <h1 className="bienvenidos" >bienvenidos a la mejor pagina de pokemons</h1>
            <button className="boton">
                <Link className="link" to="/home">INGRESAR</Link>
            </button>
        </div>
    );
 }
 export default Landing;