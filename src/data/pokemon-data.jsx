export const pokemonData = [];

async function fetchPokemonData() {
  try {
    for (let i = 1; i <= 15; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`, {
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      pokemonData.push({
        id: crypto.randomUUID(),
        name: data.name,
        imageURL: data.sprites.other["official-artwork"].front_default,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

fetchPokemonData();
