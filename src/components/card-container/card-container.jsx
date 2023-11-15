import { Card } from "../card/card";

export function CardContainer({ pokemonData }) {
  const cards = [];

  pokemonData.forEach((pokemon) => {
    cards.push(
      <Card
        key={pokemon.id}
        src={pokemon.imageURL}
        alt={pokemon.name}
        name={pokemon.name}
      ></Card>,
    );
  });

  return <div>{cards}</div>;
}
