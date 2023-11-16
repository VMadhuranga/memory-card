export async function fetchPokemonData() {
  try {
    const pokemonData = [];

    for (let i = 1; i <= 16; i++) {
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

    return pokemonData;
  } catch (error) {
    console.log(error);
  }
}
