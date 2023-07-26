import { filterSource, filterType  } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./Filter.css";
const Filter = () => {
  const dispatch = useDispatch();

  const types = useSelector((state) => state.types);

  const handleFilterSource = (event) => {
    dispatch(filterSource(event.target.value));
  };

  const getTypesFiltered = (event) => {
    dispatch(filterType(event.target.value));
  };

  return (
    <div>
      <label className="fuente">Fuente: </label>

      <select
        id="filterSource"
        className="fuente2"
        onChange={(e) => {
          handleFilterSource(e);
        }}
      >
        <option>TODOS</option>
        <option>API</option>
        <option>DB</option>
      </select>

      <label className="fuente">tipo: </label>
      <select
        id="filterType"
        onChange={getTypesFiltered}
        className="fuente2"
      >
      
        <option>TODOS</option>
        {types.map((type) => {
          
          return (
            <option  key={type.name} value={type.name}>
              {type.name.toUpperCase()}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Filter;