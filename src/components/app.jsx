import { fetchPokemonData } from "../data/pokemon-data";
import { CardContainer } from "./card-container/card-container";
import { ScoreBoard } from "./score-board/score-board";
import { useEffect, useState } from "react";

export function App() {
  const [pokemonData, updatePokemonData] = useState([]);

  useEffect(() => {
    let ignore = false;

    fetchPokemonData().then((res) => {
      if (!ignore) {
        updatePokemonData([...res]);
      }
    });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <header>
        <h1>Memory Card</h1>
        <p>Do not pick same card twice</p>
      </header>
      <main>
        <ScoreBoard></ScoreBoard>
        <CardContainer pokemonData={pokemonData}></CardContainer>
      </main>
      <footer>
        <p>&copy; 2023 VMadhuranga</p>
      </footer>
    </>
  );
}
