import { Link } from "react-router-dom";
 const Landing = () => {
    return (
        <div>
            <h1>bienvenidos a la mejor pagina de pokemons</h1>
            <button>
                <Link to="/home">CLICK</Link>
            </button>
        </div>
    );
 }
 export default Landing;