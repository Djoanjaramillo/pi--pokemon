import React, { useState, useMemo } from "react";
import CardCharacter from "../../CardCharacter/CardCharacter";
import "./paginado.css";
const Paginado = ({ characters }) => {
  const charactersPerPage = 12; // Número de personajes por página
  const [currentPage, setCurrentPage] = useState(1);

  // Calcula la cantidad total de páginas
  const totalPages = Math.ceil(characters.length / charactersPerPage);

  // Usa useMemo para dividir los personajes en páginas
  const paginadoCharacters = useMemo(() => {
    const startIndex = (currentPage - 1) * charactersPerPage;
    const endIndex = startIndex + charactersPerPage;
    return characters.slice(startIndex, endIndex);
  }, [characters, currentPage]);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
   
    <div>
      {paginadoCharacters.map((character) => (
        <CardCharacter
          key={character.id}
          name={character.name}
          id={character.id}
          image={character.image}
          health={character.health}
          attack={character.attack}
          defense={character.defense}
          speed={character.speed}
          height={character.height}
          weight={character.weight}
          types={character.types}
        />
        
      ))}
      
      <div>
        <button  className="paginado" onClick={goToPrevPage} disabled={currentPage === 1}>
          {"<"} Anterior
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
            className="paginado"
              key={page}
              onClick={() => goToPage(page)}
              disabled={currentPage === page}
            >
              {page}
            </button>
          )
        )}
        <button  className="paginado" onClick={goToNextPage} disabled={currentPage === totalPages}>
          Siguiente {">"}
        </button>
    </div>
    </div>
  );
};

export default Paginado;