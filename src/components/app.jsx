import { pokemonData } from "../data/pokemon-data";
import { CardContainer } from "./card-container/card-container";
import { ScoreBoard } from "./score-board/score-board";

export function App() {
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
