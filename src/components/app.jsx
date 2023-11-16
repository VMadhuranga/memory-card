import { fetchPokemonData } from "../data/pokemon-data";
import { CardContainer } from "./card-container/card-container";
import { ScoreBoard } from "./score-board/score-board";
import { useEffect, useState } from "react";
import "./app.css";

export function App() {
  const [pokemonData, updatePokemonData] = useState([]);
  // current score calculated by using currentScore.length
  const [currentScore, updateCurrentScore] = useState([]);
  let [bestScore, updateBestScore] = useState(0);

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

  function handleScoreChange(e) {
    if (!currentScore.includes(e.target.dataset.name)) {
      updateCurrentScore([...currentScore, e.target.dataset.name]);
    } else if (bestScore < currentScore.length) {
      updateBestScore(currentScore.length);
      updateCurrentScore([]);
    } else {
      updateCurrentScore([]);
    }
  }

  return (
    <>
      <header>
        <h1>Memory Card</h1>
        <p>Do not pick same card twice</p>
      </header>
      <main>
        <ScoreBoard
          currentScore={currentScore.length}
          bestScore={bestScore}
        ></ScoreBoard>
        <CardContainer
          pokemonData={pokemonData}
          handleScore={handleScoreChange}
          updatePokemonData={updatePokemonData}
        ></CardContainer>
      </main>
      <footer>
        <p>&copy; 2023 VMadhuranga</p>
      </footer>
    </>
  );
}
