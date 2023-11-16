import { Card } from "../card/card";

export function CardContainer({ pokemonData, handleScore, updatePokemonData }) {
  const cards = [];

  function shufflePokemonCards() {
    const shuffle = [...pokemonData].reduce(
      (acc, cur, index) => {
        if (index % 2 === 0) {
          acc.even.push(cur);
        } else if (index % 2 !== 0) {
          acc.odd.push(cur);
        }

        return acc;
      },
      { odd: [], even: [] },
    );

    updatePokemonData([...shuffle.odd, ...shuffle.even]);
  }

  pokemonData.forEach((pokemon) => {
    cards.push(
      <Card
        key={pokemon.id}
        src={pokemon.imageURL}
        alt={pokemon.name}
        name={pokemon.name}
        handleClick={{ handleScore, shufflePokemonCards }}
      ></Card>,
    );
  });

  return <div>{cards}</div>;
}
