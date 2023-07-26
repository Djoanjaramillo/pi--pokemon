import { useDispatch } from "react-redux";
import { useState } from "react";
import { orderByName, orderByAttack } from "../../Redux/actions";
import "./Ordenamiento.css"
const Ordenamiento = () => {
  const dispatch = useDispatch();
  const [ Ordenamiento, setOrden] = useState("");

  //! DEFINO LAS FUNCIONES
  const handleOrderName = (event) => {
    dispatch(orderByName(event.target.value));
    setOrden(`Ordenado ${event.target.value}`);
  };
  const handleOrderAttack = (event) => {
    dispatch(orderByAttack(event.target.value));
    setOrden(`Ordenado ${event.target.value}`);
  };
  return (
    <div>
      <label className="label">ordenar por alfabeticamente</label>
      <select
        className="fuente2"
        onChange={(event) => {
          handleOrderName(event);
        }}
      >
        <option>SIN CLASIFICAR</option>
        <option value="asc"> A-Z </option>
        <option value="desc"> Z-A </option>
      </select>


      <label className="label">ordenar por nivel de ataque</label>
      <select
        className="fuente2"
        onChange={(event) => {
          handleOrderAttack(event);
        }}
      >
        <option>SIN CLASIFICAR</option>
        <option value="asc">DECENDETE</option>
        <option value="desc">ACENDENTE</option>
      </select>
    </div>
  );
};
export default Ordenamiento;