
import CardCharacter from "../CardCharacter/CardCharacter";

const Characters = ({characters}) => {

  return (
    <div>
      {
      characters?.map((character) => {
       
       return(
         <CardCharacter
          key={character?.id}
          name={character?.name}
          id={character?.id}
          image={character?.image}
          health={character?.health}
          attack={character?.attack}
          defense={character?.defense}
          speed={character?.speed}
          height={character?.height}
          weight={character?.weight}
          types={character?.types}
        />
      )
      })
      }
    </div>
  )
};


export default Characters;