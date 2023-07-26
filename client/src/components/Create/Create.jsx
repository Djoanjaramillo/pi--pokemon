import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCharacter } from "../../Redux/actions";
import { validacion } from "./validacionpoke";
import "../Create/Create.css";
import { Link } from "react-router-dom";

const Create = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    health: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
    image: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    health: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
    image: "",
  });

  const opciones = [
    "rock",
    "water",
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "bug",
    "ghost",
    "steel",
    "fire",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
    "unknown",
    "shadow",
  ];

  const changeHandler = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const fieldErrors = validacion(field, value);
    setErrors({ ...errors, [field]: fieldErrors[field] });
    setForm({ ...form, [field]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (validateForm()) {
      dispatch(createCharacter(form))
        .then(() => {
          alert("Pokemon creado correctamente");
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.data &&
            error.response.data.errors
          ) {
            const errors = error.response.data.errors;
            alert("Debe completar los campos obligatorios");
          } else {
            alert(`Error: ${error.message}`);
          }
        });
    }
  };
  

  const validateForm = () => {
    if (
      !errors.name &&
      !errors.attack &&
      !errors.defense &&
      !errors.health &&
      !errors.height &&
      !errors.speed &&
      !errors.weight &&
      form.image.trim().match(/^https?:\/\/\S+$/) && // Verificar si es una URL válida
      form.types.length > 0
    ) {
      return true;
    } else {
      // Mostrar alerta de acuerdo al error específico
      if (errors.name) {
        alert("Hay un error en el nombre");
      } else if (errors.attack) {
        alert("Hay error en el campo ataque");
      } else if (errors.defense) {
        alert("Hay error en el campo defensa");
      } else if (errors.health) {
        alert("Hay error en el campo vida");
      } else if (errors.height) {
        alert("Hay error en el campo altura");
      } else if (errors.speed) {
        alert("Hay error en el campo velocidad");
      } else if (errors.weight) {
        alert("Hay error en el campo peso");
      } else if (!form.image.trim().match(/^https?:\/\/\S+$/)) {
        alert("Debe ingresar una URL válida para la imagen");
      } else if (errors.types) {
        alert("Debe seleccionar al menos un tipo");
      }
  
      return false;
    }
  };
  
  const selectedTypes = (type) => {
    return form.types.includes(type);
  };

  const handleRandom = () => {
    const nombresPokemon = [
      "Sparkleash",
      "Florafin",
      "Frosquid",
      "Stonewyrm",
      "Nightwingle",
    ];
    const maxStat = 100;
    const minStat = 0;

    setForm({
      name: nombresPokemon[Math.floor(Math.random() * nombresPokemon.length)],
      health: Math.floor(Math.random() * (maxStat - minStat) + minStat),
      attack: Math.floor(Math.random() * (maxStat - minStat) + minStat),
      defense: Math.floor(Math.random() * (maxStat - minStat) + minStat),
      speed: Math.floor(Math.random() * (maxStat - minStat) + minStat),
      height: Math.floor(Math.random() * (maxStat - minStat) + minStat),
      weight: Math.floor(Math.random() * (maxStat - minStat) + minStat),
      types: opciones.filter(() => Math.random() < 0.1), // Aleatoriamente elige algunos tipos
      image: "https://avatars.githubusercontent.com/u/106999326?v=4?s=400",
    });
  };

  const handleTypeChange = (event) => {
    const type = event.target.value;
    if (selectedTypes(type)) {
      // Si ya está seleccionado, lo eliminamos
      setForm({ ...form, types: form.types.filter((t) => t !== type) });
    } else {
      // Si no está seleccionado, lo agregamos
      setForm({ ...form, types: [...form.types, type] });
    }
  };
  

  return (
    <div className="todito">
      <h1 className="h1">Crea tu pokemon</h1>
      <button className="botoncito" onClick={handleRandom}>
        Aleatorio
      </button>
      <div className="todito2">
        <form onSubmit={submitHandler}>
          <div className="todito3">
            <div className="todito4">
              <label>nombre</label>
              <br />
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={changeHandler}
              />
              {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
            </div>
            <div className="todito4">
              <label>vida</label>
              <br />
              <input
                name="health"
                type="text"
                value={form.health}
                onChange={changeHandler}
              />
              {errors.health && (
                <div style={{ color: "red" }}>{errors.health}</div>
              )}
            </div>
            <div className="todito4">
              <label>ataque</label>
              <br />
              <input
                name="attack"
                type="text"
                value={form.attack}
                onChange={changeHandler}
              />
              {errors.attack && (
                <div style={{ color: "red" }}>{errors.attack}</div>
              )}
            </div>
            <div className="todito4" >
              <label >velocidad</label>
              <br />
              <input
                name="speed"
                type="text"
                value={form.speed}
                onChange={changeHandler}
              />
              {errors.speed && (
                <div style={{ color: "red" }}>{errors.speed}</div>
              )}
            </div>
            <div className="todito4" >
              <label >altura</label>
              <br />
              <input
                name="height"
                type="text"
                value={form.height}
                onChange={changeHandler}
              />
              {errors.height && (
                <div style={{ color: "red" }}>{errors.height}</div>
              )}
            </div>
            <div className="todito4">
              <label >peso</label>
              <br />
              <input
                name="weight"
                type="text"
                value={form.weight}
                onChange={changeHandler}
              />
              {errors.weight && (
                <div style={{ color: "red" }}>{errors.weight}</div>
              )}
            </div>
          </div>
          <div className="todito4">
            <label >tipo</label>
            <br />

            {opciones.map((opcion) => (
              <div key={opcion}>
                <input
                  type="checkbox"
                  id={`opcion-${opcion}`}
                  name="opciones"
                  value={opcion}
                  checked={selectedTypes(opcion)} // Marcamos el checkbox si está seleccionado
                  onChange={handleTypeChange} // Agregamos el evento onChange para gestionar los cambios
                />
                <label htmlFor={`opcion-${opcion}`}>{opcion}</label>
              </div>
            ))}
          </div>
          <div className="todito4" >
            <label >imagen</label>
            <br />
            <input
              name="image"
              type="url"
              value={form.image}
              onChange={changeHandler}
            />
            {errors.image && <div style={{ color: "red" }}>{errors.image}</div>}
          </div>
          <button className="botoncito" type="submit" >
            enviar
          </button>
          <button className="botoncito">
            <Link className="link" to="/home">VOLVER</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;