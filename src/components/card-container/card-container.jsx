import { Card } from "../card/card";

export function CardContainer({ pokemonData, handleScore }) {
  const cards = [];

  pokemonData.forEach((pokemon) => {
    cards.push(
      <Card
        key={pokemon.id}
        src={pokemon.imageURL}
        alt={pokemon.name}
        name={pokemon.name}
        handleClick={handleScore}
      ></Card>,
    );
  });

  return <div>{cards}</div>;
}
